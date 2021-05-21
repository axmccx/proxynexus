const fs = require('fs');
const fetch = require('node-fetch');
const PDFDocument = require('pdfkit');
const sharp = require('sharp');
const archiver = require('archiver');
// eslint-disable-next-line camelcase
const { card_file, card_printing } = require('../database/models');

const TEMP_IMG_PATH = './tmp/images/';
const IMAGE_BASE_DIR = `${process.env.AZURE_BASE_BLOB_URL}/${process.env.AZURE_IMAGES_CONTAINER_NAME}/`;

function cmToPt(cm) {
  return cm * 28.3464566929134;
}

const cardWidth = 6.299;
const cardHeight = 8.788;
const cardWidthPt = cmToPt(cardWidth);
const cardHeightPt = cmToPt(cardHeight);
let progress;

function fileDoesNotExists(path, onExistsMsg, job, progressIncrement) {
  try {
    if (!fs.existsSync(path)) {
      return true;
    }
    console.error(onExistsMsg);
    // job.log(onExistsMsg);
    progress += progressIncrement;
    job.progress(progress);
  } catch (err) {
    console.error(err);
  }
  return false;
}

async function getFileNames(cardList, includeCardBacks, generateType, lmPlacementType = 'fit') {
  // ugly hard coded file names for Jinteki Biotech: Life Imagined
  const biotechFileNames = {
    lm_card_file: {
      pdf_back: ['08012b_lm_pdf_back.jpg', '08012c_lm_pdf_back.jpg'],
      mpc_fitted_back: ['08012b_lm_fitted_back.jpg', '08012c_lm_fitted_back.jpg'],
      mpc_scaled_back: ['08012b_lm_scaled_back.jpg', '08012c_lm_scaled_back.jpg'],
    },
    pt_card_file: {
      pdf_back: ['08012b_pt_pdf_back.jpg', '08012c_pt_pdf_back.jpg'],
      mpc_fitted_back: ['08012b_pt_fitted_back.jpg', '08012c_pt_fitted_back.jpg'],
      mpc_scaled_back: ['08012b_pt_scaled_back.jpg', '08012c_pt_scaled_back.jpg'],
    },
  };
  const cardFiles = await cardList.reduce(async (prev, card) => {
    const acc = await prev;
    let sourceCol;
    if (card.source === 'lm') { sourceCol = 'lm_card_file'; }
    if (card.source === 'pt') { sourceCol = 'pt_card_file'; }
    if (card.source === 'de') { sourceCol = 'de_card_file'; }
    let attributes;
    if (generateType === 'pdf') { attributes = ['pdf', 'pdf_back']; }
    if (generateType === 'mpc') {
      if (lmPlacementType === 'fit') { attributes = ['mpc_fitted', 'mpc_fitted_back']; }
      if (lmPlacementType === 'scale') { attributes = ['mpc_scaled', 'mpc_scaled_back']; }
    }
    const filenames = await card_printing.findOne({
      attributes: [],
      include: [{
        model: card_file,
        as: sourceCol,
        attributes,
      }],
      where: { code: card.code },
    });
    acc.push({
      front: filenames[sourceCol][attributes[0]],
      back: filenames[sourceCol][attributes[1]],
    });
    if (card.code === '08012' && includeCardBacks) {
      const extraBacks = biotechFileNames[sourceCol][attributes[1]];
      extraBacks.forEach((backFileName) => {
        acc.push({
          front: filenames[sourceCol][attributes[0]],
          back: backFileName,
        });
      });
    }
    return acc;
  }, Promise.resolve([]));
  if (includeCardBacks) {
    return cardFiles
      .reduce((acc, filename) => (acc.concat([filename.front, filename.back])), [])
      .filter((filename) => (filename !== ''));
  }
  return cardFiles
    .map((filename) => (filename.front))
    .filter((filename) => (filename !== ''));
}

