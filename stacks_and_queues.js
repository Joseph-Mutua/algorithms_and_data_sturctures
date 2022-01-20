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
