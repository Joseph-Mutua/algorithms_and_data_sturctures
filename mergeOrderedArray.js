// In order to win the prize for most cookies sold, my friend Alice and I are going to merge our Girl Scout Cookies orders
// and enter as one unit.
// Each order is represented by an "order id" (an integer)
// We have our lists of orders sorted numerically already,
// in arrays. Write a function to merge our arrays of orders into one sorted array

const mergeArray = (myArray, alicesArray) => {
  const mergedArray = [];

  let currentIndexAlices = 0;
  let currentIndexMine = 0;
  let currentIndexMerged = 0;

  while (currentIndexMerged < myArray.length + alicesArray.length) {
    const isMyArrayExhausted = currentIndexMine >= myArrray.length;
    const isAlicesArrayExhausted = currentIndexAlices >= alicesArray.length;

    // Case: next comes from my array
    // My array must not be exhausted, and EITHER:
    // 1) Alice's array IS exhausted, or
    // 2) The current element in my array is less
    //    than the current element in Alice's array

    if (
      !isMyArrayExhausted &&
      (isAlicesArrayExhausted ||
        myArray[currentIndexMine] < alicesArray[currentIndexMine])
    ) {
      mergedArray[currentIndexMerged] = myArray[currentIndexMine];
      currentIndexMine++;
    } else {
      // Case: next comes from Alice's array

      mergedArray[currentIndexMerged] = alicesArray[currentIndexAlices];
      currentIndexAlices++;
    }

    currentIndexMerged++;
  }

  return mergedArray;
};
