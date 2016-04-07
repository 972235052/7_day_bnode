/**
*
*创建一个server
*
*/

var httpServer = require('http');

var server = httpServer.createServer(function(request,response){
	console.log('1');
	response.writeHead(200,{'Content-Type':'text/plain'});
	response.write('hello Buddy');
	response.end('ok');
	console.log('2')
})
server.listen(3000)
console.log('3')
