var events = require('events');

var ev = new events.EventEmitter;

ev.on('someEvent',function(arg1,arg2){
	console.log('1',arg1,arg2)
})

ev.on('someEvent',function(arg1){
	console.log('2',arg1)
})

ev.emit('someEvent','one','two')
