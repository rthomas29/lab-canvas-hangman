var hangman;

function Hangman() {
  this.words = ['words', 'another'];
  this.secretWord = '';
  this.letters = [];
  this.guessedLetter = '';
  this.errorsLeft = 10;
}

Hangman.prototype.getWord = function() {
  return this.words[Math.floor(Math.random() * this.words.length)];
};

Hangman.prototype.checkIfLetter = function(keyCode) {
  if (isNaN(keyCode)) {
    return true;
  }
  return false;
};

Hangman.prototype.checkClickedLetters = function(key) {
  return this.letters.indexOf(key) === -1 ? true : false;
};

Hangman.prototype.addCorrectLetter = function(i) {
  this.guessedLetter += this.secretWord[i].toUpperCase();
};

Hangman.prototype.addWrongLetter = function(letter) {
  if (this.secretWord.indexOf(letter) === -1) {
    this.errorsLeft -= 1;
  }
};

Hangman.prototype.checkGameOver = function() {
  return this.errorsLeft === 0 ? true : false;
};

Hangman.prototype.checkWinner = function() {
  return this.guessedLetter.length === this.secretWord.length ? true : false;
};

document.getElementById('start-game-button').onclick = function() {
  hangman = new Hangman();
};

document.onkeydown = function(e) {};
