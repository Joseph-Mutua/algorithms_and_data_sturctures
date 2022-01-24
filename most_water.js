// /array big - o
// Lookup - 0(1)
// Push O(1)
// Insert O(n)
// Delete O(n) 


// You are given an array of positive integers where each
// integer represents the height of a vertical line on a chart
// Find two lines which together with the x-axis forms a
// container that would hold the x-axis forms a container that
// Would hold the greatest amount of water. Return the area of
// Water it would hold

// numsArray = [1, 4, 6, 3, 9, 4, 8, 3];
numsArray = [7, 1, 2, 3, 9];

const mostWaterContainer1 = (nums) => {
  let maxArea = 0;

  for (p1 = 0; p1 < nums.length; p1++) {
    for (p2 = p1 + 1; p2 < nums.length; p2++) {
      const height = Math.min(nums[p1], nums[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }
  return maxArea;
};

// Optimized solution for Time

const mostWaterContainer2 = (nums) => {
  let p1 = 0,
    p2 = nums.length - 1,
    maxArea = 0;
  while (p1 < p2) {
    const height = Math.min(nums[p1], nums[p2]);
    const width = p2 - p1;
    const area = height * width;
    maxArea = Math.max(maxArea, area);

    if (nums[p1] <= nums[p2]) {
      p1++;
    } else {
      p2--;
    }
  }
  return maxArea;
};

console.log(mostWaterContainer2(numsArray));
