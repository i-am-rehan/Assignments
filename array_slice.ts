// Array slice()
let numbers5 = [2, 3, 5, 7, 11, 13, 17];

// create another array by slicing numbers from index 3 to 5
let newArray = numbers5.slice(3, 6);
console.log(newArray);

// Output: [ 7, 11, 13 ]

// Example 1: JavaScript slice() method
let languages12 = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array (from start to end)
let new_arr3 = languages12.slice();
console.log(new_arr3); // [ 'JavaScript', 'Python', 'C', 'C++', 'Java' ]

// slicing from the third element
let new_arr4 = languages12.slice(2);
console.log(new_arr4); // [ 'C', 'C++', 'Java' ]

// slicing from the second element to fourth element
let new_arr5 = languages12.slice(1, 4);
console.log(new_arr5); // [ 'Python', 'C', 'C++' ]

// Example 2: JavaScript slice() With Negative index
const languages13 = ["JavaScript", "Python", "C", "C++", "Java"];

// slicing the array from start to second-to-last
let new_arr6 = languages13.slice(0, -1);
console.log(new_arr6); // [ 'JavaScript', 'Python', 'C', 'C++' ]

// slicing the array from third-to-last
let new_arr7 = languages13.slice(-3);
console.log(new_arr7); // [ 'C', 'C++', 'Java' ]

// Example 3: JavaScript slice() with Objects as Array Elements
let human = {
    name: "David",
    age: 23,
};

let arr: (string | typeof human | string)[] = [human, "Nepal", "Manager"];
let new_arr8 = arr.slice();

// original object
console.log(arr[0]); // { name: 'David', age: 23 }

// making changes to the object in the new array
(new_arr8[0] as typeof human).name = "Levy";

// changes are reflected
console.log(arr[0]); // { name: 'Levy', age: 23 }
