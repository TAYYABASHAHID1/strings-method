var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");


var fullName = firstName + " " + lastName;


alert("Hello, " + fullName + "! Welcome.");

2//
    var favoriteModel = prompt("What is your favorite mobile phone model?");

   
    var lengthOfInput = favoriteModel.length;

 
    document.write("<h2>The length of your favorite mobile phone model is: " + lengthOfInput + " characters.</h2>");
3//
 
    var word = "Pakistani";

   
    var indexOfN = word.indexOf('n');

    document.write("<h2>The index of 'n' in the word 'Pakistani' is: " + indexOfN + "</h2>");
4//
  
    var phrase = "Hello World";

    var lastIndex = phrase.lastIndexOf('l');

   
    document.write("<h2>The last index of 'l' in the phrase 'Hello World' is: " + lastIndex + "</h2>");
5//
  
    var word = "Pakistani";

    
    var charAtIndex3 = word.charAt(3);

  
    document.write("<h2>The character at the 3rd index in 'Pakistani' is: " + charAtIndex3 + "</h2>");
  6//
  
var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");


var fullName = "".concat(firstName, " ", lastName);


alert("Hello, " + fullName + "! Nice to meet you.");
7//

    
    var originalWord = "Hyderabad";

    
    var modifiedWord = originalWord.replace("Hyder", "Islam");

    document.write("<h2>Modified word: " + modifiedWord + "</h2>");
 8//

  var message = "Ali and Sami are best friends. They play cricket and football together.";

 
  var modifiedMessage = message.replace(/and/g, "&");

  document.write("<h2>Modified message: " + modifiedMessage + "</h2>");
9//
 
 var stringNumber = "472";

 var convertedNumber = Number(stringNumber);

 
 document.write("<h2>String Value: " + stringNumber + ", Type: " + typeof stringNumber + "</h2>");
 document.write("<h2>Number Value: " + convertedNumber + ", Type: " + typeof convertedNumber + "</h2>");

10//

var userInput = prompt("Enter your text:");


var capitalLetters = userInput.toUpperCase();


document.write("<h2>Input in Capital Letters: " + capitalLetters + "</h2>");
