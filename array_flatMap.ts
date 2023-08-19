// Array flatMap()
// defining an array
let numbers35 = [1, 2, 3, 4, 5];

// each element of the array is squared and later flattened
const resultingArray1 = numbers35.flatMap((x) => [x ** 2]);

console.log(resultingArray1);

// Output:
// [ 1, 4, 9, 16, 25 ]

// Example 1: Using flatMap() Method
// defining an array
let numbers36 = [1, 2, 3, 4, 5];

// each element of the array is incremented by 1
// and later the array is flattened
let resultingArray2 = numbers36.flatMap((element) => element + 1);

console.log(resultingArray2);

// Example 2: Using flat() and map() Instead of flatMap()
// defining an array
let numbers37 = [1, 2, 3, 4, 5];

// incrementing each element of array using map()
let afterMapping = numbers37.map((element) => element + 2);

// flattening the array using flat()
let afterFlattening = afterMapping.flat();

console.log(afterFlattening); // [ 3, 4, 5, 6, 7 ]

// using flatMap() instead of flat() and map()
let after_flatMap = numbers37.flatMap((element) => element + 2);

console.log(after_flatMap); // [ 3, 4, 5, 6, 7 ]