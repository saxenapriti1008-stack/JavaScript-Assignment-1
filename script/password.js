//FUCNTION: isValidPassword

function isValidPassword(password, username){
  return (password.length >= 8 &&
          !password.includes('') &&
          !password.includes(username)) ? true : false;

}


console.log(isValidPassword("supersecret","user"));
