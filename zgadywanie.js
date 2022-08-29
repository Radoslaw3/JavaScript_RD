var randomNumber = Math.floor(Math.random() * 100) + 1;

console.log("randomNumber: " + randomNumber);

const guesses = document.querySelector('.guesses');
// const guesses = 1;
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;

function checkGuess(){
  var userGuess = Number(guessField.value);
  if (guessCount === 1){
    guesses.textContent = 'Poprzednio wprowadzone liczby: ';
    }
    guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber){
    lastResult.textContent = 'Gratulacje! Zgadles';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Koniec gry!';
    setGameOver();
  }else{
    lastResult.textContent = 'Zle!';
    lastResult.style.background = 'red';
    if(userGuess < randomNumber){
      lowOrHi.textContent = 'Zbyt mala liczba!';
    }else if(userGuess > randomNumber){
      lowOrHi.textContent = 'Zbyt duza liczba!';
    }
  }

    guessCount++;
    guessField.value = '';
    guessField.focus();
}

guessSubmit.addEventListener('click', checkGuess); //to pieknie ozywilo html i .js

function setGameOver(){
  guessField.disabled = true;
  guessSubmit.disabled = true;

  resetButton = document.createElement('button');
  resetButton.textContent = 'Rozpocznij nowa gre!';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);

}

function resetGame(){
  guessCount = 1;

  var resetParas = document.querySelectorAll('.resultParas p');
  for (var i = 0; i < resetParas.length; i++) {
    resetParas[i].textContent = ''; //kasuje kazdy element z div majacy p
  }
  resetButton.parentNode.removeChild(resetButton); // button nowej gry zniknie
  //
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.background = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;

}
