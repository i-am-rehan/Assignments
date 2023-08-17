let color = 'blue';
console.log("Is color equal to 'blue'? I predict True.");
console.log(color === 'blue');

let fruit5 = 'apple';
console.log("Is fruit5 not equal to 'banana'? I predict True.");
console.log(fruit5 !== 'banana');

let chosenFruit = 'orange';
console.log("Is chosenFruit equal to 'Orange'? I predict True.");
console.log(chosenFruit.toLowerCase() === 'orange');

let userAge = 25;
console.log("Is userAge greater than 18? I predict True.");
console.log(userAge > 18);

let personAge = 15;
console.log("Is personAge less than 21? I predict True.");
console.log(personAge < 21);

let currentTemp = 28;
console.log("Is currentTemp greater than or equal to 25? I predict True.");
console.log(currentTemp >= 25);

let roomTemp = 18;
console.log("Is roomTemp less than or equal to 20? I predict True.");
console.log(roomTemp <= 20);

let isSunnyDay = true;
let isWarmDay = true;
console.log("Is it sunny and warm? I predict True.");
console.log(isSunnyDay && isWarmDay);

let isRainingDay = true;
let isColdDay = false;
console.log("Is it raining or cold? I predict True.");
console.log(isRainingDay || isColdDay);

let availableFruits = ['apple', 'banana', 'orange'];
let selectedChoice = 'banana';
console.log("Is selectedChoice in the availableFruits array? I predict True.");
console.log(availableFruits.indexOf(selectedChoice) !== -1);

let numberList = [1, 2, 3, 4, 5];
let desiredNumber = 7;
console.log("Is desiredNumber not in the numberList array? I predict True.");
console.log(numberList.indexOf(desiredNumber) === -1);
