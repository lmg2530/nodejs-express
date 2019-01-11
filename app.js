'user strict'
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var fs = require('fs');

// bodyParser 미들웨어 사용
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',function(req,res){ //get 방식
	fs.readFile('./hello.html', function(error,data){
    if(error){
      console.log('error');
      res.status(500).send('internal Server Error');
    }else{
      console.log('hello.html');
      res.writeHead(200,{'Content-Type':'text/html'});
      res.end(data);
    }
  });
})

app.post("/hello",function (req,res) { //post방식
  var name = JSON.stringify(req.body);
  var name2 = JSON.parse(name);
  console.log(name2.data_text);
	res.writeHead(200,{'Content-Type':'text/text'});
  res.end(name2.data_text);
})

module.exports = app;