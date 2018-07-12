var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');


var server = express();

server.use(express.static('public'));
//server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.text());
server.use((req, res) => {
  postDataToDb(req.body, (err, results) => {

      res.send(JSON.stringify(req.body));
    
  })
})

server.listen(3000,()=>{ console.log('Listening at localhost: 3000')});



var db = mysql.createConnection({
  user: 'root',
  password: '',
  database: 'store'
});


postDataToDb = (data, callback) => {
  
  console.log("data", JSON.parse(data).user);
  
  var values = ['kony', 'kony', 'kony', 'kony','kony']
  
  db.query ('INSERT INTO user ("first_name", "last_name", "email", "username", "password") VALUES (?,?,?,?,?)', (err, results) => {
    if(err) callback(err);
    else callback(null, results);
  })
  
}