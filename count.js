var count = function(arr){
  return 'There are ' + arr.length + ' elements in this array';
};

//we need to define the module in order to use that module outside of its scope
module.exports = count;
