var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.s = 0;
  someInstance.firstIndex = 0;
  someInstance.lastIndex = 0;
  extend(someInstance, queueMethods);

  return someInstance;

};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var queueMethods = {};

queueMethods.size = function () {
  if (this.s < 0) {
    return 0;
  }
  return this.s;
};

queueMethods.enqueue = function (value) {
  this.storage[this.lastIndex] = value;
  this.s++;
  this.lastIndex++;
};

queueMethods.dequeue = function () {
  this.s--;

  var dequeued = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex];
  
  this.firstIndex++;

  return dequeued;
};

// var queue = Queue();