require('@babel/register');
const dotenv = require('dotenv');
const app = require('./app');

process.on('uncaughtException', (uncaughtExc) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log('uncaughtException Err::', uncaughtExc);
  console.log('uncaughtException Stack::', JSON.stringify(uncaughtExc.stack));
  process.exit(1);
});

dotenv.config({ path: '.env' });
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
