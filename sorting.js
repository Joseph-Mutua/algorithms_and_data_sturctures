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

    for (let j = i + 1; j < length; j++) {
      if (array[j] < array[min]) {
        // update minimum if current is lower
        // than what we had previously
        min = j;
      }
    }
    let temp = array[i];
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

// Merge sort

function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  // Split array into right and left
  const length = array.length;
  const middle = Math.floor(length / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

// function merge(left, right) {
//   const result = [];
//   let leftIndex = 0;
//   let rightIndex = 0;
//   while (leftIndex < left.length && rightIndex < right.length) {
//     if (left[leftIndex] < right[rightIndex]) {
//       result.push(left[leftIndex]);
//       leftIndex++;
//     } else {
//       result.push(right[rightIndex]);
//       rightIndex++;
//     }
//   }
//   console.log(left, right);

//   return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
// }

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  //   At this point either left or right is empty

  while (leftIndex < left.length) {
    result.push(left[leftIndex]);
    leftIndex++;
  }

  while (rightIndex < right.length) {
    result.push(right[rightIndex]);

    rightIndex++;
  }

  return result;
}

let mergeResult = mergeSort(numbers);
console.log(mergeResult);

// Quick Sort
// Start with a PIVOT --> The pivot should be in the right position in the final sorted array
//                    --> Items to the left are smaller, items to the right are larger
// STEPS
// 1. Choose the pivot, then move it to the end of the array
// 2. Look for 2 items: --> itemfromLeft that is larger than the pivot
// 3.                   --> itmeFromRight that is smaller than pivot
// 4. Swap itemFromLeft with itemFromRight and repeat the process
// 5. Stop when index of itemFromLeft > index of itemFromRight, then swap pivot with itemFromLeft
// 6. The pivot is now in it's correct position

// 7. Now split the array at the pivot and repeat the process recursively then join

// HOW TO CHOOSE PIVOT
// 1. middle of three: Choose first, middle and end items, then sort them and pick the middle one

function quicksort(array, k) {
  if (array.length <= 1) {
    return array;
  }

  let pivot = array[0];

  let left = [];
  let right = [];

  for (let i = 1; i < array.length; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i]);
  }

  return quicksort(left).concat(pivot, quicksort(right));
}





// let unsorted = [23, 45, 16, 37, 3, 99, 22];
// let sorted = quicksort(numbers);

// console.log("Sorted array", sorted);
