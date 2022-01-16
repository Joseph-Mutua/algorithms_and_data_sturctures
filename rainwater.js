// Given an array of integers representing an elevation
// map where the width of each bar is 1, return how much
// rainwater can be trapped.

numsArray = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2];

// Brute force solution 2
const getTrappedRainWater2 = (nums) => {
  let totalWater = 0;
  for (let p = 0; p < nums.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0;
    maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, nums[leftP]);
      leftP--;
    }

    while (rightP < nums.length) {
      maxRight = Math.max(maxRight, nums[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - nums[p];

    if (currentWater >= 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
};

console.log(getTrappedRainWater2(numsArray));
