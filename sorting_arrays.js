// Given an unsorted arraay, return the kth largest element.
// It is the kth largest element in sorted order, not the kth
// distinct element

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function sortArr(array, k) {
  function quicksort(array) {
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

  let newArr = quicksort(array);
  return newArr[newArr.length - k];
}

// let unsorted = [23, 45, 16, 37, 3, 99, 22];
// let sorted = sortArr(numbers, 3);

// console.log("Kth Largest number", sorted);

// Implementation number 2
const quickSort = (array, left, right) => {
  if (left < right) {
    const partitionIndex = partition(array, left, right);

    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
};

const partition = (array, left, right) => {
  const pivotElement = array[right];

  let partitionIndex = left;

  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIndex, j);
      partitionIndex++;
    }
  }
  swap(array, partitionIndex, right);
  return partitionIndex;
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getKthElement = (array, k) => {
  const indexToFind = array.length - k;
  quickSort(array, 0, array.length - 1);
  return array[indexToFind];
};

// let unsorted = [23, 45, 16, 37, 3, 99, 22];
// let sorted = getKthElement(numbers, 3);

// console.log("Kth Largest number", sorted);

// Finding the Kth smallest element using Hoare's QuickSelect algorithm
const quickSelect = (array, left, right, indexToFind) => {
  if (left < right) {
    const partitionIndex = partition(array, left, right);

    if ((partitonIndex = indexToFind)) {
      return array[partitionIndex];
    } else if (indexToFind < partitionIndex) {
      return quickSelect(array, left, partitionIndex - 1, indexToFind);
    } else {
      return quickSelect(array, partitionIndex + 1, right, indexToFind);
    }
  }
};

const partition = (array, left, right) => {
  const pivotElement = array[right];

  let partitionIndex = left;

  for (let j = left; j < right; j++) {
    if (array[j] < pivotElement) {
      swap(array, partitionIndex, j);
      partitionIndex++;
    }
  }
  swap(array, partitionIndex, right);
  return partitionIndex;
};

const swap = (array, i, j) => {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
};

const getKthElement = (array, k) => {
  const indexToFind = array.length - k;
  quickSort(array, 0, array.length - 1);
  return array[indexToFind];
};
