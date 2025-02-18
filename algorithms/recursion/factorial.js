// Write two functions that finds the factorial of any number.
// 5! = 5 * 4 * 3 * 2 * 1

function findFactorialRecursive(value) {
  if (value < 2) {
    return value;
  }

  return value * findFactorialRecursive(value - 1);
}

function findFactorialIterative(value) {
  let result = 1;
  const numbers = [];

  for (let i = value; i > 0; i--) {
    result *= i;
    numbers.push(i);
  }

  return `Factorial of ${value} - ${numbers.join(" * ")} is ${result}`;
}

console.log(findFactorialRecursive(5));
console.log(findFactorialIterative(5));
