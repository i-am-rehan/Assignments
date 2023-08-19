// Array includes()
// defining an array
let languages14 = ["JavaScript", "Java", "C"];

// checking whether the array contains 'Java'
let check = languages14.includes("Java");

console.log(check); 

// Output: true

// Example 1: Using includes() method
let languages15 = ["JavaScript", "Java", "C", "C++"];

// checking whether the array contains 'C'
let check1 = languages15.includes("C");

console.log(check1); // true

// checking whether the array contains 'Ruby'
let check2 = languages15.includes("Ruby");

console.log(check2); // false

// Example 2: includes() for Case-Sensitive Search
let languages16 = ["JavaScript", "Java", "C", "Python"];

// checking whether the array contains 'Python'
let check3 = languages16.includes("Python");

console.log(check3); // true

// checking whether the array contains 'python'
let check4 = languages16.includes("python");

console.log(check4); // false

// Example 3: includes() with two Parameters
let languages17 = ["JavaScript", "Java", "C", "Python"];

// second argument specifies position to start the search
let check5 = languages17.includes("Java", 2);

console.log(check5); // false

// the search starts from third last element 
let check6 = languages17.includes("Java", -3);

console.log(check6); // true 