// Array findIndex()
// function that returns odd number
function isOdd(element: any) {
    return element % 2 !== 0;
  }
  
  // defining an array of integers
  let numbers6 = [2, 8, 1, 3, 4];
  
  // returns the index of the first odd number in the array
  let firstOdd = numbers6.findIndex(isOdd);
  
  console.log(firstOdd);
  
  // Output: 2

// Example 1: Using findIndex() method
// function that returns even number
function isEven(element: any) {
    return element % 2 == 0;
  }
  
  // defining an array of integers
  let numbers7 = [1, 45, 8, 98, 7];
  
  // returns the index of the first even number in the array
  let firstEven = numbers7.findIndex(isEven);
  
  console.log(firstEven); // 2

// Example 2: findIndex() with Arrow Function
// defining an array
let days = ["Sunday", "Wednesday", "Tuesday", "Friday"];

// returns the first index of 'Wednesday' in the array
let index5 = days.findIndex((day) => day === "Wednesday");

console.log(index5); // 1

// Example 3: findIndex() with Object Elements
// defining an object 
const team = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];
  
  // function that returns age greater than or equal to 18
  function isAdult(member: any) {
    return member.age >= 18;
  }
  
  // returns the index of the first element which is 
  // greater than or equal to 18  
  console.log(team.findIndex(isAdult)); // 2
