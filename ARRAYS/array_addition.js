// Have the function ArrayChallenge(arr) take the array of 
// numbers stored in arr and return the string true if any 
// combination of numbers in the array (excluding the largest number) 
// can be added up to equal the largest number in the array, otherwise 
// return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] 
// the output should return true because 4 + 6 + 10 + 3 = 23. 
// The array will not be empty, will not contain all the same elements, and may contain negative numbers.

// Input: [5, 7, 16, 1, 2];
// Output: false;

// Input: [3, 5, -1, 8, 12];
// Output: true;
function ArrayChallenge(arr) {
  // code goes here
  arr = arr.sort((a, b) => a - b);
  var largestVal = arr.pop();

  var sum = arr.reduce((x, y) => x + y);

  for (let i = arr.length - 1; i >= 0; i--) {
    if (sum - arr[i] == largestVal) {
      return true;
    }
    if (largestVal - sum == 0) {
      return true;
    }
  }
  return false;
}

// keep this function call here
console.log(ArrayChallenge([3, 5, -1, 8, 12]));
