let score = JSON.parse(localStorage.getItem('score')) || {wins: 0, losses:0, ties:0};
/*this is common version of this code {wins:0, losses:0, ties:0} which that written in above line
if(score === null) {
  score = {
    wins: 0,
    losses:0,
    ties: 0,
  };
}*/
  
function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = '';
  
  if(playerMove === 'paper') {
    if(computerMove === 'paper') {
      result = 'Tie.';
    } else if(computerMove === 'rock') {
        result = 'You win.';
    } else if(computerMove === 'scissors') {
        result = 'You lose.';
    }

  }else if(playerMove === 'rock') {
    if(computerMove === 'rock') {
      result = 'Tie.';
    }else if(computerMove === 'paper'){
      result = 'You lose.';
    }else if(computerMove === 'scissors'){
      result = 'You win.';
    }

  }else if(playerMove === 'scissors'){
    if(computerMove === 'rock') {
      result = 'You lose.';
    }else if(computerMove === 'paper') {
      result = 'You win.';
    }else if(computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  if(result === 'You win.') {
    score.wins += 1;
  }else if(result === 'You lose.') {
    score.losses += 1
  }else if(result === 'Tie.'){
    score.ties += 1;
  }

  localStorage.setItem('score', JSON.stringify(score));

  document.querySelector('.js-result')
  .innerHTML = result;

  document.querySelector('.js-moves')
  .innerHTML = ` You
 <img src="../images/${playerMove}-emoji.png" alt="" class="move-icon">
 <img src="../images/${computerMove}-emoji.png" alt="" class="move-icon">
Computer`;

  updateScore();
  displayResult();
}


 function pickComputerMove() {
    let computerMove = '';
    const randomNumber = Math.random();

    if(randomNumber >= 0 && randomNumber < 1/3) {
      computerMove = 'rock';
    }else if(randomNumber >= 1/3 && randomNumber < 2 /3){
      computerMove = 'paper';
    }else if(randomNumber >= 2/3 && randomNumber < 1) {
      computerMove = 'scissors'
    }

    return computerMove;
}

function updateScore() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Tie: ${score.ties}`
}
function displayResult() {
 
}
function displayMoves() {
  
}

function resetScores() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  localStorage.removeItem('score');
  updateScore();
  alert('All scores are reseted successfully✅');
}