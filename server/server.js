var express = require('express');
var app = express();
var path = require('path');
var port = 5002;
var calculate = require('./module/formula.js');


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.post('/solveIt', function(req, res) {
  operation = req.body.operation;
  input1 = req.body.input1;
  input2 = req.body.input2;
  var answer = calculate(operation);
  console.log(answer);
  var response = answer.toString();
  res.send(response);

});

app.get('/*', function(req, res){
var file = req.params[0] || '/views/index.html';
res.sendFile(path.join(__dirname, '/public/', file));
});

app.listen(port, function(){
console.log('Server running on port', port);
});
