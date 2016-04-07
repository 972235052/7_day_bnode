var fs = require('fs');

fs.readFile('error.txt','utf-8',function(err,data){
	if(err) return console.error(err);
	console.log(data)
})
console.log('OK')