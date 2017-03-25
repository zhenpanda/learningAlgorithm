// linked list is like an array
// each node need 2 node head/tail node

// singley linked list
// doubley linked list

/*
  creating data structure like this really takes in consideration of speed
*/

function LinkedList() {
  this.head = null;
  this.tail = null;
}
function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}

var userList = new LinkedList();
console.log(userList);

var node1 = new Node(100, 'node2', null);
console.log(node1);

// method to add new node to head
LinkedList.prototype.addToHead = function(value) {
  var newNode = new Node(value, this.head, null);
  // case: if list is empty
  // first node is both head and tail

  // if list have a head, the newNode will become the new head
  if (this.head)this.head.prev = newNode;
  // but if there is head, add this node to tail
  else this.tail = newNode;
  // no matter what this node is going to be head
  this.head = newNode;
};

var ll = new LinkedList();
ll.addToHead("100");
ll.addToHead("200");
ll.addToHead("300");
ll.addToHead("400");
ll.addToHead("500");
console.log(ll);

// head and tail prop in LinkedList are objects
// those object are pointing to other objects
// that how is listed is chained together

LinkedList.prototype.addToTail = function(value) {
  var newNode = new Node(value, null, this.tail);
  // check if list empty
  if(this.tail) this.tail.next = newNode;
  else this.head = newNode;
  this.tail = newNode;
}

// list only contain 2 object at any time, but the object themselves contains 2 references themselves
ll.addToTail("one");
console.log(ll.tail);
console.log(ll.tail.prev);

// remove head func
LinkedList.prototype.removeHead = function() {
  if(!this.head) return null;
  // store before removing
  var val = this.head.value;
  // change the current head to the next node after it
  this.head = this.head.next;
  // change that node's head to null
  if(this.head) this.head.prev = null;
  // if there is no next node change next node to null
  else this.tail = null;
  // capture the removed node
  return val;
}

ll.removeHead();
console.log(ll);

// remove tail func
LinkedList.prototype.removeTail = function() {
  if(!this.tail) return null;
  // store before removing
  var val = this.tail.value;
  // change the current head to the last node after it
  this.tail = this.tail.prev;
  // change that node's tail to null
  if(this.tail) this.tail.next = null;
  // if there is no next node change next node to null
  else this.head = null;
  // capture the removed node
  return val;
}
ll.removeTail();
console.log(ll);

// search method
LinkedList.prototype.search = function(searchValue) {
  // serach with head
  var currentNode = this.head;
  while(currentNode) {
    if(currentNode.value === searchValue) return currentNode.value;
    // each itration change currentNode to next node
    currentNode = currentNode.next;
  }
  return null;
}
ll.search("300");

// exercise
LinkedList.prototype.indexOf = function(value) {
  var index = 0;
  var currentNode = this.head;
  while(currentNode) {
    if(currentNode.value === value) return index;
    index++;
    currentNode = currentNode.next;
  }
  return null;
}
ll.indexOf("300");

// Linked list runtime

// add/remove BigO constant time :)
// search BigO linear :(

// memory management
// don't need to store linked list together, in lower lvl language
// in C++ etc
