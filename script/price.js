// 1. Ask the user to enter a price tag 

let userInput = prompt("Enter a price tag (for example: $49.99):");

console.log("User input:", userInput);

// 2. Remove the dollar sign from the string

let priceWithoutDollar = userInput.replace("$" , "");

console.log("Price without dollar sign:", priceWithoutDollar);

// 3. Convert the string to a number

let price = parseFloat(priceWithoutDollar);

console.log("Converted price (number):", price);

// 4. Calculate the new price with 10% discount

let discount = price * 0.10;

console.log("Discount (10%):", discount);

  // 5. Print out the new discounted price

let newPrice = price - discount;

console.log("New discount price:", newPrice);

console.log(`Your new price is: $${newPrice.toFixed(2)}`);







