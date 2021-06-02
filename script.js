//will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’
const computerPlay = () => {
  let result = Math.floor(Math.random()*3);
  switch (result) {
    case 0:
      return 'Rock';
    case 1:
      return 'Paper';
    case 2:
      return 'Scissors';
  }
}
//plays a single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.slice(0, 1).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let status;

  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    status = true;
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    status = false;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    status = true;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    status = false;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    status = true;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    status = false;
  } else {
    return playRound();
  }

  if (status) {
    return `You Win! ${playerSelection} beats ${computerSelection}`
  } else {
    return `You Lose! ${computerSelection} beats ${playerSelection}`
  }
}
