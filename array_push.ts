// Array push()
let city2 = ["New York", "Madrid", "Kathmandu"];

// add "London" to the array
city2.push("London");

console.log(city2);

// Output: [ 'New York', 'Madrid', 'Kathmandu', 'London' ]

// Example: Using push() method
var languages = ["JavaScript", "Python", "Java", "Lua"];

var count = languages.push("C++");
console.log(languages); // [ 'JavaScript', 'Python', 'Java', 'Lua', 'C++' ]
console.log(count); // 5

var priceList = [12, 21, 35];

var count1 = priceList.push(44, 10, 1.6);
console.log(priceList); // [ 12, 21, 35, 44, 10, 1.6 ]
console.log(count1); // 6