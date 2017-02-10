var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    // this.tail = {};
    // this.tail.value = value;
    if (this.tail !== null) {
      this.tail.next = value;
    }
    this.tail = Node(value);
    this.head = this.head || this.tail;
  };

  list.removeHead = function() {
    //move head pointer to next value
    var removed = this.head.value;
    this.head.value = this.head.next;
    return removed;
  };

  list.contains = function(target) {
    // Check all the properties in the list objects
    if (this.head.value === target) {
      return true;
    } 
    var checkMiddle = function (node) {
      if (node === target) {
        return true;
      } else {
        return checkMiddle(node.next);
      }
      return false;
    };
    return checkMiddle(this.head.next);
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