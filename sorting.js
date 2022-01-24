// Bubble sort
// Insertion sort
// Selection Sort

// Merge Sort
// Quick Sort

// Bubble Sort
const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (array[j] > array[j + 1]) {
        // Swap numbers
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

// console.log(numbers);
// bubbleSort(numbers)
// console.log(numbers);

// Selection Sort
function selectionSort(array) {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    // Set current index as minimum

    let min = i;
    let temp = array[i];

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // update minimum if current is lower
        // than what we had previously
        min = j;
      }
    }
    array[i] = array[min];
    array[min] = temp;
  }
  return array;
}

// selectionSort(numbers);
// console.log(numbers);

// Insertion Sort
function insertionSort() {
  const length = array.length;

  for (let i = 0; i < length; i++) {
    if (array[i] < array[0]) {
      // move member to the first position

      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let j = 1; j < i; j++) {
        if (array[i] > array[j - 1] && array[i] < array[j]) {
          // move number to the right spot
          array.splice(j, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }
}
