console.log('node.JS');
//global object - window object

//setTimeout
setTimeout(function(){
  console.log('You have succesfully wasted 10 seconds');
},10000);

//setInterval
var time = 0;
setInterval(function(){
  time +=2;
  console.log('You have succesfully wasted ' +time + ' seconds');
},2000);

//stopping timer by adding condtions to it

var time = 0;
var timer = setInterval(function(){
  time +=2;
  console.log('You have succesfully wasted ' +time + ' seconds');
  if (time > 5){
    clearInterval(timer);
  }
},2000);

//to get directory where we are workin
console.log('Directory name ' +__dirname);

//to get file name
console.log('file name ' +__filename);

//function expresstion
//normal function stmt
function sayHi(){
  console.log('Hi user');
}
sayHi();

//function expression
var sayBye = function(){
  console.log('Bye User');
};
sayBye();

function callFun(fun){
  fun();
}
callFun(sayBye);

//modules & require() method
var count = require('./count');
//if you put this module outside the module scope this won't work
console.log(count(['Messi','Neymar','Suarez']));//will throw error

//modules patterns
var stuff = require('./stuff');
//if you put this module outside the module scope this won't work
console.log(stuff.count(['Messi','Neymar','Suarez']));
console.log(stuff.adder(6,4));
console.log(stuff.adder(stuff.pi,5));
