let guest5:string[] = ["Omer", "Abubakar", "Usman", "Ali"];
// console.log(guest5);
guest5.splice(0, 0, "Rehan");
// console.log(guest5);

guest5.splice(2,0, "Danial");
console.log(guest5);

for(let i = 0; i < guest5.length; i++){
    console.log(`Hi ${guest5[i]}! You are invited.`);
}