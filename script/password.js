//FUCNTION: isValidPassword

function isValidPassword(password, username){
  return (password.length >= 8 &&
          !password.includes(' ') &&
          !password.includes(username)) ? true : false;

}

// Use clear variable names that match the function parameters
let userName1 = "jane";
let userPassword1 = "supersecret";

let userName2 = "alex";
let userPassword2 = "alex12345";

let userName3 = "mike";
let userPassword3 = "my password";

let userName4 = "sara";
let userPassword4 = "short";

console.log(isValidPassword(userPassword1, userName1)); // true 
console.log(isValidPassword(userPassword2, userName2)); // false  (contains username)
console.log(isValidPassword(userPassword3, userName3)); // false  (contains space)
console.log(isValidPassword(userPassword4, userName4)); // false  (too short)

