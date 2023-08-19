// Array splice()
let prime_numbers = [2, 3, 5, 7, 9, 11];

// replace 1 element from index 4 by 13
let removedElement = prime_numbers.splice(4, 1, 13);
console.log(removedElement);
console.log(prime_numbers);

// Output: [ 9 ]
//         [ 2, 3, 5, 7, 13, 11 ]

// Example 1: Using splice() method
let languages8 = ["JavaScript", "Python", "Java", "Lua"];

// replacing "Java" & "Lua" with "C" & "C++"
let removed = languages8.splice(2, 2, "C", "C++");
console.log(removed); // [ 'Java', 'Lua' ]
console.log(languages8); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// adding elements without deleting existing elements
let removed1 = languages8.splice(1, 0, "Java", "Lua");
console.log(removed1); // []
console.log(languages8); // [ 'JavaScript', 'Java', 'Lua', 'Python', 'C', 'C++' ]

// removing 3 elements
let removed2 = languages8.splice(2, 3);
console.log(removed2); // [ 'Lua', 'Python', 'C' ]
console.log(languages8); // [ 'JavaScript', 'Java', 'C++' ]

// Example 2: Using splice() for different deleteCount values
let languages9 = ["JavaScript", "Python", "Java", "Lua"];

// does not removes, only appends to the end
let removed3 = languages9.splice(5, 2, "C++");
console.log(removed3); // []
console.log(languages9); // ["JavaScript", "Python", "Java", "Lua", "C++"]

// remove last element and add 3 more elements
let removed4 = languages9.splice(-1, 1, "Swift", "Scala", "Go");
console.log(removed4); // [ "C++" ]
console.log(languages9); // ["JavaScript", "Python", "Java", "Lua", "Swift", "Scala", "Go"]

// Example 3: Using splice() for different start values
let languages10 = ["JavaScript", "Python", "Java", "Lua"];

// removes everything from start
let removed5 = languages10.splice(1);
console.log(removed5); // [ "Python", "Java", "Lua" ]
console.log(languages10); // [ "JavaScript" ]

// remove none & add 3 more element
let removed6 = languages10.splice(1, -2, "Swift", "Scala", "Go");
console.log(removed6); // [ ]
console.log(languages10); // [ "JavaScript", "Swift", "Scala", "Go" ]