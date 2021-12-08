require('./tracing');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
