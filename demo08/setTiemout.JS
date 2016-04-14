function printHello(){
	console.log("Hello");
	t=setTimeout(printHello,2000)
}
var t=setTimeout(printHello,2000);
setTimeout(function(){
	clearTimeout(t);
},5000)