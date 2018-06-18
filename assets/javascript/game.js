

$(document).ready(function() {


    var wordArray = ["madonna", "banana", "apple", "zeitgeist"];
    var guessWord = "";
    var wins=0;
    var losses=0;
    var blankArray = [];
    var wrongLetters = [];
    var correctGuess = false;
    var guessesLeft = 10;
    var correctLettersGuessed = 0;

    function clear() {
        blankArray = [];
        wrongLetters = [];
        correctGuess = false;
        guessesLeft = 10;
        correctLettersGuessed = 0;

        $("#blank-spaces").text("new word!");
        $("#letters-entered").text("press any letter to start");
        $("#guesses-remaining").text("guesses remaining: 10");
        console.log("clear");
        blanks();

    }

    
    clear();
    

    //generate blanks to be filled in
    function blanks() {
        guessWord = wordArray[wins];
        for (var i=0; i<guessWord.length; i++){

            blankArray[i] = "_ "
            $("blank-spaces").text(blankArray.join(""));
        }
    }

    

    //capture keypress
    $(document).keypress(function(event) {
        var letter = event.key;
        console.log(letter);

        //check letter entered against word
        for (var i=0; i<guessWord.length; i++) {
            
            //if letter is right
            if (letter === guessWord.charAt(i)){
                blankArray[i] = letter;
                $("#blank-spaces").text(blankArray.join(""));
                console.log(blankArray);
                

                //alert("correct letter");
                correctGuess = true;
                correctLettersGuessed ++;
            }
            
        }

        // setTimeout(function(){
        //             $("#blank-spaces").text(blankArray.join(""));   
        //         }, 3000);
        
        //if letter is wrong
        if (correctGuess === false) {
            wrongLetters.push(letter);
            $("#letters-entered").text(wrongLetters);
            console.log("wrong letter")
            guessesLeft--;
       }

        //reset letter check and decrease guesses left
        correctGuess = false;
       
        $("#guesses-remaining").text("guesses remaining: " + guessesLeft);

        //loss condition
        if (guessesLeft === 0) {
            losses ++;
            $("#losses").text("losses: " + losses);

            alert("you lose");
           // clear();
            console.log("loss")
        }
       
        //win condition
        else if (correctLettersGuessed === guessWord.length){
            wins ++;
            $("#wins").text("wins: " + wins);

            //I want it to show the completed word after a win
            //why does this not run before the alert??
            // for (var i=0; i<guessWord.length; i++) {
            //     blankArray[i] = guessWord.charAt(i);
            //     $("#blank-spaces").text(blankArray.join(""));

            //     console.log("is this running?")
            // }   
           
            alert("you win!");
            //timeout shows final completed word but keypresses still register, causing errors/confusion
            //setTimeout(clear, 5000);
            clear();
            console.log("win")
        }
        
        
        


    });

});





