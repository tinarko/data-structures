var Tree = function(value) {
  // your code here
  var newTree = Object.create(treeMethods);
  newTree.value = value;
  newTree.children = [];  
  return newTree;
};

var treeMethods = {};

// Time complexity: 
treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

// Time complexity: 
treeMethods.contains = function(target) {

  if (this.value === target) {
    return true;
  } else {
    if (this.children.length !== 0) {
      for (var i = 0; i < this.children.length; i++) {
        if (this.children[i].contains(target)) {
          return true;
        }
      }
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
// var tree = Tree(value);