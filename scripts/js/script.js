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
    return "Generation of password cancelled!";
  }

  if (passwordLength.length == 0) {
    console.log("Length not set");
    window.alert("You must include a number!");
  }

  // var passwordLetters = [];
  // var passwordLetters = new Array();
  // the string is also an array of characters!
  let isNotPureDigits  = false;
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
      isNotPureDigits = true;
      x = passwordLength.length;
      window.alert("Only use digits! Try again.")
    }
  };
  // DEPRECATED alert("abc".substr(1,2)); // returns "bc"
  // alert("abc".substring(1,2)); // returns "b"


  if (true) {
    console.log(typeof passwordLength);
    window.alert("valid");
    // (passwordLength < 8 || passwordLength > 128)
  }
  else 
  {
    window.alert("invalid choice!");
  }

  return "CRASH";

  if (window.prompt("Type in the length of the password [8-128 characters allowed]:",8))
    console.log(true);
  else {
    console.log(false);
    return "EXIT";
  } 
  
  isIncludeLowercase = window.confirm("Include lowercase letters?");
  isIncludeUppercase = window.confirm("Include uppercase letters?");
  isIncludeNumeric = window.confirm("Include numeric digits?");
  isIncludeSpecial = window.confirm("Include special characters?");
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
