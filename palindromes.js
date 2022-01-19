// Given a String, determine if it is a palindrome, considering
// only alphanumeric characters and ignoring case sensitivity

const str = "A man, a plan, a canal: Panama";

const isPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();

  // Initialize left/right pointers at start and end of string respectively
  let left = 0;
  right = str.length - 1;

  // loop through string characters while comparing them,
  // then move the pointer closer to the center
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

// Given a String, determine if it is almost a palindrome
// A string is almost a palindrome if it becomes a palindrome by removing
// 1 letter. Consider only alphanumeric characters and ignore case sensitivity
const validSubPalindrome = (str, left, right) => {
  while (left < right) {
    if (str[left] !== str[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

const almostPalindrome = (str) => {
  str = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  let left = 0;
  right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) {
      return (
        validSubPalindrome(str, left + 1, right) ||
        validSubPalindrome(str, left, right - 1)
      );
    }
    left++;
    right--;
  }
  return true;
};

console.log(almostPalindrome(str));
