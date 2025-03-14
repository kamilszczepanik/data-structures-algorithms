//* Take the collection of numbers and find a matching pair that equals the sum
const array1 = [1, 2, 3, 9]; // NO
const array2 = [1, 2, 4, 4]; // YES
const sum = 8;

// brute force - O(n^2) - quadratic
function hasPairWithSumBruteForce(array, sum) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (i === j) break;
      if (array[i] + array[j] === sum) {
        return `First number: ${array[i]}, second number: ${array[j]}`;
      }
    }
  }
  return "No matching pair found";
}

// better - O(n) - linear
function hasPairWithSumLinearSorted(nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low < high) {
    const s = nums[low] + nums[high];
    if (s === target) {
      return [low, high];
    } else if (s < target) {
      low++;
    } else if (s > target) {
      high--;
    }
  }
  return [low, high];
}

// O(n) Linear for not sorted array
// we can either sort and then do the same as in linear solution
// or use the hash map and keep the values there for lookup
function hasPairWithSumLinearNotSorted(array, sum) {
  let complements = {};

  for (const element of array) {
    if (complements[element]) {
      return `First number: ${sum - element}, second number: ${element}`;
    }
    complements[sum - element] = true;
  }

  return "No matching pair found";
}

// O(n) Linear for not sorted array - THE BEST WAY
// we can either sort and then do the same as in linear solution
// or use the hash map and keep the values there for lookup
function hasPairWithSumLinearNotSortedSet(array, sum) {
  let complements = new Set();

  for (const element of array) {
    if (complements.has(element)) {
      return `First number: ${sum - element}, second number: ${element}`;
    }
    complements.add(sum - element);
  }

  return "No matching pair found";
}

// with indexes returned
function hasPairWithSumLinearNotSortedSet(nums, target) {
  let complements = new Map();

  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];

    if (complements.has(element)) {
      return [complements.get(element), i];
    }

    complements.set(target - element, i);
  }

  return "No matching pair found";
}
