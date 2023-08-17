let favorite_fruits = ['apple', 'banana', 'orange'];
let fruitToCheck = 'banana';

if (favorite_fruits.indexOf(fruitToCheck) !== -1) {
  console.log(`You really like ${fruitToCheck}s!`);
} else {
  console.log(`You don't have ${fruitToCheck} in your favorite fruits.`);
}

fruitToCheck = 'grapes';

if (favorite_fruits.indexOf(fruitToCheck) !== -1) {
  console.log(`You really like ${fruitToCheck}s!`);
} else {
  console.log(`You don't have ${fruitToCheck} in your favorite fruits.`);
}

fruitToCheck = 'watermelon';

if (favorite_fruits.indexOf(fruitToCheck) !== -1) {
  console.log(`You really like ${fruitToCheck}s!`);
} else {
  console.log(`You don't have ${fruitToCheck} in your favorite fruits.`);
}
