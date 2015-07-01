var Stack = function(){
  var someInstance = {};
  // 


  // Use an object with numeric keys to store values
  // {1:'a', 2:'b'}
  var storage = {};
  var key = 0;

  // Implement the methods below
  someInstance.push = function(value){
    // increment key, and use that as key
    // store passed in value in 'storage'
    key++;
    storage[key] = value;
  };

  someInstance.pop = function(){
  };

  someInstance.size = function(){
    return Object.keys(storage).length;
  };

  return someInstance;

};
 