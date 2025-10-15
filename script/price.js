// 1. Ask the user to enter a price tag 

let userInput = prompt("Enter a price tag (for example: $49.99):");

// 2. Remove the dollar sign from the string

let priceWithoutDollar = userInput.replace("$" , "");

// 3. Convert the string to a number

let price = parseFloat(priceWithoutDollar);

// 4. Calculate the new price with 10% discount

let discount = price * 0.10;
let newPrice = price - discount;

// 5. Print out the new discounted price

console.log(`Your new price is: $${newPrice.toFixed(2)}`);
