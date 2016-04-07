//阻塞代码

var fs = require('fs');

var data=fs.readFileSync('haizi.txt','utf-8');

console.log(data)
console.log('执行完成')