// Array reverse()
let numbers = [1, 2, 3, 4, 5];

// reversing the numbers array
let reversedArray = numbers.reverse();

console.log(reversedArray);

// Output: [ 5, 4, 3, 2, 1 ]

// Example 1:Using reverse() Method
let languages1 = ["JavaScript", "Python", "C++", "Java", "Lua"];

// reversing the order of languages array
let reversedArray1 = languages1.reverse();

console.log("Reversed Array: ", reversedArray1);

// modifies the original array
console.log("Original Array: ", languages1);

// Example 2:reverse() Method with Spread Operator
let languages2 = ["JavaScript", "Python", "C++", "Java", "Lua"];

// using spread operator to reverse the array
let reversedArray2 = [...languages2].reverse();

console.log("Reversed Array:", reversedArray2);

// modifies the original array
console.log("Original Array:", languages2);