const throng = require('throng');
const Queue = require('bull');
const { generatePdf, generateMpc } = require('./generators');

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const workers = process.env.WEB_CONCURRENCY || 1;
const maxJobsPerWorker = 1;

function start() {
  const workQueue = new Queue('work', REDIS_URL);
  workQueue.process(maxJobsPerWorker, async (job, done) => {
    let result;
    if (job.data.generateType === 'pdf') {
      result = await generatePdf(job);
    } else if (job.data.generateType === 'mpc') {
      result = await generateMpc(job);
    }
    done(null, result);
  });
}

throng({ workers, start });
