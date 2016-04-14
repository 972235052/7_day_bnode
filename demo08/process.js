process.on('exit',function(code){
	setTimeout(function(){
		console.log('执行')
	},0)
	console.log('退出码：',code);
});

console.log('OK');

// 输出到终端
process.stdout.write("Hello World!" + "\n");
process.stderr.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val);
});

// 获取执行路局
console.log(process.execPath);


// 平台信息
console.log(process.platform);

console.log('当前目录：'+process.cwd());
console.log('当前版本：'+process.version);

console.log(process.memoryUsage())