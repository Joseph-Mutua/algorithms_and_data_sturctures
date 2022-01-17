// Given two strings S and T, return if they EQUAL when both
// are typed out. Any "#" that appears in the string counts
// as a backspace

const buildString = (str) => {
  const builtArray = [];
  for (let p = 0; p < str.length; p++) {
    if (str[p] !== "#") {
      builtArray.push(str[p]);
    } else {
      builtArray.pop();
    }
  }
  console.log(builtArray);
  return builtArray;
};

const backSpaceCompare = (s, t) => {
  const finalS = buildString(s);
  const finalT = buildString(t);

  if (finalS.length !== finalT.length) {
    return false;
  } else {
    for (let p = 0; p < finalS.length; p++) {
      if (finalS[p] !== finalT[p]) {
        return false;
      }
    }
  }
  return true;
};

// Optimized Solution
const backSpaceCompare1 = (s, t) => {
  let p1 = s.length - 1,
    p2 = t.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === "#" || t[p2] == "#") {
      if (s[p1] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;

          if (s[p1] === "#") {
            backCount += 2;
          }
        }
      }
      if (t[p2] === "#") {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;
          if (t[p2] === "#") {
            backCount += 2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
};

console.log(backSpaceCompare1("abc#d", "a#bzz##d"));
