function makeShirt1(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You ordered a ${size}-sized shirt with the message: "${message}".`);
  }
  
  // Call the function with default values
  makeShirt1();
  
  // Call the function to create a medium shirt with default message
  makeShirt1("medium");
  
  // Call the function to create a small shirt with a custom message
  makeShirt1("small", "TypeScript is awesome!");
  