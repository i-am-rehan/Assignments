// Array toString()
// defining an array
let items = ["JavaScript", 1, "a", 3];

// returns a string with elements of the array separated by commas
let itemsString = items.toString();

console.log(itemsString);

// Output: 
// JavaScript,1,a,3

// Example 1: Using toString() Method
let info1 = ["Terence", 28, "Kathmandu"];

// returns the string representation of the info array 
let info_str1 = info1.toString();

console.log(info_str1); 

// toString() does not change the original array
console.log(info1); 

// Example 2: toString() with Nested Arrays
// defining a nested array
let nestedArray = [1, 2, 4, ["Apple", 5]];

// returns string representation of the nested array by flattening the array 
let resultingArray = nestedArray.toString();

console.log(resultingArray);