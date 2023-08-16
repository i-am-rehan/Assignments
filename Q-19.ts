// 1. Store Locations in an Array (Not in Alphabetical Order):


let locations: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];


// 2. Print Array in Original Order:

console.log("Original Order:");
console.log(locations.join(", "));


// 3. Print Array in Alphabetical Order (Without Modifying the Original List):

console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...locations].sort().join(", "));



// 4. Show Array Is Still in Original Order:

console.log("\nOriginal Order (confirming the list is unchanged):");
console.log(locations.join(", "));


// 5. Print Array in Reverse Alphabetical Order (Without Changing the Original Order):


console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...locations].sort((a, b) => b.localeCompare(a)).join(", "));


// 6. Show Array Is Still in Original Order:

console.log("\nOriginal Order (confirming the list is unchanged):");
console.log(locations.join(", "));



// 7. Reverse the Order of the List:

console.log("\nReversed Order:");
console.log(locations.reverse().join(", "));


// 8. Reverse the Order of the List Again (Back to Original Order):

console.log("\nReversed Order Again (back to original order):");
console.log(locations.reverse().join(", "));


// 9. Sort the Array in Alphabetical Order:

console.log("\nAlphabetical Order:");
console.log(locations.sort().join(", "));


// 10. Sort to Change the Array in Reverse Alphabetical Order:


console.log("\nReverse Alphabetical Order (modified order):");
console.log(locations.sort((a, b) => b.localeCompare(a)).join(", "));

