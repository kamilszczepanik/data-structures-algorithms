const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  const length = array.length;

  array.forEach((_, i) => {
    let min = i;

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    const temp = array[i];
    array[i] = array[min];
    array[min] = temp;
  });

  return array;
}

console.log(selectionSort(numbers));
