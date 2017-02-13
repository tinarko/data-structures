// Instantiate a new graph
var Graph = function() {
  // this = Object.create(Object.prototype);
  this.nodes = {};

  // return this;
};

// Time complexity: O(1)
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  // if (this.contains(node) === true) {
  //   this.removeNode(node);
  // }
  this.nodes[node] = [];

};

// Time complexity: O(1) 
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.nodes[node] !== undefined;
};

// Time complexity: O(1)
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edgesToBeRemoved = this.nodes[node];
  for (var i = 0; i < edgesToBeRemoved.length; i++) {
    var nodeToClean = edgesToBeRemoved[i];
    for (var j = 0; j < this.nodes[nodeToClean].length; j++) {
      if (this.nodes[nodeToClean][j] === node) {
        this.nodes[nodeToClean].splice(j, 1);
      }
    }
  }
  delete this.nodes[node];
};

// Time complexity: O(n)
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes[fromNode].length; i++) {
    if (this.nodes[fromNode][i] === toNode) {
      return true;
    } 
  }
  return false;
};

// Time complexity: O(1)
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (fromNode !== toNode) {
    this.nodes[fromNode].push(toNode);
    this.nodes[toNode].push(fromNode);
  }
};

// Time complexity: O(n) 
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this.nodes[fromNode].length; i++) {
    if (this.nodes[fromNode][i] === toNode) {
      this.nodes[fromNode].splice(i, 1);

    }
  }
  for (var j = 0; j < this.nodes[toNode].length; j++) {
    if (this.nodes[toNode][j] === fromNode) {
      this.nodes[toNode].splice(j, 1);
    }
  }
};

// Time complexity: O(n)
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var item in this.nodes) {
    cb(item);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var graph = new Graph();




















