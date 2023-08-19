// Array unshift()
let languages4 = ["Java", "Python", "C"];

// add "JavaScript" at the beginning of the array
languages4.unshift("JavaScript");
console.log(languages4);

// Output: [ 'JavaScript', 'Java', 'Python', 'C' ]

// Example: Using unshift() method
var languages5 = ["JavaScript", "Python", "Java", "Lua"];

var count = languages5.unshift("C++");
console.log(languages5); // [ 'C++', 'JavaScript', 'Python', 'Java', 'Lua' ]
console.log(count); // 5

var priceList = [12, 21, 35];

var count1 = priceList.unshift(44, 10, 1.6);
console.log(priceList); // [ 44, 10, 1.6, 12, 21, 35 ]
console.log(count1); // 6
