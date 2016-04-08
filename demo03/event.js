var EventEmitter = require('events').EventEmitter;

var ev =new EventEmitter;

ev.on('some_event',function(){
	console.log('some_event 事件触发');
})

setTimeout(function(){
	ev.emit('some_event')
},1000)