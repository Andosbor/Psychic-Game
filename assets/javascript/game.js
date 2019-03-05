/*2 main problems: 
1. how to add a loss when guesses reach 0
2. how to display each key that is pressed until a reset
*/



//making an array filled with every letter in the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var guesses = 10

var w = 0;

var l = 0;

var g;

//== vs ===
/*if ("1" === "1") {
    console.log("equal")
} else {
    console.log("not equal")
}*/


//determines what key the computer chooses
//maybe put in a function when game needs to be reset
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log("COMPUTERGUESS: " + computerGuess);

//function that says when a key is lifted up, enter that letter into the function
document.onkeyup = function(event){


//determines which key is being pressed
    var userGuess = event.key;
    console.log("COMPUTERGUESS: " + computerGuess);
    console.log("USERGUESS: " + userGuess);

//Shows what guesses have been made
document.getElementById("shownGuess").innerHTML += userGuess + ", ";

    
//If wrong guess, lose one try. (need to figure out how to reset after 0 lives)

if (userGuess !== computerGuess){
    guesses--;
    document.getElementById("guesses").innerHTML = guesses;
    console.log("wrong");
    
} 
    
//userGuess += the string(for displaying keys pressed)
 //if correct guess, add one to win and reset game. (need to figure out how to reset Your Guesses so far)
    if (userGuess === computerGuess){
        w++;
        document.getElementById("wins").innerHTML = w;
        console.log("correct");
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        document.getElementById("guesses").innerHTML = 10;
        guesses = 10;
        document.getElementById("shownGuess").innerHTML = " ";
        userGuess = 0;
    }
    

//increase loss number (reset Your Guesses so far)
    if (guesses === 0){
        document.getElementById("losses").innerHTML++;
        console.log("no more guesses");
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        document.getElementById("guesses").innerHTML = 10;
        guesses = 10;
        document.getElementById("shownGuess").innerHTML = " ";
        userGuess = 0;
    }

        

    }


//lets the user have 10 guesses

//shows the user what options they have chosen

//reset the game


