// Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays of characters (special, numeric, lowercase, and uppercase)
var specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCasedCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var totalCharacters = [];


// vairables for usage of different characters
var confirmUppercase;
var confirmLowercase;
var confirmNumbers;
var confirmSpecial;
var characterCount;


function generatePassword() {
  confirmCharacters();
  confirmCount();
  createFinalArray();
  var password = "";
  for (var i = 0; i < characterCount; i++) {
    var character = totalCharacters[Math.floor(Math.random() * totalCharacters.length)];
    password += character; 
    // Math.floor rounds the value of Math.Random*X down
    // Math.random() generates a random decimal between 0 and 1, which you multiply by the number of characters you're sorting throuh and round down so you never exceed the number of characters. 
  };
  totalCharacters = []
  return password;
};
function confirmCharacters () {
  confirmUppercase = confirm("Do you want uppercase characters? Select OK if yes, Cancel if not.");
  confirmLowercase = confirm("Do you want lowercase characters? Select OK if yes, Cancel if not.");
  confirmNumbers = confirm("Do you want to use number? Select OK if yes, Cancel if not.");
  confirmSpecial = confirm("Do you want to use special charcters (ex. ?, !, /)? Select OK if yes, Cancel if not.");
  if (!confirmLowercase && !confirmUppercase && !confirmSpecial && !confirmNumbers) {
    alert("You have to pick at least one Uppercase, Lowercase, Special, or Numerical Characters.")
    confirmCharacters();
    };
};
function confirmCount () {
  characterCount = prompt("How many characters do you want in your password? Has to be between 8 & 128");
  if (characterCount < 8 || characterCount > 128) { 
    alert("You have to choose a number between 8 & 128.");
    confirmCount();
    };
};   
function createFinalArray() {

  
  if (confirmUppercase) {
    totalCharacters.push(upperCasedCharacters)
  };
  if (confirmLowercase) {
    totalCharacters.push(lowerCasedCharacters)
  };
  if (confirmNumbers) {
    totalCharacters.push(numericCharacters)
  };
  if (confirmSpecial) {
    totalCharacters.push(specialCharacters)
  };
  totalCharacters = totalCharacters.flat();
};
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);