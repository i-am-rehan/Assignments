// Array map()
let numbers24 = [2, 4, 6, 8, 10];

// function to return the square of a number
function square(number: number): number {
  return number * number;
}

// apply square() function to each item of the numbers24 list
let square_numbers = numbers24.map(square);
console.log(square_numbers);

// Output: [ 4, 16, 36, 64, 100 ]


// Example 1: Mapping array elements using custom function
const prices3 = [1800, 2000, 3000, 5000, 500, 8000];

let newPrices1 = prices3.map(Math.sqrt);
// [ 42.42640687119285, 44.721359549995796, 54.772255750516614,
//   70.71067811865476, 22.360679774997898, 89.44271909999159 ]
console.log(newPrices1);

// custom arrow function
const string = "JavaScript";
const stringArr = string.split(''); // array with individual string character

let asciiArr = stringArr.map(x => x.charCodeAt(0));

// map() does not change the original array
console.log(stringArr); // ['J', 'a', 'v', 'a','S', 'c', 'r', 'i', 'p', 't']

console.log(asciiArr); // [ 74,  97, 118,  97, 83,  99, 114, 105, 112, 116 ]

// Example 2: map() for object elements in array
const employees = [
    { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
    { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
    { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
    { name: "Alireza", salary: 4500, bonus: 1000, tax: 900 },
];

// calculate the net amount to be given to the employees
const calcAmt = (employee: any) => {
    const newObj: any = {}; // Declare newObj
    newObj.name = employee.name;
    newObj.netEarning = employee.salary + employee.bonus - employee.tax;
    return newObj;
};

let netEarnings = employees.map(calcAmt);
console.log(netEarnings);
