// Array entries()
// defining an array named alphabets
const alphabets4 = ["A", "B", "C"];

// array iterator object that contains
// key-value pairs for each index in the array
let iterator = alphabets4.entries();

// iterating through key-value pairs in the array
for (let entry of iterator) {
  console.log(entry);
}

// Output: 
// [ 0, 'A' ]
// [ 1, 'B' ]
// [ 2, 'C' ]

// Example 1: Using entries() Method
// defining an array 
const languages28 = ["Java", "C", "C++", "Python"];

// array iterator object that contains
// key-value pairs for each index in the array
let iterator1 = languages28.entries();

// looping through key-value pairs in the array
for (let entry of iterator1) {
  console.log(entry);
}

// Example 2: Using next() Method in Array Iterator Object
// defining an array
const symbols = ["#", "$", "*"];

// Array iterator object that holds key/value pairs 
let iterator2 = symbols.entries();

// using built-in next() method in Array iterator object
console.log(iterator2.next().value);
console.log(iterator2.next().value);
console.log(iterator2.next().value);