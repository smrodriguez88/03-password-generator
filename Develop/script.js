// Assignment Code
const generateBtn = document.querySelector("#generate");
const letterStringLower = ("qwertyuiopasdfghjklzxcvbnm");
const letterStringUpper = letterStringLower.toUpperCase();
const numString = ("1234567890");
// NO slashes included in spclCharString due to \ being an escape char and / being used for path traversal 
const spclChrString = ("~!@#$%^&*()_+`-=[]{};':,.<>?|");

// User Input
// Prompter function to initiate prompts to user
function prompter(){
  // Start password length choice
  let passLengthChoice = parseInt(prompt("Choose password length between 8 - 128"));
  // Check if passLengthChoice is valid, while not valid continue asking for valid input
  while (passLengthChoice < 8 || passLengthChoice > 128){
    passLengthChoice = parseInt(prompt("Invalid password length chosen, please choose password length between 8 - 128"));
  }
  
  // Start password char choice
  let lowerCaseChoice = confirm("Would you like to use Lower Case characters?");
  let upperCaseChoice = confirm("Would you like to use Upper Case characters?");
  let numericChoice = confirm("Would you like to user Numeric characters?");
  let specialCharChoice = confirm("Would you like you like to use Special characters?");
  // Check if at least 1 Char selection has been made, if not continue asking for valid input
  while ((!lowerCaseChoice) && (!upperCaseChoice) && (!numericChoice) && (!specialCharChoice)){
    alert("No password character selection made, please choose at least 1 character type to include in your password")
    lowerCaseChoice = confirm("Would you like to use Lower Case characters?");
    upperCaseChoice = confirm("Would you like to use Upper Case characters?");
    numericChoice = confirm("Would you like to user Numeric characters?");
    specialCharChoice = confirm("Would you like you like to use Special characters?");
  }
  result = {"passLen" : passLengthChoice,
            "lcc" : lowerCaseChoice,
            "ucc" : upperCaseChoice,
            "nc" : numericChoice,
            "scc" : specialCharChoice,
  }
  return result
}

// Generate Password
function generatePassword(){
  choices = prompter()
  // Define charList to be empty each time the function is called
  var charList = "";
  // If lowerCaseChoice is true charList is now charList + letterStringLower
  if (choices["lcc"]){
    charList = charList + letterStringLower;
  };
  // If upperCaseChoice is true charList is now charList + letterStringUpper
  if (choices["ucc"]){
    charList = charList + letterStringUpper;
  };
  // If numericChoice is true charList is now charList + numString
  if (choices["nc"]){
    charList = charList + numString;
  };
  // If specialCharChoice is true charList is now charList + spclChrString
  if (choices["scc"]){
    charList = charList + spclChrString;
  };
  // Reset finalPassword to be empty each time to function is called
  var finalPassword = "";
  // For the password length chosen by the user iterate through the full character string
  // and select a random character from the string "Array"
  for (var i = 0; i < choices["passLen"]; i++){
    charSelect = (Math.floor(Math.random() * charList.length));
    finalPassword = finalPassword + charList[charSelect];
  };
return finalPassword
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
