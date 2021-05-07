const throng = require('throng');
const Queue = require('bull');
const azureStorage = require('azure-storage');
const path = require('path');
const { generatePdf, generateMpc } = require('./generators');

const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';
const workers = process.env.WEB_CONCURRENCY || 1;
const maxJobsPerWorker = 1;
const blobService = azureStorage.createBlobService();
const containerName = process.env.AZURE_RESULTS_CONTAINER_NAME;

function start() {
  const workQueue = new Queue('work', REDIS_URL);
  workQueue.process(maxJobsPerWorker, async (job, done) => {
    let result;
    if (job.data.generateType === 'pdf') {
      result = await generatePdf(job);
    } else if (job.data.generateType === 'mpc') {
      result = await generateMpc(job);
    }
    console.log('Uploading file...');
    job.log('Uploading file...');
    job.progress(95);
    blobService.createBlockBlobFromLocalFile(
      containerName,
      path.basename(result.filepath),
      result.filepath,
      (err) => {
        if (err) {
          console.log('Azure upload error!!!');
        }
        done(null, result);
      },
    );
  });
}

throng({ workers, start });
