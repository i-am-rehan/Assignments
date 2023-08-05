// Storing the person's name in a variable
const fullName: string = "Rehan Ahmad";

// Printing the person's name in lowercase
const nameInLowercase: string = fullName.toLowerCase();
console.log("Lowercase:", nameInLowercase); // Output: "rehan ahmad"

// Printing the person's name in uppercase
const nameInUppercase: string = fullName.toUpperCase();
console.log("Uppercase:", nameInUppercase); // Output: "REHAN AHMAD"

// Printing the person's name in titlecase
function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

const nameInTitlecase: string = toTitleCase(fullName);
console.log("Titlecase:", nameInTitlecase); // Output: "Rehan Ahmad"
