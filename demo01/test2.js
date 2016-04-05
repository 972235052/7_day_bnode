 var x = require('./foo2');

 console.log(x) //{ [Function: View] test1: [Function] }
 console.log(x.test) //undefined
 console.log(x.test1) //[Function]
 x.test1() //test1