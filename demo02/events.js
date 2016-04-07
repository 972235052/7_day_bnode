/*
*
*/

var events = require('events');

var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {

	console.log('连接成功');

	eventEmitter.emit('data_received');

}

eventEmitter.on('connection', connectHandler);

eventEmitter.on('data_received',function(){
	console.log('数据接受成功');
})

eventEmitter.emit('connection');

console.log('程序执行完毕。');

var ev = new events.EventEmitter();

var trigger = function(){
	console.log('触发');
	ev.emit('中文');
}

ev.on('trigger',trigger);

ev.on('中文',function(){
	console.log('中文OK？');
})

ev.emit('trigger')
console.log('ok！')
