interface Car {
    manufacturer: string;
    model: string;
    [key: string]: any;
  }
  
  function createCar(manufacturer: string, model: string, ...options: [string, any][]): Car {
    const car: Car = { manufacturer, model };
    options.forEach(([key, value]) => {
      car[key] = value;
    });
    return car;
  }
  
  const car1 = createCar("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
  const car2 = createCar("Ford", "Mustang", ["color", "red"], ["transmission", "manual"]);
  
  console.log(car1);
  console.log(car2);
  