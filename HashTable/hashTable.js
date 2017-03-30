// hash table
// table of pre-determine length with a key and value

/*

{
  key: "John",
  value: "123-456-7890"
}

*/
// consist time insertion and lookup

// storing data for user in db
// drawback, you can't control what the hash is...

// O (1) runtime... if you do the hash function correctly

function HashTable(size) {
  // the hash table
  this.buckets = Array(size);
  this.numBuckets = this.buckets.length;
}

function HashNode(key,value,next) {
  this.key = key;
  this.value = value;
  this.next = next || null;
}

// charCodeAt()
// getting the numeric value of a character
// 'hello world'.charCodeAt(1);
// 7 % 3 = 1

HashTable.prototype.hash = function (key) {
  var total = 0;
  for (var i = 0; i < key.length; i++) {
    total += key.charCodeAt(i);
  }
  var bucket = total % this.numBuckets;
  return bucket;
};

HashTable.prototype.insert = function (key, value) {
  // get the bucket value with hash function
  var index = this.hash(key);
  if (!this.buckets[index]) this.buckets[index] = new HashNode(key,value);
  else if (this.buckets[index].key === key) {
    this.buckets[index].value = value;
  }
  // deal with clashing values
  else {
    var currentNode = this.buckets[index];
    while(currentNode.next) {
      // insert as replace
      if (currentNode.next.key === key) {
        currentNode.next.value = value;
        return;
      }
      currentNode = currentNode.next;
    }
    currentNode.next = new HashNode(key, value);
  }
};

HashTable.prototype.get = function(key) {
  var index = this.hash(key);
  if(!this.buckets[index]) return null;
  else{
    var currentNode = this.buckets[index];
    while(currentNode) {
      if(currentNode.key === key) {
        return currentNode.value;
        currentNode = currentNode.next;
      }
      return null;
    }
  }
}

HashTable.prototype.retrieveAll = function() {
  var all = [];
  for (var i = 0; i < this.buckets.length; i++) {
    if (this.buckets[i]) {
      var currentNode = this.buckets[i];
      while(currentNode) {
        all.push(currentNode.value);
        if (currentNode.next) {
          currentNode = currentNode.next
        }else {
          currentNode = null;
        }
      }
    }
  }
  return all;
}

var myHT = new HashTable(30);
// myHT.hash('Becca');
myHT.insert('Dean', 'dean@gmail.com');
myHT.insert('Megan', 'megan@gmail.com');
myHT.insert('Dane', 'dane@gmail.com');
myHT.insert('Dean', 'dane@yahoo.com')
myHT.insert('Dean', 'dane@yahoo.com')
console.log(myHT.get('Megan'));
console.log(myHT.retrieveAll());


console.log(myHT);
