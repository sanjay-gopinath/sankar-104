// random value generated

var y = Math.floor(Math.random() * 10 + 1);
guess = 0;
playtime = 0;

function submit() {
    var x = document.getElementById("guessField").value;
    playtime++;
    if (x == y) {
        alert("CONGRATULATIONS !!!" + playtime + "  You Guessed It Right In" +
            guess + " GUESS");
        guess = 1;
    } else if (x > y)

    {
        guess++;
        alert("OOPS SORRY!! TRY A SMALLER NUMBER ");
    } else {
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER ")
    }
}

function playAgain() {
    var y = Math.floor(Math.random() * 10 + 1);
}

// counting the number of guesses
// made for correct Guess


// function for number guessed by user