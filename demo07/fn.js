var http = require('http');

http.createServer(ht).listen(8888);

function ht(req,res){
	res.writeHead(200,{"Content-Type":'html'});
	res.write('<h1>Hello Word</h1>');
	res.end();
}