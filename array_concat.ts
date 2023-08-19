// Array concat()
let primeNumbers = [2, 3, 5, 7]
let evenNumbers = [2, 4, 6, 8]

// join two arrays 
let joinedArrays = primeNumbers.concat(evenNumbers);
console.log(joinedArrays);

/* Output:
[
  2, 3, 5, 7,
  2, 4, 6, 8 
]
*/

// Example 1: Using concat() method
var languages6 = ["JavaScript", "Python", "Java"];
var languages7 = ["C", "C++"];

// concatenating two arrays
var new_arr = languages6.concat(languages7);
console.log(new_arr); // [ 'JavaScript', 'Python', 'Java', 'C', 'C++' ]

// concatenating a value and array
var new_arr1 = languages7.concat("Lua", languages6);
console.log(new_arr1); // [ 'C', 'C++', 'Lua', 'JavaScript', 'Python', 'Java' ]

// Example 2: Concatenating nested arrays
var randomList1: number[] = [1, 2, 3];
var randomNestedList: number[][] = [
  [4, 5],
  [6, 7],
];

// Flatten the nested arrays using concat and spread operator
var combined: (number | number[])[] = randomList1.concat(...randomNestedList);
console.log(combined); // [ 1, 2, 3, 4, 5, 6, 7 ]

// changing the value 1 to 0
randomList1[0] = 0;
console.log(randomList1); // [ 0, 2, 3 ]

// changes not reflected in concatenated array
console.log(combined); // [ 1, 2, 3, 4, 5, 6, 7 ]

// modifying nested list (adding 6 to first element)
randomNestedList[0].push(6);
console.log(randomNestedList); // [ [ 4, 5, 6 ], [ 6, 7 ] ]

// changes are reflected in concatenated array
console.log(combined); // [ 1, 2, 3, 4, 5, 6, 7 ]

