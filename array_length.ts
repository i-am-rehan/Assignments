// Array length
let city = ["California", "Barcelona", "Paris", "Kathmandu"];

// find the length of the city array
let len = city.length;
console.log(len);

// Output: 4

// Example 1:Finding Number of Elements in an Array
var companyList = ["Apple", "Google", "Facebook", "Amazon"];
console.log(companyList.length); // Output: 4

var randomList = ["JavaScript", 44];
console.log(randomList.length); // Output: 2

var emptyArray = [];
console.log(emptyArray.length); // Output: 0

// Example 2:Using Array length in for loop
var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// languages.length can be used to find out 
// the number of times to loop over an array
for (let i = 0; i < languages.length; i++){
    console.log(languages[i]);
}

// Example 3:Changing length property of Array
var languages = ["JavaScript", "Python", "C++", "Java", "Lua"];

// truncate the Array to 3 elements
languages.length = 3

// Output: [ 'JavaScript', 'Python', 'C++' ]
console.log(languages)

// extend the Array to length 6
languages.length = 6

// Output: [ 'JavaScript', 'Python', 'C++', <3 empty items> ]
console.log(languages)