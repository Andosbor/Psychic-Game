/*2 main problems: 
1. how to add a loss when guesses reach 0
2. how to display each key that is pressed until a reset
*/



//making an array filled with every letter in the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var guesses = 9

var w;

var l;

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

//Shows what guesses have been made
    document.getElementById("shownGuess").innerHTML++;

//determines which key is being pressed
    var userGuess = event.key;
    console.log("COMPUTERGUESS: " + computerGuess);
    console.log("USERGUESS: " + userGuess);

    
//If wrong guess, lose one try. (need to figure out how to reset after 0 lives)

if (userGuess !== computerGuess){
    document.getElementById("guesses").innerHTML--;
    console.log("wrong");
} 
    

 //if correct guess, add one to win and reset game. (need to figure out how to reset Guesses Left, computerGuess, and Your Guesses so far)
    if (userGuess === computerGuess){
        document.getElementById("wins").innerHTML++;
        console.log("correct");
        computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
        document.getElementById("guesses").innerHTML = 9;
    }

//find out how to increase win number on document when user wins each time**
    


    if (guesses === 0){
        document.getElementById("losses").innerHTML++;
        console.log("no more guesses");
    }

        

    }


      //If lives are <1, add a loss and reset game

//determines if user's key press matches computer's choice

//lets the user have 10 guesses

//shows the user what options they have chosen


//reset the game

//place a win

//place a loss
