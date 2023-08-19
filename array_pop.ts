// Array pop()
let cities = ["Madrid", "New York", "Kathmandu", "Paris"];

// remove the last element
let removedCity = cities.pop();

console.log(cities)         // ["Madrid", "New York", "Kathmandu"]
console.log(removedCity);   // Paris

// Example: Using pop() method
var languages = ["JavaScript", "Python", "Java", "C++", "Lua"];

var popped = languages.pop();

console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'C++' ]
console.log(popped); // Lua

// pop returns any type of object
var numbers1 = [
  [1, 2, 3],
  [4, 5, 6],
  [-5, -4, -3],
];
console.log(numbers1.pop()); // [ -5, -4, -3 ]
console.log(numbers1); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]