// Array filter()
let numbers23 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function to check even numbers
function checkEven(numbers23:any) {
  if (numbers23 % 2 == 0)
    return true;
  else
    return false;
}

// create a new array by filter even numbers from the numbers array
let evenNumbers1 = numbers23.filter(checkEven);
console.log(evenNumbers1);

// Output: [ 2, 4, 6, 8, 10 ]

// Example 1: Filtering out values from Array
const prices2 = [1800, 2000, null, 3000, 5000, "Thousand", 500, 8000]

function checkPrice(element: any) {
  return typeof element === 'number' && element > 2000;
}

let filteredPrices = prices2.filter(checkPrice);
console.log(filteredPrices); // [ 3000, 5000, 8000 ]

// using arrow function
let newPrices = prices2.filter((price) => (typeof price === 'number' && price > 2000));
console.log(newPrices); // [ 3000, 5000, 8000 ]

// Example 2: Searching in Array
const languages18 = ["JavaScript", "Python", "Ruby", "C", "C++", "Swift", "PHP", "Java"];

function searchFor(arr: string[], query: string): string[] {
    function condition(element: string): boolean {
        return element.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    }
    return arr.filter(condition);
}

let newArr = searchFor(languages18, "ja");
console.log(newArr); // [ 'JavaScript', 'Java' ]

// using arrow function
const searchArr = (arr: string[], query: string): string[] =>
    arr.filter((element: string) => element.toLowerCase().indexOf(query.toLowerCase()) !== -1);

let newLanguages = searchArr(languages18, "p");
console.log(newLanguages); // [ 'JavaScript', 'Python', 'PHP' ]

