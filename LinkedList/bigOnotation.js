// big O notation/ time complexity
// Big O notation characterizes functions according to their growth rates: different functions with the same growth rate may be represented using the same O notation.

// log( "1" );
// big O notation: "0 (1)" consistant run time

// log( [1,2,3,4,5] );
// big O notation: "O (n)" linear run time

// log( [1,2,3,4,5] * [1,2,3,4,5] );
// big O notation: "O (n^2)" exponential run time

// log( binarySearch(["a","b","c","d","e"], key));
// big O notation: "O (log n)" logarithmic run time

/*
// Logarithmic runtime - Big O Notation: O (log n)
*/
function binarySearch(array, key) {
  var low = 0;
  var high = array.length - 1;
  var mid;
  var element;

  while (low <= high) {
    mid = Math.floor((low + high) / 2, 10);
    element = array[mid];
    if (element < key) {
      low = mid + 1;
    } else if (element > key) {
      high = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}
