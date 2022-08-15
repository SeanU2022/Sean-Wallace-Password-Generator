// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(){
  // requirements are that this function will always succeed
  // which means the user will not be allowed to leave this function
  // until they make the right choices to generate a password
  var passwordLength = "8";
  var isIncludeLowercase = true;
  var isIncludeUppercase = true;
  var isIncludeNumeric = true;
  var isIncludeSpecial = true;
  // window.alert(passwordLengthChoice);

  passwordLength = window.prompt("Password Length [from 8-128]:",8);
  if (passwordLength === null) {
    console.log("Cancel was pressed");
    return "Generation of password cancelled.";
  }

  if (passwordLength.length == 0) {
    console.log("Length not set");
    window.alert("You must include a number!");
    return "Zero length password not allowed."
  }

  // var passwordLetters = [];
  // var passwordLetters = new Array();
  // the string is also an array of characters!
  let passwordLengthIsPureDigits  = true;
  let x = 0;
  while (x < passwordLength.length) {
    console.log("Letters contained are: " + passwordLength[x]);
    if (passwordLength[x] === "0" || 
        passwordLength[x] === "1" || 
        passwordLength[x] === "2" || 
        passwordLength[x] === "3" || 
        passwordLength[x] === "4" || 
        passwordLength[x] === "5" || 
        passwordLength[x] === "6" || 
        passwordLength[x] === "7" || 
        passwordLength[x] === "8" || 
        passwordLength[x] === "9" )
        {
      x++;
    } else {
      passwordLengthIsPureDigits = false;
      window.alert("Only use digits for passsword length! Try again.")
      return "Non digits were used in the password length [" + passwordLength + "]."
    }
  };
  // DEPRECATED alert("abc".substr(1,2)); // returns "bc"
  // alert("abc".substring(1,2)); // returns "b"


  if (passwordLengthIsPureDigits) {
    if (passwordLength < 8 || passwordLength > 128) {
      window.alert("Enter a number from 8 to 128! Try again.");
      return passwordLength + " is outside the 8-128 range."
    }
  }
  else 
  {
    window.alert("BUG: passwordLengthIsPureDigits should be true not false");
    return "BUG detected!"
  }

  isIncludeLowercase = window.confirm("Include lowercase letters?");
  isIncludeUppercase = window.confirm("Include uppercase letters?");
  isIncludeNumeric = window.confirm("Include numeric digits?");
  isIncludeSpecial = window.confirm("Include special characters?");
  window.alert("we are validating your choices");

  console.log("Lowercase: " + isIncludeLowercase);
  console.log("Uppercase: " + isIncludeUppercase);
  console.log("Numeric: " + isIncludeNumeric);
  console.log("Special: " + isIncludeSpecial);
  
  let numberOfCharacterTypes = 0;
  if (isIncludeLowercase || isIncludeUppercase || isIncludeNumeric || isIncludeSpecial) {
    // At least one character type was selected so continue
    if (isIncludeLowercase) {numberOfCharacterTypes++};
    if (isIncludeUppercase) {numberOfCharacterTypes++};
    if (isIncludeNumeric) {numberOfCharacterTypes++};
    if (isIncludeSpecial) {numberOfCharacterTypes++};
    window.alert(numberOfCharacterTypes);
    

  } else {
    window.alert("You must choose at least one of lowercase, uppercase, numeric, or special characters! Try again.")
    return "At least on character type was not chosen."
  }


  if (isIncludeLowercase) {

  }


  return "CRASH";

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