async function downloadFiles(fileNames, job, progressIncrement) {
  if (!fs.existsSync(TEMP_IMG_PATH)) { fs.mkdirSync(TEMP_IMG_PATH, { recursive: true }); }
  const promises = fileNames.map(async (fileName) => {
    const filePath = TEMP_IMG_PATH + fileName;
    const url = IMAGE_BASE_DIR + fileName;
    const imgRes = await fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Error downloading: ${fileName}`);
        }
        console.log(`Downloaded ${fileName}`);
        // job.log(`Downloaded ${fileName}`);
        progress += progressIncrement;
        job.progress(progress);
        return res;
      });
    const fileStream = fs.createWriteStream(filePath);
    return new Promise((resolve, reject) => {
      imgRes.body.pipe(fileStream);
      imgRes.body.on('error', (err) => {
        reject(err);
      });
      fileStream.on('finish', () => {
        resolve();
      });
    });
  });
  await Promise.all(promises);
}

function drawCutLines(doc, leftMargin, topMargin) {
  doc.lineWidth(0.5);
  // draw top lines
  let x = cardWidthPt + leftMargin;
  let y = topMargin;
  doc.moveTo(x, y)
    .lineTo(x, y - 10)
    .stroke();
  x += cardWidthPt;
  doc.moveTo(x, y)
    .lineTo(x, y - 10)
    .stroke();

  // draw lines between row 1 and 2
  x = leftMargin;
  y += cardHeightPt;
  doc.moveTo(x, y)
    .lineTo(x - 18, y)
    .stroke();
  x += 3 * cardWidthPt;
  doc.moveTo(x, y)
    .lineTo(x + 18, y)
    .stroke();

  // draw lines between row 2 and 3
  x = leftMargin;
  y += cardHeightPt;
  doc.moveTo(x, y)
    .lineTo(x - 18, y)
    .stroke();
  x += 3 * cardWidthPt;
  doc.moveTo(x, y)
    .lineTo(x + 18, y)
    .stroke();

  // draw bottom lines
  x = cardWidthPt + leftMargin;
  y += cardHeightPt;
  doc.moveTo(x, y)
    .lineTo(x, y + 10)
    .stroke();
  x += cardWidthPt;
  doc.moveTo(x, y)
    .lineTo(x, y + 10)
    .stroke();
}

function drawFullCutLines(doc, leftMargin, topMargin) {
  doc.lineWidth(0.75);
  const greyStroke = '#818181';

  // draw vertical lines
  let x = cardWidthPt + leftMargin;
  let y = 0;
  doc.moveTo(x, y)
    .lineTo(x, y + 1000)
    .stroke(greyStroke);
  x += cardWidthPt;
  doc.moveTo(x, y)
    .lineTo(x, y + 1000)
    .stroke(greyStroke);

  // draw horizontal lines
  x = 0;
  y = cardHeightPt + topMargin;
  doc.moveTo(x, y)
    .lineTo(x + 1000, y)
    .stroke(greyStroke);
  y += cardHeightPt;
  doc.moveTo(x, y)
    .lineTo(x + 1000, y)
    .stroke(greyStroke);
}

function makeFrontPage(doc) {
  doc.moveDown(15);
  doc.fontSize(20);
  doc.text('Generated by Proxy Nexus at https://proxynexus.net', {
    align: 'center',
  });
  doc.moveDown(3);
  doc.fontSize(14);
  doc.text('Print this PDF at 100% size with no additional margins.', {
    align: 'center',
  });
  doc.moveDown(20);
  doc.fontSize(12);
  doc.text(`Generated on: ${new Date().toString()}`, {
    align: 'left',
  });
  doc.addPage();
}

function addImages(lst, doc, leftMargin, topMargin, fullCutLines, job, progressIncrement) {
  let rowCount = 0;
  let colCount = 0;

  for (let i = 0, n = lst.length; i < n; i += 1) {
    const code = lst[i];
    const x = rowCount * cardWidthPt + leftMargin;
    const y = colCount * cardHeightPt + topMargin;
    const imgPath = TEMP_IMG_PATH + code;

    doc.image(imgPath, x, y, { width: cardWidthPt, height: cardHeightPt });
    rowCount += 1;

    console.log(`Added ${code} to PDF`);
    // job.log(`Added ${code} to PDF`);
    progress += progressIncrement;
    job.progress(progress);

    if (rowCount > 2) {
      rowCount = 0;
      colCount += 1;
    }
    if (i === lst.length - 1) {
      if (fullCutLines) {
        drawFullCutLines(doc, leftMargin, topMargin);
      } else {
        drawCutLines(doc, leftMargin, topMargin);
      }
    }
    if (colCount > 2 && i < lst.length - 1) {
      colCount = 0;
      if (fullCutLines) {
        drawFullCutLines(doc, leftMargin, topMargin);
      } else {
        drawCutLines(doc, leftMargin, topMargin);
      }
      doc.addPage();
    }
  }
}

async function generatePdf(job, hash) {
  const {
    cardList,
    includeCardBacks,
    PdfPageSize,
    fullCutLines,
    requestID,
  } = job.data;
  const pdfFileName = `${hash}.pdf`;

  progress = 0;
  const fileNames = await getFileNames(cardList, includeCardBacks, 'pdf');
  const uniqueFileNames = [...new Set(fileNames)];
  const progressIncrementUnique = 50 / uniqueFileNames.length;
  const progressIncrement = 45 / fileNames.length;
  const fileNamesToDownload = uniqueFileNames.filter((fileName) => {
    const filePath = TEMP_IMG_PATH + fileName;
    const onExistsMsg = `Found cached copy of ${fileName}, don't download`;
    return fileDoesNotExists(filePath, onExistsMsg, job, progressIncrementUnique);
  });

  job.log('Fetching images...');
  try {
    await downloadFiles(fileNamesToDownload, job, progressIncrementUnique);
  } catch (err) {
    console.error(err);
    // TODO cancel job, inform client
  }

  job.log('Adding images to pdf...');
  job.progress(50);

  let leftMargin;
  let topMargin;
  if (PdfPageSize === 'A4') {
    leftMargin = 30;
    topMargin = 46;
  } else if (PdfPageSize === 'Letter') {
    leftMargin = 36;
    topMargin = 21;
  }
  const pdfPath = `./tmp/${pdfFileName}`;
  const doc = new PDFDocument({
    size: 'Letter',
    margins: {
      top: topMargin,
      bottom: topMargin,
      left: leftMargin,
      right: leftMargin,
    },
  });

  const writeStream = fs.createWriteStream(pdfPath);
  doc.pipe(writeStream);
  try {
    makeFrontPage(doc);
  } catch (e) {
    console.log(e);
  }
  addImages(fileNames, doc, leftMargin, topMargin, fullCutLines, job, progressIncrement);
  doc.end();

  await new Promise((resolve) => {
    writeStream.on('finish', () => {
      resolve();
    });
  });

  return {
    filepath: pdfPath,
    hash,
    requestID,
  };
}

