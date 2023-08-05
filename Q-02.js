"use strict";
// Storing the person's name in a variable
const fullName = "Rehan Ahmad";
// Printing the person's name in lowercase
const nameInLowercase = fullName.toLowerCase();
console.log("Lowercase:", nameInLowercase); // Output: "rehan ahmad"
// Printing the person's name in uppercase
const nameInUppercase = fullName.toUpperCase();
console.log("Uppercase:", nameInUppercase); // Output: "REHAN AHMAD"
// Printing the person's name in titlecase
function toTitleCase(str) {
    return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}
const nameInTitlecase = toTitleCase(fullName);
console.log("Titlecase:", nameInTitlecase); // Output: "Rehan Ahmad"
