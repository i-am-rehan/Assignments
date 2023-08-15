let guest3:string[] = ["Omer", "Abubakar", "Usman", "Ali"];

console.log(guest3.pop());
console.log(guest3.push("Rehan"));
console.log(guest3);

for (let i = 0; i < guest3.length; i++) {
    console.log(`Aoa ${guest3[i]}! You are invited to mehfil.`);
}

console.log("Second set of invitation messages")
for (let i = 0; i < guest3.length; i++) {
    console.log(`Hello again, ${guest3[i]}! We are looking forward to seeing you at the dinner.`);
}