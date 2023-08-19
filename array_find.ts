// Array find()
let numbers8 = [1, 3, 4, 9, 8];

// function to check even number
function isEven1(element: any) {
  return element % 2 == 0;
}

// get the first even number
let evenNumber1 = numbers8.find(isEven1);
console.log(evenNumber1);

// Output: 4

// Example 1: Using find() method
function isEven2(element: any) {
    return element % 2 == 0;
  }
  
  let randomArray = [1, 45, 8, 98, 7];
  
  let firstEven1 = randomArray.find(isEven2);
  console.log(firstEven1); // 8
  
  // using arrow operator
  let firstOdd1 = randomArray.find((element) => element % 2 == 1);
  console.log(firstOdd1); // 1

// Example 2: find() with Object elements
const team1 = [
    { name: "Bill", age: 10 },
    { name: "Linus", age: 15 },
    { name: "Alan", age: 20 },
    { name: "Steve", age: 34 },
  ];
  
  function isAdult1(member: any) {
    return member.age >= 18;
  }
  
  console.log(team1.find(isAdult1)); // { name: 'Alan', age: 20 }
  
  // using arrow function and deconstructing
  let adultMember = team1.find(({ age }) => age >= 18);
  
  console.log(adultMember); // { name: 'Alan', age: 20 }
