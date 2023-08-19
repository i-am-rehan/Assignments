// Array copyWithin()
let words = ["apple", "ball", "cat", "dog"];

// copies element from index 0 to index 3 
words.copyWithin(3, 0);

// modifies the original array 
console.log(words);

// Output: 
// [ ''apple'', ''ball'', ''cat'', ''apple'' ]

// Example 1: Using copyWithin() Method
let numbers9 = [1, 2, 3, 4, 5];

// copying element located at 4th index to 0th index
numbers9.copyWithin(0, 4);

// modifies the original array
console.log(numbers9); // [ 5, 6, 3, 4, 5 ]

let letters = ["a", "b", "c", "d"];

// copying element located at 1st index to 2nd index
letters.copyWithin(2, 1);

// modifies the original array 
console.log(letters); // [ 'a', 'b', 'b', 'c' ]

// Example 2: copyWithin() with Three Parameters
let laptops = ["dell", "hp", "acer", "asus"];

// copying elements from index 2 to 4(excluding 4) to index 0
laptops.copyWithin(0, 2, 4);

// modifies the original array
console.log(laptops); // [ 'acer', 'asus', 'acer', 'asus' ]

// Example 3: copyWithin() with Negative Parameter
let evenNumbers2= [2,4,6,8];

// passing negative index value -1 as target index 
evenNumbers.copyWithin(-1);

console.log(evenNumbers2);