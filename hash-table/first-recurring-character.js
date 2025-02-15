function firstRecurringCharacter(input) {
  // brute force solution
  // take the first number
  // iterate through the other numbers
  // return the first match
  //* possible solution - nested arrays - O(n^2) - bad solution

  // better solution - O(n) linear
  if (
    !input ||
    input.length === 0 ||
    !input.every((element) => typeof element === "number")
  ) {
    throw new Error("Provide correct input");
  }

  const set = new Set();

  for (let i = 0; i < input.length; i++) {
    const currentNumber = input[i];
    if (set.has(currentNumber)) {
      return currentNumber;
    } else {
      set.add(currentNumber);
    }
  }
  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, undefined])); // should return 2
console.log(firstRecurringCharacter([2, 1, 1, 2, 3, 5, 1, 2, 4])); // should return 1
console.log(firstRecurringCharacter([2, 3, 4, 5])); // should return undefined
console.log(firstRecurringCharacter([2, 5, 5, 2, 3, 5, 1, 2, 4])); // should return 5
