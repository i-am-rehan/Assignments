// Array fill()
// defining an array 
var fruits = ['Apple', 'Banana', 'Grape'];

// filling every element of the array with 'Cherry'
fruits.fill("Cherry");

console.log(fruits);

// Output: 
// [ 'Cherry', 'Cherry', 'Cherry' ]

// Example 1:Using fill() Method
let prices = [651, 41, 4, 3, 6];

// filling every element of the array with '5'
let new_prices = prices.fill(5);

console.log(prices);

console.log(new_prices); 

// Example 2:fill() Method with Three Arguments
// array definition
var language = ["JavaScript", "Python", "C", "C++"];

// replacing element of array from index 1 to 3 by 'JavaScript'
language.fill("JavaScript", 1, 3);

// printing the original array
console.log(language);

// Example 3:fill() Method with Invalid Indexes
var rank = [8, 9, 3, 7];

// on passing negative index, counting starts from back
rank.fill(15, -2);

// prints the modified 'rank' array
console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid index result in no change
rank.fill(15, 7, 8);

console.log(rank);  // [ 8, 9, 15, 15 ]

// passing invalid indexes
rank.fill(15, NaN, NaN);

console.log(rank);  // [ 8, 9, 15, 15 ]