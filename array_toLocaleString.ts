// Array.toLocaleString()
let array2 = ["Nepal", 1];

// returns string representation of array
let stringFromArray = array2.toLocaleString();

console.log(stringFromArray);

// Output:
// Nepal,1

// Example 1: Using toLocaleString() Method
let array3 = [1, "JavaScript", new Date()];

// returns string representation of array
let stringFromArray1 = array3.toLocaleString();

console.log(stringFromArray1);

// Example 2: toLocaleString() Method with Parameters
// Example: Formatting Array of Numbers as Currency Strings
function formatCurrencyArray(numbers: number[], locale: string, currency: string): string[] {
    const formattedStrings: string[] = [];
  
    for (const num of numbers) {
      const formatted = num.toLocaleString(locale, {
        style: "currency",
        currency,
      });
      formattedStrings.push(formatted);
    }
  
    return formattedStrings;
  }
  
  const prices6: number[] = [689, 100, 4577, 56];
  const formattedPrices: string[] = formatCurrencyArray(prices6, "en-US", "USD");
  
  console.log(formattedPrices);
  
 