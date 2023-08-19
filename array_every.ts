// Array.every()
// function that checks whether
// the age is 18 or above
function checkAdult(age:any) {
    return age >= 18;
}

const ageArray1 = [34, 23, 20, 26, 12];

//checks if all the array elements
// pass the checkAdult() function
let check8 = ageArray1.every(checkAdult);

// Output: false

// Example 1: Check if Array Elements Are Even
// function that checks whether all
// the array elements are even or not
function checkEven4(num:any) {
    return num%2 === 0;
}

// create an array of numbers
const numbers27 = [2, 4, 6, 7, 8];

// use the every() method along with
// checkEven() on the numbers array
let check9 = numbers27.every(checkEven4); 

console.log(check9)

// Output: false

// Example 2: JavaScript every() With Arrow Function
let numbers28 = [ 1 , 2 , 3 , 4 , 5];

// use arrow function with every()
let result1 = numbers28.every(element => element < 6);
console.log(result1); 

// Output: true