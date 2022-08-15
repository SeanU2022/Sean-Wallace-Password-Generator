// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // requirements are that this function will always succeed
  // which means the user will not be allowed to leave this function
  // until they make the right choices to generate a password

  const lowercaseAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const digitCharacters = "0123456789";
  // !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~
  let specialCharacters = ' !"';
  specialCharacters = specialCharacters + `#$%&'()*+,-./:;<=>?@[`;
  specialCharacters = specialCharacters + '\u005C' + "]^_`{|}~";
  // default selection values
  var passwordLength = "8";
  var isIncludeLowercase = true;
  var isIncludeUppercase = true;
  var isIncludeNumeric = true;
  var isIncludeSpecial = true;
  var returnPassword = "";


  // Input Validation
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
    // console.log("Letters contained are: " + passwordLength[x]);
    if (digitCharacters.includes(passwordLength[x])) {
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

  if (isIncludeLowercase || isIncludeUppercase || isIncludeNumeric || isIncludeSpecial) {
    // At least one character type was selected so continue
  } else {
    window.alert("You must choose at least one of lowercase, uppercase, numeric, or special characters! Try again.")
    return "At least on character type was not chosen."
  }

  // Password Generator Algorithm
  var randomSelection = 0;
  let y = 0;
  let passwordLetterCount = Number(passwordLength) - 1;

  // console.log("XXXX86 password length, " + passwordLength);
  // console.log("XXXX87 password letter loop, " + passwordLetterCount);

  while (y <= passwordLetterCount) {
    // console.log("y count: " + y);
    if (isIncludeLowercase && y <= passwordLetterCount) {
      randomSelection = Math.floor(Math.random() * 26);
      returnPassword = returnPassword + lowercaseAlphabet[randomSelection];
      y++;
    }
    if (isIncludeUppercase  && y <= passwordLetterCount) {
      randomSelection = Math.floor(Math.random() * 26);
      returnPassword = returnPassword + lowercaseAlphabet[randomSelection].toUpperCase();
      y++;
    }
    if (isIncludeNumeric  && y <= passwordLetterCount) {
      randomSelection = Math.floor(Math.random() * 10);
      returnPassword = returnPassword + digitCharacters[randomSelection];
      y++;
    }
    if (isIncludeSpecial  && y <= passwordLetterCount) {
      randomSelection = Math.floor(Math.random() * 32);
      returnPassword = returnPassword + specialCharacters[randomSelection];
      y++;
    }
    // console.log( "password => " + returnPassword);
    // console.log(" Password Length is: " + returnPassword.length);

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
