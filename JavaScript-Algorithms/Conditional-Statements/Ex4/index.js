let usernameLength = 6;
let passwordLength = 7;
let userAge = 15;
// Your conditional code here
let str = "";

if (usernameLength > 4 && passwordLength > 7 && userAge > 12) {
  str += "Account created successfully";
} else {
  if (usernameLength < 5) {
    str += "Username needs to be at least 5 characters. ";
  }
  if (passwordLength < 8) {
    str += "Password needs to be at least 8 characters.";
  }
  if (userAge < 13) {
    str += "User age need to be at least 13.";
  }
}

console.log(str);
