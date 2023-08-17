let current_users = ['john', 'alice', 'bob', 'charlie', 'david'];
let new_users = ['Eve', 'charlie', 'frank', 'alice', 'Grace'];

for (let newUser of new_users) {
  let isTaken = current_users.some(username => username.toLowerCase() === newUser.toLowerCase());
  
  if (isTaken) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
  } else {
    console.log(`The username '${newUser}' is available.`);
  }
}
