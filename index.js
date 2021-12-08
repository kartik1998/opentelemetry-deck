require('./tracing');
const express = require('express');
const opentelemetry = require('@opentelemetry/api');
opentelemetry.diag.setLogger(new opentelemetry.DiagConsoleLogger(), opentelemetry.DiagLogLevel.WARN);
// logger is really useful in case trace exports break

const app = express();

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
  return res.send('pong');
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
