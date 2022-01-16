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
      maxLeft = 0,
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

// Optimized Solution

// 1. Identify the pointer with the lesser value
// 2. Ask, is this pointer value lesser than or equal to the max on that side:
// If yes, update the max on that side
// If No, get the water for the pointer value, add to the TOTAL

// Move the pointer inwards
// Repeat for the other pointer

const getTrappedRainWater3 = (nums) => {
  let left = 0,
    right = nums.length - 1,
    maxLeft = 0,
    maxRight = 0,
    total = 0;

  while (left < right) {
    if (nums[left] <= nums[right]) {
      if (nums[left] >= maxLeft) {
        maxLeft = nums[left];
      } else {
        total += maxLeft - nums[left];
      }
      left++;
    }

    if (nums[right] >= maxRight) {
      maxRight = nums[right];
    } else {
      total += maxRight - nums[right];
    }
    right--;
  }
  return total;
};

console.log(getTrappedRainWater3(numsArray));
