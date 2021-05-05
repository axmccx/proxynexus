import Queue from 'bull';
// eslint-disable-next-line camelcase
import { card, card_printing, pack } from '../database/models';
import { successResponse, errorResponse, t2key } from '../helpers';

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const workQueue = new Queue('work', REDIS_URL);

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
    progress: 0,
    msg: 'Waiting in queue...',
  });
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
  writeToClient(jobId, {
    status: 'completed',
    progress: 100,
    msg: JSON.parse(result),
  });
});

export const getOptions = async (req, res) => {
  const allEntries = await card_printing.findAll(
    { include: [card, 'lm_card_file', 'pt_card_file', 'de_card_file'] },
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

export const getCompletedRequest = async (req, res) => (
  successResponse(req, res, 'getCompletedRequest!')
);

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

export const generate = async (req, res) => {
  // TODO save the entry to the stats DB here
  await workQueue.add(req.body);
  return successResponse(req, res);
};
