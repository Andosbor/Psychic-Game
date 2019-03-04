//making an array filled with every letter in the alphabet
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var w;

var l;


//determines what key the computer chooses
var computerGuess = alphabet[Math.floor(Math.random() * alphabet.length)];

//function that says when a key is lifted up, enter that letter into the function
document.onkeyup = function(event){

//determines which key is being pressed
    var userGuess = event.key;

 //if correct guess, add one to win and reset game. (console.log part doesn't currently work)
    if (userGuess === computerGuess){
        document.getElementById("wins").innerHTML = "1";
        console.log("yes");
    }

//find out how to increase win number on document when user wins each time**
    
//If wrong guess, lose one try.

    if (userGuess !== computerGuess){
//lose 1 life starting with 9
    
            // document.write([l--]);
    }

      //If lives are <1, add a loss and reset game

//determines if user's key press matches computer's choice

//lets the user have 10 guesses

//shows the user what options they have chosen


//reset the game

//place a win

//place a loss
}