async function setRedPixel(originalPath, dupPath, index, completeMsg, job, progressIncrement) {
  return new Promise((resolve, reject) => {
    sharp(originalPath)
      .composite([{
        input: './tmp/images/red_dot.png', blend: 'over', top: index, left: 0,
      }])
      .toFile(dupPath)
      .then(() => {
        console.log(completeMsg);
        progress += progressIncrement;
        job.progress(progress);
        resolve();
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}

async function generateMpc(job, hash) {
  const {
    cardList,
    includeCardBacks,
    LmMpcPlacement,
    requestID,
  } = job.data;
  const zipFileName = `${hash}.zip`;
  const zipPath = `./tmp/${zipFileName}`;
  const zipDir = `./tmp/${hash}/`;

  if (!fs.existsSync(zipDir)) {
    fs.mkdirSync(zipDir, { recursive: true });
    fs.mkdirSync(`${zipDir}runner/`);
    fs.mkdirSync(`${zipDir}corp/`);
  }

  progress = 0;
  job.log('Fetching images...');
  const cardListRunner = cardList.filter((card) => (card.side === 'runner'));
  const cardListCorp = cardList.filter((card) => (card.side === 'corp'));

  const fileNamesRunner = await getFileNames(cardListRunner, includeCardBacks, 'mpc', LmMpcPlacement);
  const fileNamesCorp = await getFileNames(cardListCorp, includeCardBacks, 'mpc', LmMpcPlacement);

  const imgCounts = {};
  fileNamesRunner.forEach((fileName) => {
    if (fileName in imgCounts) {
      if (imgCounts[fileName].count < 99) {
        imgCounts[fileName].count += 1;
      }
    } else {
      imgCounts[fileName] = { count: 1, side: 'runner' };
    }
  });
  fileNamesCorp.forEach((fileName) => {
    if (fileName in imgCounts) {
      if (imgCounts[fileName].count < 99) {
        imgCounts[fileName].count += 1;
      }
    } else {
      imgCounts[fileName] = { count: 1, side: 'corp' };
    }
  });

  const downloadCount = Object.keys(imgCounts).length;
  const downloadProgressIncrement = 50 / (downloadCount + 4);
  const duplicateCount = Object.values(imgCounts).reduce((acc, val) => (acc + (val.count - 1)), 0);
  const duplicateProgressIncrement = 20 / duplicateCount;
  const zippingCount = Object.values(imgCounts).reduce((acc, val) => (acc + val.count), 0) + 5;
  const zippingProgressIncrement = 25 / zippingCount;

  const extraFiles = ['corp_back.png', 'runner_back.png', 'red_dot.png', 'README.txt'];
  const extraFilesToFetch = extraFiles.filter((fileName) => {
    const filePath = TEMP_IMG_PATH + fileName;
    const onExistsMsg = `Found cached copy of ${fileName}, don't download`;
    return fileDoesNotExists(filePath, onExistsMsg, job, downloadProgressIncrement);
  });
  if (extraFilesToFetch.length > 0) {
    try {
      await downloadFiles(extraFilesToFetch, job, downloadProgressIncrement);
    } catch (err) {
      console.log('Error fetching extra files!');
      console.error(err);
    }
  }

  const fileNamesToDownload = Object.keys(imgCounts).filter((fileName) => {
    const filePath = TEMP_IMG_PATH + fileName;
    const onExistsMsg = `Found cached copy of ${fileName}, don't download`;
    return fileDoesNotExists(filePath, onExistsMsg, job, downloadProgressIncrement);
  });

  try {
    await downloadFiles(fileNamesToDownload, job, downloadProgressIncrement);
  } catch (err) {
    console.log('Error fetching images!');
    console.error(err);
  }

  const dupRunnerFiles = [];
  const dupCorpFiles = [];
  const processedRedPixels = [];
  job.log('Preparing images...');
  console.log('Creating duplicate copies...');
  for (let i = 0; i < Object.keys(imgCounts).length; i += 1) {
    const fileName = Object.keys(imgCounts)[i];
    const { count } = imgCounts[fileName];
    const splitName = fileName.split('.');
    for (let j = 1; j < count; j += 1) {
      const dupName = `${splitName[0]}-${j}.${splitName[1]}`;
      const imgPath = TEMP_IMG_PATH + dupName;
      const onExistsMsg = `Found ${dupName}, a cached copy of ${fileName}, don't duplicate`;
      if (imgCounts[fileName].side === 'runner') {
        dupRunnerFiles.push(dupName);
      }
      if (imgCounts[fileName].side === 'corp') {
        dupCorpFiles.push(dupName);
      }
      if (fileDoesNotExists(imgPath, onExistsMsg, job, duplicateProgressIncrement)) {
        const originalImg = TEMP_IMG_PATH + fileName;
        const msg = `Duplicating ${fileName} to ${dupName}`;
        processedRedPixels.push(
          setRedPixel(originalImg, imgPath, j, msg, job, duplicateProgressIncrement),
        );
      }
    }
  }
  await Promise.all(processedRedPixels);
  console.log('Duplicates Ready');

  const allRunnerFiles = fileNamesRunner.concat(dupRunnerFiles);
  allRunnerFiles.forEach((fileName) => {
    fs.copyFileSync(`${TEMP_IMG_PATH}${fileName}`, `${zipDir}runner/${fileName}`);
  });
  const allCorpFiles = fileNamesCorp.concat(dupCorpFiles);
  allCorpFiles.forEach((fileName) => {
    fs.copyFileSync(`${TEMP_IMG_PATH}${fileName}`, `${zipDir}corp/${fileName}`);
  });
  job.log('Adding images to zip file...');
  console.log('Adding images to zip file...');

  const zipFileStream = fs.createWriteStream(zipPath);
  const archive = archiver('zip', { lib: { level: 0 } });

  await new Promise((resolve) => {
    archive.pipe(zipFileStream);
    archive.on('error', (err) => { console.log(err); });
    archive.on('progress', () => {
      progress += zippingProgressIncrement;
      job.progress(progress);
    });
    archive.directory(zipDir, false);
    archive.file(`${TEMP_IMG_PATH}runner_back.png`, { name: 'runner_back.png' });
    archive.file(`${TEMP_IMG_PATH}corp_back.png`, { name: 'corp_back.png' });
    archive.file(`${TEMP_IMG_PATH}README.txt`, { name: 'README.txt' });

    archive.finalize();
    zipFileStream.on('close', () => {
      job.log(`Zip file ready, ${archive.pointer()} total bytes`);
      resolve();
    });
  });
  return {
    filepath: zipPath,
    hash,
    requestID,
  };
}

module.exports.generatePdf = generatePdf;
module.exports.generateMpc = generateMpc;
