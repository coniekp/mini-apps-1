var express = require('express');
var server = express();
var router = express.Router();

var scores = {red: 0, yellow: 0};

router.all('*', (req, res) => {
  var winner = req.path.slice(1);
  scores[winner] += 1;
  console.log(winner);
  res.send(JSON.stringify(scores));
});

server.use(express.static('./client/dist'));
server.use(router);
server.listen(3000, () => {
  console.log("Listening")
});

