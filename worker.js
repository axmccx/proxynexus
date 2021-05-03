const throng = require('throng');
const Queue = require('bull');

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const workers = process.env.WEB_CONCURRENCY || 2;
const maxJobsPerWorker = 1;

function start() {
  const workQueue = new Queue('work', REDIS_URL);

  workQueue.process(maxJobsPerWorker, async (job) => {
    // TODO worker logic here
    return { value: 'Worker Test' };
  });
}

throng({ workers, start });
