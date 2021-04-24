function displayWordSoFar(word, guesses) {
  let displayedWord = "";

  for (let i = 0; i < word.length; i++){
    //als deze letter
    const letter = word[i];
    // in de guesses array zit?
    const isGuessed = guesses.includes(letter);
    // Zo ja
    if (isGuessed){
      // Toevoegen aan string
      const toAdd = letter + " ";
      displayedWord += toAdd;
      //Of: displayedWord += '${letter} ';
    } else {
      //anders:
      displayedWord += "_ ";
    }
  }
  return displayedWord;
}

function isGameWon(word, guesses) {
  //Als alle geraden letters
  //let guessedLetters = 0;
  //overeenkomen met de letters van het woord
  for (let i =0; i < guesses.length; i ++ ){


  } //dan heb je gewonnen

}

function isGameLost(word, guesses) {
  //Als het aantal fout geraden letters
  let guessedWrong = 0;

  for (let i =0; i < guesses.length; i ++ ){
    let guessedLetter = guesses[i];
    if(!guesses.includes(guessedLetter)){
      return guessedWrong += 1;
    }


  } //7 of meer is //dan heb je verloren
  return guessedWrong >= 7;
}

module.exports = {
  displayWordSoFar: displayWordSoFar,
  isGameWon: isGameWon,
  isGameLost: isGameLost,
};