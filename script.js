//passwordgenerator

function generatePassword() {
    var length = document.getElementById('length').value;
    var upperCase = document.getElementById('uppercase').checked;
    var numbers = document.getElementById('numbers').checked;
    var symbols = document.getElementById('symbols').checked;
    var lowerCase = document.getElementById('lowercase').checked;
    let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!#$%&*+‑/"
    let retVal = "";
    for (var i = 0, n = charset.length-1; i < length; ++i) {

        var character = charset.charAt(Math.floor(Math.random() * n));


        // console.log("the index of the character we are getting is", Math.floor(Math.random() * n))
        // console.log(character, "is the character we are checking")
        
        if (numbers == false && isCharNumber(character)) {
            i = i-1;
            // console.log(character);
        }
        else if (upperCase == false && isUpperCase(character)) {
            i = i-1;
            // console.log(character);
        }
        else if (symbols == false && isSymbol(character) ) {
            // console.log("the character is", character)
            i = i-1;
        }
        else if (lowerCase == false && isLowerCase(character)) {
            i = i-1;
        }
        else {
            // console.log("character we are adding to", retVal, " is ", character)
            retVal += character;
        }
    } 

    document.getElementById("result").innerText = retVal

    return retVal;
}

function isCharNumber(ch) {
    var numberRegex = /^[0-9]+$/;

    if (ch.match(numberRegex)){
        return true
    }
     else {
      return false
    }
  }

function isUpperCase(ch) {
    var uppercaseLettersRegex = /^[A-Z]+$/;

    if (ch.match(uppercaseLettersRegex)){
        return true
    }
     else {
      return false
    }
 }

 function isSymbol(ch) {
     //check if symbol
     //if yes, return true 
     //else return false

     var alphanumericRegex = /^[0-9a-zA-Z]+$/;

     if (ch.match(alphanumericRegex)) {
        console.log("is not a symbol")
        return false;
     }
     else {
         console.log('is a symbol')
         return true;
     }

    }

 function isLowerCase(ch) {
    var lowercaseLettersRegex = /^[a-z]+$/;

    if (ch.match(lowercaseLettersRegex)){
        return true
    }
    else {
      return false
    }
    
    }

 


isUpperCase("B")
isSymbol("@")
isLowerCase("a")
isCharNumber("2")

