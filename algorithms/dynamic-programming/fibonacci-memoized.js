let calculations = 0;
function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
}

let calculationsForMemoized = 0;
function fibonacciMemoized() {
  let cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    } else {
      if (n < 2) {
        return n;
      } else {
        calculationsForMemoized++;
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

console.log("Result of a function: ", fibonacci(30));
console.log("calculations for not memoized: ", calculations);

const fib = fibonacciMemoized();
console.log("Result of a function: ", fib(30));
console.log("calculationsForMemoized: ", calculationsForMemoized);
