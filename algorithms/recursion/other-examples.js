function countdown(n) {
  if (n <= 0) {
    console.log("Done!");
    return; // Base case
  }
  console.log(n);
  countdown(n - 1); // Recursive call
}
// countdown(5);

function reverseString(str) {
  if (str === "") return ""; // Base case
  return reverseString(str.slice(1)) + str[0]; // Recursive step
}

function reverseString(str) {
  if (str === "") return ""; // Base case
  console.log("Calls with: ", str);
  const result = reverseString(str.slice(1)) + str[0];
  // let result = str[0] + reverseString(str.slice(1)); // this won't work
  console.log("Returning:", result);
  return result;
}

console.log(reverseString("hello"));
