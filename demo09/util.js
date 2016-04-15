var util = require('util');


function base() {
	this.name = 'base';
	this.age = 21;
	this.sayHello = function() {
		console.log('Hello' + this.name)
	}
}

base.prototype.showName = function() {
	console.log(this.name);
}

function Sub() {
	this.name = 'sub';
}

util.inherits(Sub, base);

var oBase = new base();

oBase.showName();
oBase.sayHello();
console.log(oBase);

var oSub = new Sub();
oSub.showName();

//oSub.sayHello();
console.log(oSub)


//inspect

var util = require('util');
function Person(){
	this.name = 'haizi';
	this.toString = function(){
		return this.name;
	}
};

var obj = new Person();

console.log(util.inspect(obj));
console.log(util.inspect(obj,true));
