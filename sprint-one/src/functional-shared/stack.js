var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.s = 0;
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

stackMethods.size = function () {
  if (this.s < 0 ) {
    return 0;
  }
  return this.s;
};

stackMethods.push = function (value) {
  this.storage[this.s] = value;
  this.s++;
};

stackMethods.pop = function () {
  this.s--;
  var popped = this.storage[this.s];
  delete this.storage[this.s];
  return popped;
};
// var stack = Stack();