function guessGame() {
   rletanNum = Math.floor(Math.random() * 11);
  console.log(ranNum)
  let guess;
  do {
    guess = prompt("Guess a number between 1-10");
    console.log(guess)
    console.log('keep guessing');
  } while (guess !== ranNum);
  alert("YOU WON");
}



