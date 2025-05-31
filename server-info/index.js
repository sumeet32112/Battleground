const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const serverInfo = require('./data/serverInfo.json');

app.get('/api/server-info', (req, res) => {
  res.json(serverInfo);
});

app.listen(3001, () => console.log('Server running on port 3001'));
