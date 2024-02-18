// cronJob.js
import cron from 'node-cron';

// cron job function
const myCronJob = () => {
  console.log('Cron job is running every 5 seconds...');
  // task logic here
};

// Schedule the cron job (every 5 seconds)
cron.schedule('*/5 * * * * *', myCronJob);

export default myCronJob;
