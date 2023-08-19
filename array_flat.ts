// Array flat()
// 3 nested arrays 
let numbers33 = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// reducing nesting by flattening the array to depth 2 
let flattenArray = numbers33.flat(2);

// new flatten array
console.log(flattenArray);

// Output:
// [ 1, 2, 3, 4, 5, 6, [ 7, 8 ] ]

// Example 1: Using flat() Method
// 3 nested array 
let numbers34 = [1, 2, [3, 4, [5, 6, [7, 8]]]];

// reducing nesting by flattening the array to depth 2 
let flattenArray2 = numbers34.flat(2);

// new flatten array
console.log(flattenArray2);

// Example 2: flat() Without Default Depth Argument
// nested array
let array4 = [1, [2, 3, 4], 5];

// without passing any depth argument in flat()
let flattenArray3 = array4.flat();

console.log(flattenArray3);

// Example 3: flat() to Remove Holes in Array
// array with empty slots
let array_with_holes = [1, , 3];

// removes holes in the array
let flattedArray = array_with_holes.flat();

console.log(flattedArray); // [ 1, 3 ]