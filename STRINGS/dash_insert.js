// Have the function StringChallenge(str) insert dashes ('-') between 
// each two odd numbers in str. For example: if str is 454793 the
//  output should be 4547-9-3. Don't count zero as an odd number.

// Examples;
// Input: 99946;
// Output: 9 - 9 - 946;
// Input: 56730;
// Output: 567 - 30;

function StringChallenge(str) {
  // code goes here
  let idx = 0;
  while (idx < str.length - 1) {
    if (Number(str[idx] % 2 === 1 && Number(str[idx + 1]) % 2 === 1)) {
      str = str.slice(0, idx + 1) + "-" + str.slice(idx + 1);
      idx = idx + 2;
    } else {
      idx++;
    }
  }

  return str;
}

// keep this function call here
console.log(StringChallenge(readline()));