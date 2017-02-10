var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  // Time complexity: O(1)
  list.addToTail = function(value) {
    if (this.tail === null) {
      this.tail = Node(value);
      this.head = this.tail;
    } else {
      this.tail.next = Node(value);  
      this.tail = Node(value);
    }
  };

  // Time complexity: O(1)
  list.removeHead = function() {
    var removedHeadValue = this.head.value;
    this.head = this.head.next;
    return removedHeadValue;
  };

  // Time complexity: O(1) ... because we only checked for the head and tail
  list.contains = function(target) {
    if (target === this.head.value || target === this.tail.value) {
      return true;
    } else {
      return false;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// var linkedList = LinkedList();