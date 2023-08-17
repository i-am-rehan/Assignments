let userNames = ['admin', 'Alice', 'Bob', 'Charlie', 'David', 'Eve'];

if (userNames.length === 0) {
  console.log("We need to find some users!");
} else {
  for (let i = 0; i < userNames.length; i++) {
    if (userNames[i] === 'admin') {
      console.log(`Hello admin, would you like to see a status report?`);
    } else {
      console.log(`Hello ${userNames[i]}, thank you for logging in again.`);
    }
  }
}

// Remove all usernames
userNames = [];

if (userNames.length === 0) {
  console.log("We need to find some users!");
}
