var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};

var size = 0;

stackMethods.size = function () {
  if (size < 0 ) {
    return 0;
  }
  return size;
};

stackMethods.push = function (value) {
  size++;
};

stackMethods.pop = function () {
  debugger;
  size--;
};