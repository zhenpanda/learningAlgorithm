// a tree structor with a root node with child node (leaf) connected to the root

// each node is a Binary Search tree
// each node with a child is a tree itself

/*

Depth Search Traversal: Start at the top most node and travel all the way to the bottom most node then to the next branch

Breath Search Traversal: Start at the top go level by level until the bottom

*/

// constructor function
function binarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

// adding/inserting value to the tree
binarySearchTree.prototype.insert = function(value) {
  // place to the left
  if (value <= this.value) {
    if (!this.left) this.left = new binarySearchTree(value);
    // using recusion to travel down the left tree
    else this.left.insert(value);
  }
  // place to the right
  else if (value > this.value) {
    if (!this.right) this.right = new binarySearchTree(value);
    // using recusion to travel down the right tree
    else this.right.insert(value);
  };
}

// finding value in the tree
binarySearchTree.prototype.contains = function(value) {
  if (value===this.value) return true;
  else if (value < this.value ) {
    if(!this.left) return false;
    else return this.left.contains(value);
  }else if (value > this.value) {
    if(!this.right) return false;
    else return this.right.contains(value);
  }
}

// depth first Traversal (recusion)
binarySearchTree.prototype.depthFirstTraversal = function(iteratorFunc, order) {
  // in-order, pre-order, post-order
  /*
      pre-order

      1. call the iteratorFunc callback: logs the value of this.value
      2. check the first node this.left to see if there is left(node) with a smaller value,
      if a left(node) is found, we recusively all depthFirstTraversal again on it,
      with this line we will keep going until we hit a node with no left(node),
      which is going to be (node) until we hit the smallest value on this branch

      3. call the iteratorFunc callback: logs the value of this.value
      4. recusively check left, until there is no more left(node)

      5. check if there is a right(node)
      6. because of the callstack we unwind to the next function on the stack
      7. call the iteratorFunc callback: logs the value of this.value
      8. check left
      9. check right
      10. if there is a right(node), if there is no right node the function is completed
  */
  if(order==="pre-order") iteratorFunc(this.value);
  if(this.left) this.left.depthFirstTraversal(iteratorFunc,order);
  /*
      in-order stack:

      1. check the first node this.left to see if there is left(node) with a smaller value,
      if a left(node) is found, we recusively all depthFirstTraversal again on it,
      with this line we will keep going until we hit a node with no left(node),
      which is going to be (node) with the smallest value on this branch
      2. call the iteratorFunc callback: logs the value of this.value
      3. if there is a right(node), we call the depthFirstTraversal on it...

      4. because of the callstack we unwind to the next function on the stack
      5. check the first node this.left to see...the recusion happens all over again

      6. check if there is a right(node), if there is no right node the function is completed
  */
  if(order==="in-order") iteratorFunc(this.value);
  if(this.right) this.right.depthFirstTraversal(iteratorFunc,order);
  /*
      post-order stack:

      1. check the first node this.left to see if there is left(node) with a smaller value,
      if a left(node) is found, we recusively all depthFirstTraversal again on it,
      with this line we will keep going until we hit a node with no left(node),
      which is going to be (node) with the smallest value on this branch
      2. check if there is a right(node), we call the depthFirstTraversal on it...
      3. call the iteratorFunc callback: logs the value of this.value

      4. because of the callstack we unwind to the next function on the stack
      5. if there is no right node or left node the function is completed

  */
  if(order==="post-order") iteratorFunc(this.value);
}

// breath first Traversal (recusion)
binarySearchTree.prototype.breathFirstTraversal = function(iteratorFunc) {
  // first in - first out, queue
  // this is the root node
  var queue = [this];
  while(queue.length) {
    // grab the first thing in array queue as treeNode
    var treeNode = queue.shift();
    iteratorFunc(treeNode.value);
    if (treeNode.left) queue.push(treeNode.left);
    if (treeNode.right) queue.push(treeNode.right);
  }
  /*
      breath first Traversal:

      1. we start with root node
      2. start a while loop
        3. we grab the root node and remove it from queue array and just log it out
        4. we check if there is a left or right node and push it into the queue
        5. because of the while loop we keeep going until there is no more child nodes

    6. there is no more nodes and queue array has no more elements ending the function
  */
}

// log callback
function log(value) {
  console.log(value);
}

// get min value
binarySearchTree.prototype.getMinVal = function(){
    if(this.left) return this.left.getMinVal();
    else return this.value;
}
// get max value
binarySearchTree.prototype.getMaxVal = function(){
  if(this.right) return this.right.getMaxVal();
  else return this.value;
}

// testing tree
var bst = new binarySearchTree(50);
bst.insert(30);
bst.insert(20);
bst.insert(10);
bst.insert(100);
bst.insert(200);
bst.left.left.left.value;
// bst.contains(100);

// iteratorFunc callback
bst.depthFirstTraversal(log,"in-order");
console.log("-----");
bst.depthFirstTraversal(log,"pre-order");
console.log("-----");
bst.depthFirstTraversal(log,"post-order");
console.log("-----");
bst.breathFirstTraversal(log);
console.log("-----");
bst.getMinVal();
bst.getMaxVal();

/*

  binarySearchTree is fast to search data, using binary search
   log( binarySearch(["a","b","c","d","e"], key));
   big O notation: "O (log n)" logarithmic run time

   but only works if it's balanced

*/
