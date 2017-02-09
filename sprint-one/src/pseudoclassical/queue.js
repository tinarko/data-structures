var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  this.s = 0;
  this.storage = {};
  this.firstIndex = 0;
  this.lastIndex = 0;

};

Queue.prototype.size = function () {
  if (this.s < 0) {
    return 0;
  }
  return this.s;
};

Queue.prototype.enqueue = function (value) {
  this.s++;
  this.storage[this.lastIndex] = value;
  this.lastIndex++;
};

Queue.prototype.dequeue = function () {
  this.s--;
  var dequeued = this.storage[this.firstIndex];
  delete this.storage[this.firstIndex];
  this.firstIndex++;
  return dequeued;
};