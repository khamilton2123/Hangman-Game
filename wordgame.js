const POSSIBLE_WORDS = [
    "javascript",
    "computer",
    "css",
    "html",
    "array",
];

const guessingWordEl = document.getElementById("guessingWord");
// document.getElementById("btn").addEventListener("click", startGame);

const getRandomPossibleWord = function() {
    const randomWord = POSSIBLE_WORDS[Math.floor(Math.random() * POSSIBLE_WORDS.length)];

    return randomWord;
}

// Returns an array of underscores the length of the characters in a string
const initilizeGuessingWords = function(word) {
    var underscores = [];

    for (var i = 0; i < word.length; i++) {
        underscores.push("_");
    }

    return underscores;
}

// Joins the elements of an array to a string and displays it to the guessing word element.
const updateGuessingWordsDisplay = function(words) {
    guessingWordEl.textContent = words.join("");
}

const startGame = function() {

    var wordToMatch = getRandomPossibleWord();
    console.log(wordToMatch)
    var guessingWords = initilizeGuessingWords(wordToMatch);

    updateGuessingWordsDisplay(guessingWords);

    // Inserts the letter in the guessing words array at each index.
    const updateGuessingWords = function(indexes, letter) {
        for (var i = 0; i < indexes.length; i++) {
            var index = indexes[i];
            guessingWords[index] = letter;
            console.log(guessingWords);
        }
        
    }

    // Evaluates if the letter matches a word in WordToMatch and returns an object. {isMatch: boolean, matchedIndexes: array}
    // If it matches, it returns true and the matched indexes 
    const getLetterEvaluation = function(letter) {
        var isMatch = false;
        var matchedIndexes = [];
        
        for (var i = 0; i < wordToMatch.length; i++) {
            if (letter === wordToMatch[i]) {
                isMatch = true;
                matchedIndexes.push(i);
            } 
        }

        return {isMatch, matchedIndexes};
    }

    document.onkeydown = function(event) {
        key = event.key;
        console.log("key pressed: " + key);
        var match = getLetterEvaluation(key);

        if (match.isMatch) {
            updateGuessingWords(match.matchedIndexes, key);
            updateGuessingWordsDisplay(guessingWords);
        }      
    }
}

startGame();

// TODO
// Evaluate if the player has won or lost.
// Implement startTimer function.
// If the player has won, display end game message and increment wins and store in localstorage.
// If the plaser has lost, display end game message and increment losses and store in localstorage.



// Decrements seconds by 1 every second and displays it. When seconds equals 0, it stops decrementing.
function startTimer() {
    var timerInterval = setInterval(function(){
        seconds;
        timerEl.textContent = seconds;
        if (seconds === 0) {
            clearInterval(timerInterval);
            timer.textContent = seconds;
        }
    }, 1000);
}