// Assignment Code
var generateBtn = document.querySelector("#generate");
var letterArray = ("qwertyuiopasdfghjklzxcvbnm")
var letterArrayLower = letterArray.toLowerCase().split("");
var letterArrayUpper = letterArray.toUpperCase().split("");
var numArray = ("1234567890").split("");
var spclChrArray = ("~!@#$%^&*()_+`-=[]{};':,./<>?\\|").split("");

// User Input

// Generate Password

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
