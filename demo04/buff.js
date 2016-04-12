var buf1 = new Buffer(10);

var buf2 = new Buffer([10,20,30,40,50]);

var buf3 = new Buffer('www.jv.com','utf-8');

console.log(buf1+' : '+buf2+' : '+buf3)


var buf4 = new Buffer(10);
//写入缓存区  返回写入的大小 buffer空间不足，则只会写入部分
console.log(buf4.length)

len = buf4.write('www.runoob.com');

console.log('写入字节数:'+len)


//读取
var buf5 = new Buffer(26)
for(var i=0;i<26;i++){
	buf5[i]=i+97;
}

console.log(buf5.toString('ASCII'));
console.log(buf5.toString('ASCII',0,6));
console.log(buf5.toString('utf-8',0,7));
console.log(buf5.toString(undefined,0,5));

//buffer to json

var json = buf5.toJSON(buf5);
console.log(json)


//buffer 合并 concat
var buf6 = Buffer.concat([buf3,buf5]).toString('utf-8');

console.log(buf6)


//buffer 比较 返回 0 -1 1

var buffer7 = new Buffer('ABCd');
var buffer8 = new Buffer('ABCd45');
var result = buffer7.compare(buffer8);

console.log(result)

//buffer 拷贝

var buffer9 = new Buffer(5);

buffer8.copy(buffer9,0,2,3);

console.log(buffer9.toString('utf-8'))


// buffer 剪切 开始位置是0

var buffer10 = buf5.slice(0,25);
console.log('剪切:'+buffer10)

///buffer长度

console.log('buf5的length:'+buf5.length);