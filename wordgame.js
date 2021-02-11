vvar possibleWords = [
    "Javascript",
    "Computer",
    "CSS",
    "HTML",
    "Array",
]
var wordToMatch;
var guessingWord;
var letter;
document.getElementById("btn").addEventListener("click", startGame);
function startGame() {
    // find random word from word list
 wordToMatch = possibleWords[Math.floor(Math.random() * possibleWords.length)];
 //console.log(wordToMatch)
 // make _ for display
 for (var i=0; i < wordToMatch.length; i++){
    guessingWord.push("_");
 }
 updateDisplay();
}
 document.onkeydown = function(event) {
    checkForLetter(event.key);
    }
 function checkForLetter(letter) {
    // Search string for letter
    for (var i=0; i < wordToMatch.length; i++) {
      if (letter === wordToMatch[i]) {
          letter = guessingWord[i]
          guessingWord.join("") === wordToMatch
      }
      else (letter !== wordToMatch[i])
      console.log(letter)
    }
    updateDisplay();    
}
function updateDisplay () {
    document.getElementById("guessingWord").innerText = guessingword.join("");
}
startGame();


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