// Array shift()
let languages3 = ["English", "Java", "Python", "JavaScript"];

// removes the first element of the array
let first = languages3.shift();
console.log(first);
console.log(languages3);

// Output: English
//         [ 'Java', 'Python', 'JavaScript' ]

// Example: Using shift() method
var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];

var shifted = languages.shift();

console.log(languages); // [ 'Python', 'Java', 'C++', 'Lua' ]
console.log(shifted); // JavaScript

// shift returns any type of object
var numbers2 = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];
console.log(numbers2.shift()); // [ 1, 2, 3 ]
console.log(numbers2); // [ [ 4, 5, 6 ], [ -5, -4, -3 ] ]