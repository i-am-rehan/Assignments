let ageCategory = 25;

if (ageCategory < 2) {
  console.log("The person is a baby.");
} else if (ageCategory >= 2 && ageCategory < 4) {
  console.log("The person is a toddler.");
} else if (ageCategory >= 4 && ageCategory < 13) {
  console.log("The person is a kid.");
} else if (ageCategory >= 13 && ageCategory < 20) {
  console.log("The person is a teenager.");
} else if (ageCategory >= 20 && ageCategory < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}
