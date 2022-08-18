// Assignment Code
var generateBtn = document.querySelector("#generate");

// generatePassword called by writePassword
function generatePassword() {

  const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const digitCharacters = "0123456789";
  // these are the 33 special characters used: <space>!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  let specialCharacters = ' !"';
  specialCharacters = specialCharacters + `#$%&'()*+,-./:;<=>?@[`;
  specialCharacters = specialCharacters + '\u005C' + "]^_`{|}~";

  const charactersInAlphabet = 26;
  const charactersInDigits = 10;
  const charactersInSpecialCharacters = 33;

  // default selection values
  var passwordLength = "8";
  var isIncludeLowercase = true;
  var isIncludeUppercase = true;
  var isIncludeNumeric = true;
  var isIncludeSpecial = true;
  var returnPassword = "";

  // Input Validation
  passwordLength = window.prompt("Password Length [from 8-128]:",8);
  
  // user cancelled
  if (passwordLength === null) {
    // console.log("Cancel was pressed");
    return "Generation of password cancelled.";
  }

  // user typed nothing
  if (passwordLength.length == 0) {
    window.alert("You must include a number!");
    return "Zero length password not allowed."
  }
  
  // user used non digits for password length
  // the string is also an array of characters
  let passwordLengthIsPureDigits  = true;
  let x = 0;
  while (x < passwordLength.length) {
    if (digitCharacters.includes(passwordLength[x])) {
      x++;
    } else {
      passwordLengthIsPureDigits = false;
      window.alert("Only use digits for passsword length! Try again.")
      return "Non digits were used in the password length [" + passwordLength + "]."
    }
  };

  // user typed in an out of range number
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

  // Input Validation
  isIncludeLowercase = window.confirm("Include lowercase letters?");
  isIncludeUppercase = window.confirm("Include uppercase letters?");
  isIncludeNumeric = window.confirm("Include numeric digits?");
  isIncludeSpecial = window.confirm("Include special characters?");

  if (isIncludeLowercase || isIncludeUppercase || isIncludeNumeric || isIncludeSpecial) {
    // At least one character type was selected so continue
  } else {
    window.alert("You must choose at least one of lowercase, uppercase, numeric, or special characters! Try again.")
    return "At least on character type was not chosen."
  }

  // All inputs are valid

  // Password Generator Algorithm
  // for each password letter placeholder: 
  //    select the next type of character and step to the next
  //    repeat until all placeholders are filled
  // the user can use any combination of character types

  var randomSelection = 0;
  let y = 0;
  let passwordLetterCount = Number(passwordLength) - 1;

  while (y <= passwordLetterCount) {

    if (isIncludeLowercase && y <= passwordLetterCount) {
      randomSelection = Math.floor(Math.random() * charactersInAlphabet);
      returnPassword = returnPassword + lowercaseAlphabet[randomSelection];
      y++;
    }
    if (isIncludeUppercase  && y <= passwordLetterCount) {
      randomSelection = Math.floor(Math.random() * charactersInAlphabet);
      returnPassword = returnPassword + lowercaseAlphabet[randomSelection].toUpperCase();
      y++;
    }
    if (isIncludeNumeric  && y <= passwordLetterCount) {
      randomSelection = Math.floor(Math.random() * charactersInDigits);
      returnPassword = returnPassword + digitCharacters[randomSelection];
      y++;
    }
    if (isIncludeSpecial  && y <= passwordLetterCount) {
      randomSelection = Math.floor(Math.random() * charactersInSpecialCharacters);
      returnPassword = returnPassword + specialCharacters[randomSelection];
      y++;
    }

    if ((!isIncludeLowercase) && (!isIncludeUppercase) && (!isIncludeNumeric) && (!isIncludeSpecial)) {
      window.alert("BUG: infinite loop detected!");
      return "BUG: Error with final generate while loop";
    }

  };

  return returnPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
