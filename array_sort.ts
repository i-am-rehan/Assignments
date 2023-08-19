// Array sort()
let city1 = ["California", "Barcelona", "Paris", "Kathmandu"];

// sort the city array in ascending order
let sortedArray = city1.sort();
console.log(sortedArray);

// Output: [ 'Barcelona', 'California', 'Kathmandu', 'Paris' ]

// Example 1:Sorting the Elements of an Array
// sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

// returns the sorted array
console.log(names.sort());

// modifies the array in place
console.log(names);

var priceList = [1000, 50, 2, 7, 14];
priceList.sort();

// Number is converted to string and sorted
console.log(priceList)

// Example 2:Sorting using Custom Function

// custom sorting an array of strings
// Sorting using Custom Function

// custom sorting an array of strings
var names = ["Adam", "Jeffrey", "Fabiano", "Danil", "Ben"];

function len_compare(a: string, b: string): number {
    return a.length - b.length;
}

// sort according to string length
names.sort(len_compare);

console.log(names);

// Example 3:Sorting Numbers Numerically
// numeric sorting

// define array
var priceList = [1000, 50, 2, 7, 14];

// sort() using function expression
// ascending order
priceList.sort(function (a, b) {
  return a - b;
});

// Output: Ascending - 2,7,14,50,1000
console.log("Ascending - " + priceList);

// sort() using arrow function expression
// descending order
priceList.sort((a, b) => b - a);

// Output: Descending - 1000,50,14,7,2
console.log("Descending - " + priceList);

