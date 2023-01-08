// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];





// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];


let passLength = "10";   // // This variable is storing the user input choice for the password length. 
let sCharacters ;        // This variable is storing the user input  choice as true or false for the special characters.  
let lCharacters ;        // This variable is storing the user input  choice as true or false for the lowerCase characters. 
let uCharacters ;        // This variable is storing the user input  choice as true or false for the upperCase  characters. 
let nCharacters ;        // This variable is storing the user input  choice as true or false for the numerical  characters. 

// Function to prompt user for password options
function getPasswordOptions() {
  const regex = /^(1[0-9]|[2-5][0-9]|6[0-4])$/; //This regular expression is matching all the numbers between 10 an 64 included 
        passLength = prompt("Please choose  between 10 and 64");
        while (passLength !== NaN && regex.test(passLength) !== true) {   
          if (passLength === null) {
            passLength = "10";
            break;
          }
          passLength = prompt("Please choose  between 10 and 64");
        }
      
        sCharacters = confirm("If you want to include special characters press OK if no press Cancel");
        uCharacters = confirm("If you want to include upperCase characters press 'OK' if no press 'Cancel'");
        nCharacters = confirm("If you want to include numerical characters press 'OK' if no press 'Cancel'");
        lCharacters = confirm("If you want to include lowerCase characters press 'OK' if no press 'Cancel'");
         
        
  // console.log(lCharacters, nCharacters, uCharacters, sCharacters ,passLength);   // Console log for debugging purpose 

};


// Function to generate password with user input
// This function is takeing 5 arguments and returns back an array. The first argument is `length` and  is a number based on user input.
//If user press cancel then it will have a default value of 10.
// The other four arguments are arrays.
// The `if` statements inside the function is checking if the user input choice for variables is true or false and based on that is creating the array with characters.
// The loop at the end is selecting random characters from the `charactersArray` and push them one by one in to a new array with random characters which is the result returned  by the function.  
 
function generatePassword(length, numericC, upperC, specialC, lowerC) {
   let charactersArray= [];   
  if (nCharacters){
    charactersArray=charactersArray.concat(numericC);
  }
  if (uCharacters){
    charactersArray=charactersArray.concat(upperC);
  }
  if (sCharacters){
    charactersArray=charactersArray.concat(specialC);
  } 
  if (lCharacters){
    charactersArray=charactersArray.concat(lowerC);
  }
  // console.log(charactersArray); // Console log for debugging purpose 
 
  let passCharacters=[];
  for (let i=0 ; i < length; i++){ 
    let character = charactersArray[Math.floor(Math.random() * length)];
    console.log("testing  " + character);
    passCharacters.push(character);
  }
  return passCharacters;
}

// console.log(generatePassword(20,numericCharacters,upperCasedCharacters,specialCharacters,lowerCasedCharacters));   // Console log for debugging purpose 


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword(passLength,numericCharacters,upperCasedCharacters,specialCharacters,lowerCasedCharacters);
  var passwordText = document.querySelector('#password');

  passwordText.value = password.join('');
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);