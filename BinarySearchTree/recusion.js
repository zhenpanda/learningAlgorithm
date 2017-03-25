// Recusion: when a function all itself

// Factorial (!)
// 4! = 4*3*2*1 = 24

function factorial(n){
  // base-case
  if (n===1) {
    return n;
  } // recusive case
  else {
    return n * factorial(n-1);
  }
};
factorial(4);

// call stack: order of function being called
/*

The Stack:

  fourth call
    factorial(1);
    num = 1, returns 1;

  third call:
      factorial(2);
      num = 2, returns factorial(1);

  second call:
      factorial(3);
      num = 3, returns factorial(2);

  first call:
      factorial(4);
      num = 4, returns factorial(3);

The Resolve:

  returns 1

  returns 2 * 1

  returns 3 * (2 * 1)

  returns 4 * (3 * 2 * 1)

*/
