const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let numberToCompare = array[i];

    for (let j = i - 1; j >= 0; j--) {
      if (numberToCompare < array[j]) {
        const temp = array[j];
        array[j] = numberToCompare;
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

function insertionSortImproved(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      array.unshift(array.splice(i, 1)[0]);
    } else {
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
}

console.log(insertionSort(numbers));
console.log(insertionSortImproved(numbers));
