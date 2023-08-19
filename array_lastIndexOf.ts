// Array lastIndexOf()
let priceList1 = [10, 8, 2, 31, 10, 31, 65];

// finding the index of the last occurence of 31
let lastIndex = priceList1.lastIndexOf(31);

console.log(lastIndex); 

// Output: 5

// Example 1: Using lastIndexOf() Method
let alphabets = ["a", "b", "c", "a", "d"];

// finding the index of the last occurence of 'a'
let lastIndex1 = alphabets.lastIndexOf("a");

console.log(lastIndex1);

// finding the index of the last occurence of 'e'
let lastIndex2 = alphabets.lastIndexOf("e");

console.log(lastIndex2);

// Example 2: lastIndexOf() with two Parameters
let alphabets1 = ["a", "b", "c", "a", "d", "a"];

// second argument specifies the starting index
// from where the method searches the element backward
let lastIndex3 = alphabets1.lastIndexOf("a", 4);

console.log(lastIndex3); 

// Example 3: lastIndexOf() with Negative Parameter
let alphabets2 = ["a", "b", "c", "a", "d"];

// starts the search at third last position
let lastIndex4 = alphabets2.lastIndexOf("a", -3);

console.log(lastIndex4);