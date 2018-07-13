var express = require('express');
var server = express();
var router = express.Router();

var scores = {red: 0, yellow: 0};

router.all('/post/*', (req, res) => {
  var winner = req.path.slice(6);
  scores[winner] += 1;
  res.send(JSON.stringify(scores));
});

router.all('/get', (req, res) => {
  res.send(JSON.stringify(scores));
});

router.all('/reset', (req, res) => {
  scores.red = 0;
  scores.yellow = 0;
  res.send(JSON.stringify(scores));
})

server.use(express.static('./client/dist'));
server.use(router);
server.listen(3000, () => {
  console.log("Listening")
});

