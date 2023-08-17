function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");
    if (items.length === 0) {
      console.log("You ordered an empty sandwich. Please select some items.");
    } else {
      console.log("Bread + " + items.join(" + ") + " + Bread");
    }
  }
  
  orderSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
  orderSandwich("Chicken", "Cheese");
  orderSandwich("Tuna", "Onion", "Pickles", "Mustard");
  orderSandwich();
  