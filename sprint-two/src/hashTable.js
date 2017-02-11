// pseudoclassical style

var HashTable = function() {
  //this = Object.create(Object.prototype);
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //return this;
};

// Time Complexity: O(1)
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    // check if the key is already in tuples
    var currentKey = tuple[0];
    if (currentKey === k) {
      var currentValue = tuple[1];
      tuple[1] = v;
      return currentValue;
    }
  }
    // if the key is not already in tuples
  bucket.push([k, v]);
  this._storage.set(index, bucket);
};

// Time Complexity: O(1)
HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  if (this._storage.get(index) === undefined) {
    return undefined;
  } else {
    for (var i = 0; i < bucket.length; i++) {
      var tuple = bucket[i];
      if (tuple[0] === k) {
        return tuple[1];
      }
    }
  }

};

// Time Complexity: 0(1)
HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var bucket = this._storage.get(index) || [];

  for (var i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      bucket.splice(i, 1);
    }
  }

  // this._storage.set(index, undefined);

};

// var hashTable = new HashTable();
/*
 * Complexity: What is the time complexity of the above functions?
 */


