// pseudoclassical style

var HashTable = function() {
  //this = Object.create(Object.prototype);
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  //return this;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  this._storage.set(index, [k, v]);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var retrieved = this._storage.get(index);

  if (retrieved === undefined) {
    return undefined;
  }
  
  return retrieved[1];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  this._storage.set(index, undefined);

};


// var hashTable = new HashTable();
/*
 * Complexity: What is the time complexity of the above functions?
 */


