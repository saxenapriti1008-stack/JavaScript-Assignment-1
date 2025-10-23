// EXERCISE 1: Guess the random number

function guessNumberGame() {
  const randomNumber = Math.floor(Math.random() * 10) + 1; // random number 1–10
  let guess = null;

  while (guess !== randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 10:"));

    if (guess > randomNumber) {
      alert("Too high! Try again.");

    } else if (guess < randomNumber) {
      alert("Too low! Try again.");

    } else {
      alert ("Correct! The number was " + randomNumber);
    }

    }
  }

  // EXERCISE 2: Create an array of random numbers

function generateRandomArray(length) {
  const randomArray = [];
  for (let i = 0; i < length; i++) {
    randomArray.push(Math.floor(Math.random() * 100) + 1); // numbers 1–100
  }
  return randomArray;
}

console.log("Random array:", generateRandomArray(5));


// EXERCISE 3: Calculate the sum of even numbers in the array

function sumEvenNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 ===0) {
      sum += array[i];
    }
  }
  return sum;
}

console.log("Sum of even numbers:", sumEvenNumbers([79, 64, 99, 23, 5]));