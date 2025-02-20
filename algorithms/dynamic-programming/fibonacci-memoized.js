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
      calculationsForMemoized++;
      if (n < 2) {
        return n;
      } else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

function fibonacciMemoizedBottomUp(n) {
  let answer = [0, 1];

  for (let i = 2; i < n; i++) {
    console.log(answer[i - 1]);
    answer.push(answer[i - 1] + answer[i - 1]);
  }

  return answer.pop();
}

console.log("Result of a function: ", fibonacci(30));
console.log("calculations for not memoized: ", calculations);

const fib = fibonacciMemoized();
console.log("Result of a function: ", fib(30));
console.log("calculationsForMemoized: ", calculationsForMemoized);
