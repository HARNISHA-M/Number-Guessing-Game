var random = Math.floor(Math.random() * 101)
var count = 0
console.log(random)
function checkGuess() {
  var guess = document.getElementById('guessInput').value
  if(guess=="") 
  {
    alert("Enter any value");
    return;
  }
  document.getElementById('guessInput').value = ''
  document.getElementById('previousGuess').innerHTML += ' ' + guess
  count += 1
  if (count > 11) {
    document.getElementById(
      'guessResult',
    ).innerHTML = `<p class="wrong">Sorry!you exceed the number of turns.</p><button onclick="newGame()">Start new game</button>`
    document.getElementById('submitGuess').disabled = true
    return
  }

  if (random == guess) {
    document.getElementById(
      'guessResult',
    ).innerHTML = `<p class="correct">Congratulations.You got it right!</p>
        <button onclick="newGame()">Start new game</button>`
    document.getElementById('submitGuess').disabled = true
  } else if (random < guess) {
    document.getElementById(
      'guessResult',
    ).innerHTML = `<p class="wrong">Wrong.your guess is high!</p>`
  } else {
    document.getElementById(
      'guessResult',
    ).innerHTML = `<p class="wrong">Wrong.your guess is low!</p>`
  }
}

function newGame() {
  random = Math.floor(Math.random() * 101)
  count = 0
  console.log(random)
  document.getElementById('previousGuess').innerHTML = ''
  document.getElementById('guessResult').innerHTML = ''
  document.getElementById('submitGuess').disabled = false
}
