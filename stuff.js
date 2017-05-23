//method 1
var count = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
  return `The sum of the 2 numbers ${a+b}`;//here i used templete string `` which is new addition to ES6 atma script it uses backticks 
};
//so the templete string which will do for us that we can embed the variables/expression with out concanate in them 

var pi=3.1442;

//we need to define the module in order to use that module outside of its scope
module.exports.count = count;
module.exports.adder = adder;
module.exports.pi = pi;


//method 2
module.exports.count = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

module.exports.adder = function(a,b){
  return `The sum of the 2 numbers ${a+b}`;
};

module.exports.pi=3.1442;


//method 3
var count = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

var adder = function(a,b){
  return `The sum of the 2 numbers ${a+b}`;
};

var pi=3.1442;

//we need to define the module in order to use that module outside of its scope
module.exports = {
      count: count,
      adder: adder,
      pi: pi

};
