var fs = require('fs');

fs.readFile('haizi.txt','utf-8',function(err,data){
	if(err) return console.error(err);
	console.log(data)
})
console.log('OK')