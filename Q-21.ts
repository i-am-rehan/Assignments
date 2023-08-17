const numbers: number[] = [1, 2, 3, 4, 5];

// Intentional error: Accessing an out-of-bounds index
// Uncomment the next line to cause an error
const outOfBoundsNumber = numbers[10];

// Correcting the error
const validIndex = 2; // Change this index to a valid value (0, 1, 2, 3, or 4)
const correctNumber = numbers[validIndex];

console.log("Corrected Index Access:", correctNumber);
