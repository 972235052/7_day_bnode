var fs = require('fs');
var data = '//写入';

var writerStream = fs.createWriteStream('test.js');

writerStream.write(data,'UTF8')

writerStream.on('finish',function(){
	console.log('写入完成')
})

writerStream.on('error',function(err){
	console.log(err.stack)
})

console.log('完成')