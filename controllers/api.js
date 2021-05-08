import Queue from 'bull';
import path from 'path';
import Sequelize from 'sequelize';
import {
  // eslint-disable-next-line camelcase
  card, card_printing, pack, request,
} from '../database/models';
import { successResponse, errorResponse, t2key } from '../helpers';

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const workQueue = new Queue('work', REDIS_URL);
const RESULTS_BASE_DIR = `${process.env.AZURE_BASE_BLOB_URL}/${process.env.AZURE_RESULTS_CONTAINER_NAME}/`;

let sessionID = 0;
const connections = {};

function writeToClient(jobId, data) {
  workQueue.getJob(jobId).then((job) => {
    const clientRes = connections[job.data.sessionID];
    if (clientRes !== undefined) {
      clientRes.write(`data: ${JSON.stringify(data)}\n\n`);
    }
  });
}

workQueue.on('waiting', (jobId) => {
  writeToClient(jobId, {
    status: 'waiting',
    msg: 'Waiting in queue...',
  });
  console.log('Request placed in queue');
});

workQueue.on('global:progress', (jobId, progress) => {
  workQueue.getJobLogs(jobId).then((e) => {
    const msg = e.logs.pop();
    writeToClient(jobId, {
      status: 'in progress',
      progress,
      msg,
    });
  });
});

workQueue.on('global:completed', (jobId, result) => {
  const resultJSON = JSON.parse(result);
  request.update(
    {
      hash: resultJSON.hash,
      filename: path.basename(resultJSON.filepath),
      is_download_available: true,
    },
    { where: { id: resultJSON.requestID } },
  ).then(() => {
    writeToClient(jobId, {
      status: 'completed',
      msg: resultJSON.requestID,
    });
    console.log('Completed!');
  });
});

export const getOptions = async (req, res) => {
  const allEntries = await card_printing.findAll(
    { include: [card, pack, 'lm_card_file', 'pt_card_file', 'de_card_file'] },
  );
  const cardTitleDB = {};
  const cardCodeDB = {};

  allEntries.forEach((entry) => {
    const tkey = t2key(entry.card.title);
    if (Object.prototype.hasOwnProperty.call(cardTitleDB, tkey)) {
      cardTitleDB[tkey].codes.push(entry.code);
    } else {
      cardTitleDB[tkey] = {
        codes: [entry.code],
        title: entry.card.title,
      };
    }

    const availableSources = [];
    let lmPreview;
    let ptPreview;
    let dePreview;

    if (entry.lm_card_file !== null) {
      availableSources.push('lm');
      lmPreview = {
        front: entry.lm_card_file.preview,
        back: entry.lm_card_file.preview_back,
      };
    }

    if (entry.pt_card_file !== null) {
      availableSources.push('pt');
      ptPreview = {
        front: entry.pt_card_file.preview,
        back: entry.pt_card_file.preview_back,
      };
    }

    if (entry.de_card_file !== null) {
      availableSources.push('de');
      dePreview = {
        front: entry.de_card_file.preview,
        back: entry.de_card_file.preview_back,
      };
    }

    cardCodeDB[entry.code] = {
      title: entry.card.title,
      side: entry.card.side,
      pack: entry.pack.name,
      availableSources,
      lmPreview,
      ptPreview,
      dePreview,
    };
  });

  const packList = await pack.findAll({
    attributes: ['pack_code', 'name', 'is_core'],
    where: { is_visible: true },
    order: [
      ['id', 'DESC'],
    ],
  });

  const response = {
    cardTitleDB,
    cardCodeDB,
    packList,
  };
  return successResponse(req, res, response);
};

export const getPack = async (req, res) => {
  const cardsInPack = await card_printing.findAll({
    attributes: ['code', 'quantity'],
    include: [
      {
        model: card,
        attributes: ['type'],
      },
      {
        model: pack,
        attributes: [],
        where: { pack_code: req.params.pack },
      }],
    order: [
      ['position', 'ASC'],
    ],
  });
  return successResponse(req, res, cardsInPack);
};

export const getJobStatus = async (req, res) => {
  const headers = {
    'Content-Type': 'text/event-stream',
    Connection: 'keep-alive',
    'Cache-Control': 'no-cache',
  };
  res.writeHead(200, headers);
  sessionID += 1;
  const data = {
    status: 'init connection',
    progress: 0,
    msg: sessionID,
  };
  res.write(`data: ${JSON.stringify(data)}\n\n`);
  connections[sessionID] = res;
};

// eslint-disable-next-line consistent-return
export const getFile = async (req, res) => {
  let fileUrl;
  try {
    const requestRow = await request.findOne({ where: { id: req.params.id } });
    const { filename } = requestRow;
    fileUrl = `${RESULTS_BASE_DIR}${filename}`;
  } catch (err) {
    const msg = 'File ID not found!';
    console.error(msg);
    return errorResponse(req, res, msg);
  }
  res.status(301).redirect(fileUrl);
};

export const getStats = async (req, res) => {
  const downloadsCount = await request.findAll({
    attributes: [
      [Sequelize.cast(Sequelize.col('created_at'), 'date'), 'createdOn'],
      [Sequelize.fn('COUNT', Sequelize.col('id')), 'count'],
    ],
    group: [Sequelize.cast(Sequelize.col('created_at'), 'date'), 'createdOn'],
    order: [[Sequelize.col('createdOn')]],
    limit: 14,
  });
  const allPacks = await pack.findAll();
  const allPacksByCode = allPacks.reduce((acc, entry) => (
    { ...acc, [entry.pack_code]: entry.name }), {});
  const recentDownloadsQuery = await request.findAll({ order: [['created_at', 'DESC']], limit: 50 });
  const recentDownloads = recentDownloadsQuery.map((entry) => ({
    id: entry.id,
    date: entry.createdAt,
    type: entry.generate_type,
    selection: entry.selected_tab,
    request: ((entry.request_text in allPacksByCode)
      ? allPacksByCode[entry.request_text] : entry.request_text),
    is_download_available: entry.is_download_available,
  }));
  return successResponse(req, res, { downloadsCount, recentDownloads });
};

export const generate = async (req, res) => {
  const {
    generateType,
    selectedTab,
    cardList,
  } = req.body;

  let requestText;
  switch (selectedTab) {
    case 'Card List':
      requestText = req.body.cardListTextArea;
      break;
    case 'Set':
      requestText = req.body.selectedSet;
      break;
    case 'Decklist':
      requestText = req.body.deckURLText;
      break;
    default:
      break;
  }

  const newRequest = await request.create({
    generate_type: generateType,
    selected_tab: selectedTab,
    request_text: requestText,
    card_list: cardList.map((c) => (`${c.code}-${c.source}`)),
    hash: '',
    filepath: '',
    is_download_available: false,
  });

  await workQueue.add({ ...req.body, requestID: newRequest.id });
  return successResponse(req, res);
};
