function mergeSortedArrays(array1, array2) {
  if (array1.length === 0 && array2.length === 0)
    throw new Error("you have to provide at least one array");
  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;
  if (
    !array1.every((element) => typeof element === "number") ||
    !array2.every((element) => typeof element === "number")
  ) {
    throw new Error("Array should contain only numbers");
  }

  const mergedArray = [];
  let i = 0;
  let j = 0;

  while (mergedArray.length < array1.length + array2.length) {
    if (array1[i] < array2[j] || array2[j] === undefined) {
      mergedArray.push(array1[i]);
      i++;
    } else {
      mergedArray.push(array2[j]);
      j++;
    }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30])); // O(n)
