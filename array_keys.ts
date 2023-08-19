// Array keys()
let alphabets5 = ["A", "B", "C"];

// returns an Array Iterator object that contains the keys
let iterator3 = alphabets5.keys();

// looping through the Iterator object
for (let key of iterator3) {
  console.log(key);
}

// Output:
// 0
// 1
// 2

// Example 1: Using keys() Method
let languages29 = ["JavaScript", "Java", "C++", "Python"];

// returns an Array Iterator Object that contains keys 
let iterator4 = languages29.keys();

// looping through the iterator object
for (let key of iterator4) {
  console.log(key);
}

// Example 2: Using key() Method in Array with Holes
let vehicle = ["car", "bus", , "van", "truck"];

// returns an Array Iterator Object that contains keys
let iterator6 = vehicle.keys();

// looping through the iterator object
for (let key of iterator6) {
  console.log(key);
}