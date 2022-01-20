// Given a string containing only parentheses, determine
// if it is valid. The string is valid if all parentheses close

const parens = {
  "(": ")",
  "[": "]",
  "{": "}",
};

const isValidParentheses = (str) => {
  if (str.length === 0) return true;

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (parens[str[i]]) {
      stack.push(str[i]);
    } else {
      const leftBracket = stack.pop();
      const correctBracket = parens[leftBracket];

      if (str[i] !== correctBracket) return false;
    }
  }
  return stack.length === 0;
};

// Given a string only containing round brackets and "(" and ")"
// and lowercase characters, remove the least amount of brackets
// so the string is valid. A string is considered valid if it is
// empty or if there are brackets, they all close.

const removeBrackets = (str) => {
  const res = str.split("");
  const stack = [];

  for (let i = 0; i < res.length; i++) {
    if (res[i] === "(") {
      stack.push(res[i]);
    } else if (res[i] === ")" && stack.length) {
      stack.pop();
    } else if (res[i] === ")") {
      res[i] = "";
    }
  }

  while (stack.length) {
    const currentIndex = stack.pop();
    res[currentIndex] = "";
  }
  return res.join("");
};

let randStr = "(rggrgfdvfv(f)yth";
console.log(removeBrackets(randStr));