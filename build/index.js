"use strict";

var express = require('express');

var app = express();

var cors = require('cors');

app.use(cors());
app.get('/', function (req, res) {
  res.json({
    data: 'duc-tran-farmi-gsop-api'
  });
});
var port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('duc-tran-farmi-api listens on port ', port);
});
//# sourceMappingURL=index.js.map