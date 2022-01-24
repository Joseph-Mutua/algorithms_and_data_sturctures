// --Big Os--
// 0(1) Constant- no Loops
// O(Log N) Logarithmic - usually searching algorithms have log(n) if they are sorted 
// (binary search) -- not on hash maps though

// O(n) Linear - For and while Loops
// O(n*log(n)) Log Linear-Sorting operations usually

// O(n^2) quadratic - every element in a coolection needs to be compared to every other element. Two nested Loops
// O(2^n) Exponential - recursive algorithms that solve a problem of size N

// O(n!) Factorial - you''re adding a loop for every element

// Iterating through a collection is still O(n)
// Two separating collections: O(a * b)


// What can cause time in a function
// Operations (+, -, *, /)
// comparisons (<, >, ==)
// Looping (for, while)
// Outside function call (function())

// Rule Book
// Rule 1: Always worst case
// Rule 2: Remove constants
// Rule 3: Different inputs  should have different variables. O(a + b)- A and B arrays nested would be O(a*b)
        // For steps in order
        // For nested loops
        // For nested steps
        
// Rule 4: Drop non-dominant terms.