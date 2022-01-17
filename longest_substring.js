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

console.log(getLongestSubstring("aaadcrfgsbaddtgyhuiewr"));