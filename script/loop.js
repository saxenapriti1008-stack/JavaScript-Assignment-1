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

  