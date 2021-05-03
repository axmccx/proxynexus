const throng = require('throng');
const Queue = require('bull');
const { generatePdf, generateMpc } = require('./generators');

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const workers = process.env.WEB_CONCURRENCY || 2;
const maxJobsPerWorker = 1;

function start() {
  const workQueue = new Queue('work', REDIS_URL);

  workQueue.process(maxJobsPerWorker, async (job) => {
    const {
      cardList,
      generateType,
      includeCardBacks,
      PdfPageSize,
      fullCutLines,
      LmMpcPlacement,
      cardsPerPage,
      pagesPerPdf,
      playSetSelection,
      desklistUrl,
    } = job.data;

    console.log(job.data);

    if (generateType === 'pdf') {
      generatePdf(cardList, includeCardBacks, PdfPageSize, fullCutLines);
    } else if (generateType === 'mpc') {
      generateMpc(cardList, includeCardBacks, LmMpcPlacement);
    }
    return { value: 'Worker Test' };
  });
}

throng({ workers, start });
