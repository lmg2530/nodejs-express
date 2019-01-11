'user strict'

const app = require('./app');
const port = process.env.PORT || 3000 // 3000번 포트 사용

var http = require('http');

http.createServer(app).listen(port,function(){
	console.log('Http Server Port' + port);
});