var events = require('events');

var ev = new events.EventEmitter();

var listener1 = function listener1(){
	console.log('监视器  listener1 执行。');
}


var listener2 = function listener2(){
	console.log('监视器 listener2 执行。');
}

ev.addListener('connection',listener1);

ev.on('connection',listener2)

var eventLenth=events.EventEmitter.listenerCount(ev,'connection') 

console.log(eventLenth)

ev.emit('connection')

ev.removeListener('connection',listener1);

console.log('listener1 不再受监听。')

ev.emit('connection');

eventListeners = events.EventEmitter.listenerCount(ev,'connection')

console.log(eventListeners)

console.log(1)