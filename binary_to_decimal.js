// Have the function MathChallenge(str) return the
// decimal form of the binary value. For example: 
// if 101 is passed return 5, or if 1000 is passed return 8.
function MathChallenge(str) {
  // code goes here
  let num = str;
  let dec_value = 0;

  let base = 1;
  let temp = num;

  while (temp) {
    let last_digit = temp % 10;
    temp = Math.floor(temp / 10);
    dec_value += last_digit * base;
    base = base * 2;
  }
  return dec_value;
}

// keep this function call here
console.log(MathChallenge(readline()));