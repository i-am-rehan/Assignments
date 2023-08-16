let guest7:string[] = ["Omer", "Abubakar", "Usman", "Ali", "Rehan", "Danial", "Moin", "Tabish"];

for (let i = guest7.length - 1; i >= 2; i--) {
    let removedGuest = guest7.pop();
    console.log(`Sorry ${removedGuest}! We can't invite you to dinner.`);
}

console.log("Final Guest List:");
for (let name of guest7) {
    console.log(`Aoa ${name}! You are invited to the dinner.`);
}

let guest8: string[] = ["Omer", "Abubakar", "Usman", "Ali", "Rehan", "Danial"];

// Remove the last two names
guest8.pop();
guest8.pop();

// Print the empty list
console.log("Final Guest List:");
for (let name of guest8) {
    console.log(`Aoa ${name}! You are invited to the dinner.`);
}

console.log("The list is now empty:", guest8.length === 0);

console.log(guest8);

console.log(`Number of people invited to dinner: ${guest8.length}`);
