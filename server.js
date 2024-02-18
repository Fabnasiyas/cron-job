// server.js
import express from 'express';
import cronJob from './cronJob.js'

const app = express();
const port =3000;


// Start your cron job
cronJob();


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
