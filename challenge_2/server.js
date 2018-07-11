var express = require('express');
var server = express();
var bodyParser = require('body-parser');


convertToCSV = (req, res, next) => {
  var input = JSON.parse(req.body.data);
  var fields = getFieldsInData(input);
  var output = flattenDataStructure(fields, input);
  
  res.send(output);
  next();
}

getFieldsInData = (data) => {
  var fields = [];
  for (var key in data) {
    if (key !== 'children') {
        fields.push(key);
    }
  }
  return fields;
};

flattenOneRecord = (fields, data) => {
  return fields.map(field => {
    return data[field];
  });
};

flattenDataStructure = (fields, data) => {
  var results = [fields];
  var recurse = (obj) => {
    results.push(flattenOneRecord(fields, obj));
    if(obj.children) {
      obj.children.forEach(child => recurse(child));
    }
  }
  
  recurse(data);
  return results;  
}


server.use(express.static('client'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(convertToCSV);


server.post('/hi', (req, res) => {
  console.log("Response sent");
});

server.listen(3000, ()=>{
  console.log('Listening at localhost:3000')});

