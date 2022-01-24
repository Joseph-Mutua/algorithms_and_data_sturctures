// Recursion - Space complexity: O(N)
// Tail Recursion  - Space complexity: O(1)

// Normal Recursion
function reFactorial(x) {
  if (x <= 1) {
    return 1;
  } else {
    return x * reFactorial(x - 1);
  }
}

// Tail Recursion
function reFactorial(x, totalsoFar = 1) {
  if (x == 0) {
    return totalSoFar;
  } else {
    return x * reFactorial(x - 1, totalsoFar * x);
  }
}
