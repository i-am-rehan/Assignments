// Array reduceRight()
let numbers18 = [1, 2, 3, 4];

// function that adds last two values of the numbers array
function sum_reducer(accumulator:any, currentValue:any) {
  return accumulator + currentValue;
}

// returns a single value after reducing the numbers array
let sum = numbers18.reduceRight(sum_reducer);

console.log(sum);

// Output: 10

// Example 1: Using reduceRight() Method
let numbers19 = [1, 2, 3, 4, 5, 6];

// function that adds last two values of the numbers array
function sum_reducer1(accumulator:any, currentValue:any) {
  return accumulator + currentValue;
}

// returns a single value after reducing the numbers array
let sum1 = numbers19.reduceRight(sum_reducer1);

console.log(sum1);

// Example 2: Passing initialValue in reduceRight() Method
let expense = [50, 300, 20, 100, 1800];

// function that returns sum of two values
function add(accumulator:any, currentValue:any) {
  return accumulator + currentValue;
}

// adds 0 with last value of expense (i.e 1800)
// and executes the callback add()
let result = expense.reduceRight(add, 0);

console.log(result);