'use strict';
let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;
const displayMessage = message =>
  (document.querySelector('.message').textContent = message);
const displayScore = input =>
  (document.querySelector('.score').textContent = input);

document.querySelector('.check').addEventListener('click', function () {
  let guess = +document.querySelector('.guess').value;
  //no input
  if (!guess) {
    displayMessage('⛔️ No number!');
  }
  //input correct
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct number');
    document.querySelector('.number').textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
  }

  //input is different
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high' : '📈 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('You lost the game');
      displayScore(0);
      document.querySelector('body').style.backgroundColor = 'orangered';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  score = 20;
  displayScore(score);

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
˚