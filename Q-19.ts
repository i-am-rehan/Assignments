let travelDestinations: string[] = ["Tokyo", "Paris", "New York", "Sydney", "Rome"];

console.log("Original Order:");
console.log(travelDestinations.join(", "));

console.log("\nAlphabetical Order (without modifying the original list):");
console.log([...travelDestinations].sort().join(", "));

console.log("\nOriginal Order (confirming the list is unchanged):");
console.log(travelDestinations.join(", "));

console.log("\nReverse Alphabetical Order (without modifying the original list):");
console.log([...travelDestinations].sort((a, b) => b.localeCompare(a)).join(", "));

console.log("\nOriginal Order (confirming the list is unchanged):");
console.log(travelDestinations.join(", "));

console.log("\nReversed Order:");
console.log(travelDestinations.reverse().join(", "));

console.log("\nReversed Order Again (back to original order):");
console.log(travelDestinations.reverse().join(", "));

console.log("\nAlphabetical Order:");
console.log(travelDestinations.sort().join(", "));

console.log("\nReverse Alphabetical Order (modified order):");
console.log(travelDestinations.sort((a, b) => b.localeCompare(a)).join(", "));
