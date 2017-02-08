var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  var size = 0;

  var lastIndex = -1;

  var firstIndex = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    lastIndex++;
    storage[lastIndex] = value;
    size++;
  };

  someInstance.dequeue = function() {
    size--;

    var firstInQueue = storage[firstIndex];
       
    delete storage[firstIndex];

    firstIndex++;

    return firstInQueue;
  };

  someInstance.size = function() {
    if (size < 0) {
      return 0;
    }
    return size;
  };

  return someInstance;
};