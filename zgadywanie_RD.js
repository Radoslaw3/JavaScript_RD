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
//------------------------------------zabawa/moje testy
const guessSubmit1 = document.querySelector('.guessSubmit1');
const p_test = document.querySelector('.p_test');

function checkRD()  {
  var userGuess1 = Number(guessField1.value);
  if(userGuess1 < 10){
    p_test.textContent = 'Tekst sie powinien pojawic gdy podales liczbe < 10';
    p_test.style.backgroundColor = 'blue'; //dziala
  }

pokazButton = document.createElement('button');
pokazButton.textContent = 'Wyczysc div_result';
document.body.appendChild(pokazButton);  //to pokaze nowego buttona na stronie html
pokazButton.addEventListener('click', usun_div_result);


}
guessSubmit1.addEventListener('click', checkRD);

function usun_div_result()  {
  var reset_div_result = document.querySelectorAll('.div_result p');
  // for (var i = 0; i < reset_div_result.length; i++) {
  //   reset_div_result[i].textContent = ''; //wyczyszcza wszystkie p
  // }
  reset_div_result[1].textContent = ''; //to usunie tylko drugi element p

  pokazButton.parentNode.removeChild(pokazButton); //usowa button
}
//////////////////////////////
// wstaw div przezd istniejacym div - z mozilla.org
//https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");
  //const newP = document.createElement("p");


  // and give it some content
  const newContentDiv = document.createTextNode("Hi there and greetings!");
  //const newContentP = document.createTextNode("Hi there PPPPP!");


  // add the text node to the newly created div
  newDiv.appendChild(newContentDiv);
  //newDiv.appendChild(newContentP);


  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
  //document.body.insertBefore(newP, currentDiv);

}


//-------------------------koniec mojej zabawy
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
