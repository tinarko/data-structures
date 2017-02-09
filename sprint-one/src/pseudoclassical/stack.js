var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  // this = Object.create(Object.prototype);
  
  this.s = 0;
  this.storage = {};

  // return this;
};

Stack.prototype.size = function () {
  if (this.s < 0) {
    return 0;
  }
  return this.s;
};

Stack.prototype.push = function (value) {
  this.storage[this.s] = value;
  this.s++;
};

Stack.prototype.pop = function () {
  this.s--;
  var popped = this.storage[this.s];
  delete this.storage[this.s];
  return popped;
};

// var stack = new Stack()