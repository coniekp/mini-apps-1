var express = require('express');
var server = express();

server.use(express.static('public'));
server.listen(3000,()=>{ console.log('Listening at localhost: 3000')});

