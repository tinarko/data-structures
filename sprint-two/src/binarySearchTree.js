var BinarySearchTree = function(value) {
  var someInstance = Object.create(bstMethods);

  someInstance.value = value;
  // a BST where all values are lower than than it the current value
  someInstance.left;
  //  a BST where all values are higher than than it the current value
  someInstance.right;

  return someInstance;
};

var bstMethods = {};

// accepts a value and places in the tree in the correct position
bstMethods.insert = function (value) {
  // checking left
  if (this.value >= value) {
    if (this.left === undefined) {
      this.left = BinarySearchTree(value);
    } else {
      // go to next node
      this.left.insert(value);
    }
  // checking right
  } else {
    if (this.right === undefined) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }  
};

// accepts a value and returns a boolean reflecting whether or not the value is contained in the tree
bstMethods.contains = function(target) {
  // check if target is found
  if (target === this.value) {
    return true;
  } else {
    if (this.right === undefined && this.left === undefined) {
      return false;
    }
  }

  // check smaller values
  if (target <= this.value) {
    return this.left.contains(target);
  // check larger values
  } else {
    return this.right.contains(target);
  }
};

// accepts a callback and executes it on every value contained in the tree
bstMethods.depthFirstLog = function(callback) {

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


// var binarySearchTree = BinarySearchTree();

