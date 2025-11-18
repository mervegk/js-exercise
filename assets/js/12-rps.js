let score = JSON.parse(localStorage.getItem('score')) ||
{
  wins: 0,
  loses: 0,
  ties: 0
};
updateScoreElement();

function pickComputerMove() {
  const randomNumber = Math.random();
  let computerMove = '';
  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }
  return computerMove;
}

const confirmationContainer = document.querySelector('.confirm-message-container');
const confirmYes = document.querySelector('.confirmation-yes');
const confirmNo = document.querySelector('.confirmation-no');

function resetScore() {
  score.wins = 0;
  score.loses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScoreElement();
}

// EXERCISE 12V\ 12X SOLUTION
document.querySelector('.reset-score-button').addEventListener('click', () => {
  confirmationContainer.classList.add('show-message');
  confirmYes.addEventListener('click', () => {
    resetScore();
    confirmationContainer.classList.remove('show-message');
  });
  confirmNo.addEventListener('click', () => {
    confirmationContainer.classList.remove('show-message');
    return;
  })
})

// EXERCISE 12W SOLUTION
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'Backspace') {
    resetScore();
  }
})

const autoPlayButton = document.querySelector('.auto-play-button');

let isAutoPlaying = false;
let intervalID;
function autoPlay() {
  if (!isAutoPlaying) {
    intervalID = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
    // EXERCISE 12T SOLUTION
    autoPlayButton.innerHTML = 'Stop Play';
  }
  else {
    clearInterval(intervalID);
    isAutoPlaying = false;
    // EXERCISE 12T SOLUTION
    autoPlayButton.innerHTML = 'Auto Play';
  }
}

document.querySelector('.js-rock-btn').addEventListener('click', () => {
  playGame('rock');
})
document.querySelector('.js-paper-btn').addEventListener('click', () => {
  playGame('paper');
})
document.querySelector('.js-scissors-btn').addEventListener('click', () => {
  playGame('scissors');
})

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  }
  else if (event.key === 'p') {
    playGame('paper');
  }
  else if (event.key === 's') {
    playGame('scissors');
  }
})

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';

  if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }
  else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    }
  }
  else if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  }

  if (result === 'You win.') {
    score.wins += 1;
  }
  else if (result === 'You lose.') {
    score.loses += 1;
  }
  else if (result === 'Tie.') {
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));
  updateScoreElement();
  document.querySelector('.game-result').innerHTML = result;
  document.querySelector('.game-moves').innerHTML = `You <img src="./assets/images/${playerMove}-emoji.png" alt="" class="move-icon">
<img src="./assets/images/${computerMove}-emoji.png" alt="" class="move-icon"> Computer`;
}

function updateScoreElement() {
  document.querySelector('.game-score').innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`;
}

// EXERCISE 12R, 12S SOLUTION
const autoPlayEventListener = () => autoPlay();
autoPlayButton.addEventListener('click', autoPlayEventListener);

// EXERCISE 12U SOLUTION
document.body.addEventListener('keydown', (event) => {
  if (event.key === 'a') {
    autoPlay();
  }
})