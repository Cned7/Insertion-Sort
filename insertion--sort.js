const unsortedArray = [30, 70, 10, 60, 40, 20, 50];
const sortedArray = insertionSort(unsortedArray);

function insertionSort(arr) {
  let i, key, j;

  for (i = 1; i < arr.length; i++) {
    key = arr[i];
    // Initialize j as the index of the previous element
    j = i - 1;

    // Move elements of arr[0..i-1] that are greater than key to one position ahead
    while (j >= 0 && arr[j] > key) {
      // Shift element to the right
      arr[j + 1] = arr[j];
      // Move to the previous element
      j--;
    }

    arr[j + 1] = key;
  }

  return arr;
}
console.log(sortedArray);
