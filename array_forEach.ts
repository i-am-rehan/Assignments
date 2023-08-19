// Array forEach()
let numbers25 = [1, 3, 4, 9, 8];

// function to compute square of each number
function computeSquare(element:any) {
  console.log(element * element);
}

// compute square root of each element
numbers25.forEach(computeSquare);

/* Output:
1
9 
16
81
64
*/

// Example 1: Printing Contents of Array
function printElements(element:any, index:any) {
    console.log('Array Element ' + index + ': ' + element);
}

const prices4 = [1800, 2000, 3000, , 5000, 500, 8000];

// forEach does not execute for elements without values
// in this case, it skips the third element as it is empty
prices4.forEach(printElements);

// Example 2: Using thisArg
// Define an interface to describe the Counter instances
interface Counter {
    count: number;
    sum: number;
    product: number;
    execute: (array: number[]) => void;
}

// Using thisArg
function Counter(this: Counter) {
    this.count = 0;
    this.sum = 0;
    this.product = 1;
}

// Add the execute method to the Counter prototype
Counter.prototype.execute = function(this: Counter, array: number[]) {
    array.forEach((entry: number) => {
        this.sum += entry;
        ++this.count;
        this.product *= entry;
    });
}

// Type assertion to specify the type of the object created by Counter
const obj = new (Counter as any)();
obj.execute([4, 1, , 45, 8]);

console.log(obj.count); // 4
console.log(obj.sum); // 58
console.log(obj.product); // 1440





