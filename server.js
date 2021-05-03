require('@babel/register');
/* eslint-disable no-console */
const dotenv = require('dotenv');
const Queue = require('bull');
const app = require('./app');

process.on('uncaughtException', (uncaughtExc) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log('uncaughtException Err::', uncaughtExc);
  console.log('uncaughtException Stack::', JSON.stringify(uncaughtExc.stack));
  process.exit(1);
});

dotenv.config({ path: '.env' });
const PORT = process.env.PORT || 3000;
const REDIS_URL = process.env.REDIS_URL || 'redis://127.0.0.1:6379';

const workQueue = new Queue('work', REDIS_URL);

workQueue.on('global:completed', (jobId, result) => {
  console.log(`Job ID ${jobId} completed with result ${result}`);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
