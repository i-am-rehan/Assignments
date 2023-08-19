// Array of()
// creating an array named alphabets with elements A,B,C
let alphabets3 = Array.of("A", "B", "C");

// display contents of alphabet'
console.log(alphabets3);

// Output: [ 'A', 'B', 'C' ]

// Example 1: Using of() method
// creating an array 1 element
let numbers3 = Array.of(3);

console.log(numbers3); // [ 3 ]

// creating an array with 3 string elements
let fruits2 = Array.of("Apple", "Banana", "Grapes");

console.log(fruits2); // [ 'Apple', 'Banana', 'Grapes' ]

// creating an array with 4 integers 
let primeNumbers2 = Array.of(2, 3, 5, 7);

console.log(primeNumbers2); // [ 2, 3, 5, 7 ]

// Example 2: Array of() Method and Array Constructor
// creating an array with one element using Array.of()
let evenNumber = Array.of(2);

// displays the length of evenNumber
console.log(evenNumber.length); // 1

// displays content inside evenNumber
console.log(evenNumber); // [2]

// creating an empty array of length 2 using Array constructor
let numbers4 = Array(2);

// displays the length of 'numbers' array
console.log(numbers4.length); //  2

// displays the content inside 'numbers'
console.log(numbers4); //  [ <2 empty items> ]
