type Country = {
    name: string;
    capital: string;
    population: number;
    language: string;
  };
  
  const countries: Country[] = [
    {
      name: "United States",
      capital: "Washington, D.C.",
      population: 331002651,
      language: "English",
    },
    {
      name: "India",
      capital: "New Delhi",
      population: 1380004385,
      language: "Hindi",
    },
    {
      name: "China",
      capital: "Beijing",
      population: 1439323776,
      language: "Mandarin",
    },
    {
      name: "Brazil",
      capital: "Brasília",
      population: 212559417,
      language: "Portuguese",
    },
  ];
  
  for (let country of countries) {
    console.log(`Country: ${country.name}`);
    console.log(`Capital: ${country.capital}`);
    console.log(`Population: ${country.population}`);
    console.log(`Language: ${country.language}`);
    console.log("==============================");
  }
  