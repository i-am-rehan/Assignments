// Array indexOf()
let languages11 = ["Java", "JavaScript", "Python", "JavaScript"];

// get the index of the first occurrence of "JavaScript"
let index = languages11.indexOf("JavaScript");
console.log(index);

// Output: 1

// Example 1: Using indexOf() method
var priceList = [10, 8, 2, 31, 10, 1, 65];

// indexOf() returns the first occurance
var index1 = priceList.indexOf(31);
console.log(index1); // 3

var index2 = priceList.indexOf(10);
console.log(index2); // 0

// second argument specifies the search's start index
var index3 = priceList.indexOf(10, 1);
console.log(index3); // 4

// indexOf returns -1 if not found
var index4 = priceList.indexOf(69.5);
console.log(index4); // -1

// Example 2: Finding All the Occurrences of an Element
function findAllIndex(array: any[], element: any): number[] {
    const indices: number[] = [];
    let currentIndex = array.indexOf(element);
    while (currentIndex !== -1) {
        indices.push(currentIndex);
        currentIndex = array.indexOf(element, currentIndex + 1);
    }
    return indices;
}

const priceList3: number[] = [10, 8, 2, 31, 10, 1, 65, 10];

const occurrence1 = findAllIndex(priceList3, 10);
console.log(occurrence1); // [ 0, 4, 7 ]

const occurrence2 = findAllIndex(priceList3, 8);
console.log(occurrence2); // [ 1 ]

const occurrence3 = findAllIndex(priceList3, 9);
console.log(occurrence3); // []

// Example 3: Finding If Element exists else Adding the Element
function checkOrAdd(array: any[], element: any): void {
    if (array.indexOf(element) === -1) {
        array.push(element);
        console.log("Element not Found! Updated the array.");
    } else {
        console.log(element + " is already in the array.");
    }
}

const parts: string[] = ["Monitor", "Keyboard", "Mouse", "Speaker"];

checkOrAdd(parts, "CPU"); // Element not Found! Updated the array.
console.log(parts); // [ 'Monitor', 'Keyboard', 'Mouse', 'Speaker', 'CPU' ]

checkOrAdd(parts, "Mouse"); // Mouse is already in the array.
