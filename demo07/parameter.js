var http = require('http');
var url = require('url');

function start(route){
	function ht(req,res){
		var pathName=url.parse(req.url).pathname;
		console.log(pathName);

		route(pathName)

		res.writeHead(200,{'Content-Type':'text/plain'});
		res.write('OK',"UTF8");
		res.end();
	}

	http.createServer(ht).listen(8888);
	console.log('服务已经启动');
}

module.exports  = start;
