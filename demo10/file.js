var fs = require('fs');
var json={
	'#url' : 'http://www.baidu.com',
	'#appkey' : "202011117"
}
console.log('打开');
var file=__dirname+'\\index.js';
console.log(file);
fs.open(file,'rs+',0666,function(er,fd){
	var data=fs.readFileSync(file).toString(),

	for(key in json){
		console.log(key)
		data=data.replace(key,json[key])
	}
	fs.writeFile(file,data_,function(err){
		console.error(err)
	})
	console.log(data)
})