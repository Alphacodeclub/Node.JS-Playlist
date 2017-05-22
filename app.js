console.log('node.JS');
//global object - window object

//setTimeout
/*setTimeout(function(){
  console.log('You have succesfully wasted 10 seconds');
},10000);*/

//setInterval
/*var time = 0;
setInterval(function(){
  time +=2;
  console.log('You have succesfully wasted ' +time + ' seconds');
},2000);*/

//stopping timer by adding condtions to it
/*
var time = 0;
var timer = setInterval(function(){
  time +=2;
  console.log('You have succesfully wasted ' +time + ' seconds');
  if (time > 5){
    clearInterval(timer);
  }
},2000);*/

//to get directory where we are working
console.log('Directory name ' +__dirname);

//to get file name
console.log('file name ' +__filename);
