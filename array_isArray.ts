// Array isArray()
let numbers22 = [1, 2, 3, 4];

// checking whether numbers is an array or not
console.log(Array.isArray(numbers22));

let text = "JavaScript";

// checking whether text is an array or not
console.log(Array.isArray(text));

// Output:
// true
// false

// Example 1: Using isArray() Method
let fruits1 = ["Apple", "Grapes", "Banana"];

// checking whether fruits is an array or not
console.log(Array.isArray(fruits1));

let text1 = "Apple";

// checking whether text is an array or not
console.log(Array.isArray(text1));

// Example 2: isArray() to Check Other Data Types
// passing an empty array []
console.log(Array.isArray([])); // true 

// we have created an array with element 7 and
// passed that value to isArray()
console.log(Array.isArray(new Array(7))); // true

// passing a boolean value
console.log(Array.isArray(true)); // false

// passing undefined
console.log(Array.isArray(undefined)); // false

// not passing any argument in isArray()
console.log(Array.isArray(undefined)); // false
