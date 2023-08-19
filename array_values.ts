// Array values()
let languages30 = ["JavaScript", "Java", "C++"];

// returns an Array Iterator object that contain values
let iteratorObject = languages30.values();

// looping through iterator
for (let value of iteratorObject) {
  console.log(value);
}

// Output:
// JavaScript
// Java
// C++

// Example 1: Using values() Method
let languages31 = ["A", "B", "C"];

// returns an iterator object that contain values of languages
let iteratorObject1 = languages31.values();

// looping through iterator
for (let value of iteratorObject1) {
  console.log(value);
}

// Example 2: Using values() in Arrays with Holes
let arrayWithHole = ["A", "B", , "C"];

// returns 'undefined' as a value for empty slot
let iteratorObject3 = arrayWithHole.values();

// looping through iterator
for (let value of iteratorObject3) {
  console.log(value);
}

// Example 3: More About Array Iterator Object
let fruits3 = ["Apple", "Banana", "Grapes"];

// returns values of each index in the fruits array
let iteratorObject4 = fruits3.values();

// accessing the value of index 0 in the array
console.log(iteratorObject4.next().value); // Apple

// changing the value of index 1
fruits3[1] = "Cherry";

// accessing the value of index 1 in the array
console.log(iteratorObject4.next().value); // Cherry 