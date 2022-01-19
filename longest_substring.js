// Given a String, find the length of the longest
// substring without repeating characters

const getLongestSubstring = (str) => {
  if (str.length <= 1) return s.length;

  let longest = 0;
  for (let left = 0; left < str.length; left++) {
    let seenChars = {},
      currentLength = 0;

    for (let right = left; right < str.length; right++) {
      const currentChar = str[right];

      if (!seenChars[currentChar]) {
        currentLength++;
        seenChars[currentChar] = true;
        longest = Math.max(longest, currentLength);
      } else {
        break;
      }
    }
  }
  return longest;
};

// SLIDING WINDOW
const getLongestSubstring1 = (str) => {
  if (str.length <= 1) return str.length;

  const seenChar = {};

  let left = 0;
  longest = 0;

  for (let right = 0; right < str.length; right++) {
    const currentChar = str[right];
    const prevSeenChar = seenChar[currentChar];

    if (prevSeenChar >= left) {
      left = prevSeenChar + 1;
    }
    seenChar[currentChar] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest
};

// Form a window over some portion of sequential data, then
// move that window throughout the data to capture different parts of it

console.log(getLongestSubstring1("aaadcrfgsbaddtgyhuiewr"));