const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).json({ message: 'Response from back', app: 'natours' });
});

app.post('/', (req, res) => {
  res.status(200).send('You can post to this endpoint...');
});

const port = 8000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
