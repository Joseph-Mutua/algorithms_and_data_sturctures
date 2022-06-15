// Array Challenge
// Have the function ArrayChallenge(arr) read the array of numbers stored in arr
// which will contain a sliding window size, N, as the first element in the array 
//and the rest will be a list of numbers. Your program should return the Moving Median 
//for each element based on the element and its N-1 predecessors, where N is the 
//sliding window size. The final output should be a string with the moving median corresponding to
// each entry in the original array separated by commas.

// Note that for the first few elements (until the window size is reached), the median is
// computed on a smaller number of entries.
// For example: if arr is [3, 1, 3, 5, 10, 6, 4, 3, 1] then your program should output "1,2,3,5,6,6,4,3"

//EXAMPLES
// Input: [5, 2, 4, 6];
// Output: 2, 3, 4;

// Input: [3, 0, 0, -2, 0, 2, 0, -2];
// Output: 0, 0, 0, 0, 0, 0, 0;

function ArrayChallenge(arr) {
  // code goes here
  function getMedian(arr) {
    arr.sort((a, b) => a - b);
    let len = arr.length;

    if (len % 2) {
      return arr[Math.floor(len / 2)];
    } else {
      return (arr[len / 2 - 1] + arr[len / 2]) / 2;
    }
  }

  let buildArr = [];
  let winLength = arr.shift();
  let len = arr.length;

  for (let i = 0; i < len; i++) {
    let firstIndex = Math.max(0, i - winLength + 1);
    let med = getMedian(arr.slice(firstIndex, i + 1));
    buildArr.push(med);
  }
  return buildArr.join(",");
}

// keep this function call here
console.log(ArrayChallenge([5, 2,4,6]));