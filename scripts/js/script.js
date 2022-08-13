// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // requirements are that this function will always succeed
  // which means the user will not be allowed to leave this function
  // until they make the right choices to generate a password
  var passwordLengthChoice = 8;
  var includeLowercase = true;
  var includeUppercase = true;
  var includeNumeric = true;
  var includeSpecial = true;
  window.alert(passwordLengthChoice);
  window.prompt("Choose from 8 to 128 characters for the password:");
  includeLowercase = window.confirm("Include lowercase letters?");
  includeUppercase = window.confirm("Include uppercase letters?");
  includeNumeric = window.confirm("Include numeric digits?");
  includeSpecal = window.confirm("Include special characters?");
  window.alert("we are validating your choices");
  return "*&^&*^*GTGTG787878uhuhuhuh";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
