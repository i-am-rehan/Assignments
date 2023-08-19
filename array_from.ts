// Array.from()
// creating a new array from string
let newArray2 = Array.from("abc");

console.log(newArray2);

// Output:
// [ 'a', 'b', 'c' ]

// Example 1: from() Method with Array-like Objects
// creating an array from a string 
let array1= Array.from("JavaScript");

console.log(array1); 

// Example 2: from() Method with Mapping Function
// function that returns a new array
function createArray(arraylike:any, mapFunc:any) {
    return Array.from(arraylike, mapFunc);
  }
  
  // using arrow function for mapFunc
  let result2 = createArray([2, 4, 6], (element:any) => element + 2);
  
  console.log(result2);

//   Example 2: from() Method with a Set
// defining a Set
let set = new Set(["JavaScript", "Python", "Go", "Python"]);

// creating an array from the given  set
let result3 = Array.from(set);

console.log(result3);