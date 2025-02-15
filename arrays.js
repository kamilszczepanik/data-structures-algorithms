const strings = ["a", "b", "c", "d"];
//  4*4 = 16 bytes of storage

// access
string[2]; // O(1)

// add to end
strings.push("e"); // O(1)

// remove from end
strings.pop("e"); // O(1)

// add to beginning
strings.unshift("x"); //! O(n) - not the best data structure for adding items to the beginning

// add somewhere in the middle, can also remove elements
strings.splice(2, 0, "alien"); // O(n) - worst case

// creates a new array with elements that pass a condition, avoiding mutation
strings.filter((num) => num === "a"); // O(n)

// creates a new array by applying a function to each element, avoiding mutation
strings.map((element) => element + "xyz"); // O(n)

// Reduces an array to a single value
strings.reduce((acc, num) => acc + num, 0); // O(n)

// Returns the first element that meets a condition
strings.find((element) => element === "a"); // O(n)

// Returns true if at least one element meets the condition
strings.some((element) => element === "a"); // O(n)

// Returns true if all elements meet the condition.
strings.every((element) => element === "a"); // O(n)
