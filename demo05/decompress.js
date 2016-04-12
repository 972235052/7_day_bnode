var fs = require('fs');
var zlib = require('zlib');

fs.createReadStream('test.js.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('test2.js'));

console.log('完成')
