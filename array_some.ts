// Array some()
// a test function: returns an even number
function isEven3(element:any) {
    return element % 2 === 0;
  }
  
  // defining an array
  let numbers26 = [1, 3, 2, 5, 4];
  
  // checks whether the numbers array contain at least one even number
  console.log(numbers26.some(isEven3));
  
  // Output: true

// Example 1: Using some() Method
// a test function: returns age that is less that 18
function checkMinor(age:any) {
    return age < 18;
  }
  
  const ageArray = [34, 23, 20, 26, 12];
  
  // checks whether ageArray contains any element that is less than 18
  let check7 = ageArray.some(checkMinor);
  
  console.log(check7);

//   Example 2: some() Method to Check Result of Students
// array of scores obtained by student 
let scoreObtained = [45, 50, 39, 78, 65, 20];

// a test function: returns score less than 40
function studentIsPassed(score:any) {
  return score < 40;
}

// checks if score of at least one student is less than 40  
if(scoreObtained.some(studentIsPassed) == true) {
  console.log("At least one of the students failed.");
}

else
  console.log("All students are passed.");