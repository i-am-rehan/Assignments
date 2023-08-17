function describeCity(city: string, country: string = "unknown"): void {
    console.log(`${city} is in ${country}.`);
  }
  
  // Call the function with default country
  describeCity("Karachi");
  
  // Call the function with a specific country
  describeCity("Paris", "France");
  
  // Call the function with a different city and default country
  describeCity("New York");
  