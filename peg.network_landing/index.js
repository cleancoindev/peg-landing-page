const express = require('express');
const path = require('path');
const app = express();

const dir = __dirname;

app.use(express.static(dir));

app.get('/', function(req, res) {
  res.sendFile(path.join(dir + '/index.html'));
});

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Example app listening on port '+port)
})
