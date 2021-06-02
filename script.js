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

//will prompt player to make a move
const playerPlay = () => {
	let playerText = prompt('Please enter Rock, Paper or Scissors:');
  let playerSelection = playerText.slice(0, 1).toUpperCase() + playerText.slice(1).toLowerCase();
  const valid = ['Rock', 'Paper', 'Scissors'];
  if (valid.includes(playerSelection)) {
  	return playerSelection;
  } else {
    alert('Invalid input!');
  	return playerPlay();
  }
}

//plays a single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {
	console.log('YOU: ' + playerSelection + ', COMPUTER: ' + computerSelection);
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 0;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 0;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    return 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    return 0;
  } else if (playerSelection === computerSelection) {
  	console.log('It\'s a tie! Play another round');
  	return playRound(playerPlay(), computerPlay());
  }
}

const game = () => {
  let results = [];
  while (results.length < 5) {
    let round = playRound(playerPlay(), computerPlay());
    results.push(round);
  }
  if (results.reduce((sum, x) => sum + x) >= 3) {
    return console.log('YOU WIN!');
  } else {
    return console.log('YOU LOOSE:(')
  }
}

game()
