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
	console.log('YOU: ' + playerSelection + ', COMPUTER: ' + computerSelection);
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    return 1;
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return 0;
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    return 1;
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return 0;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
    output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    return 1;
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
    output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    return 0;
  } else if (playerSelection === computerSelection) {
  	console.log('It\'s a tie! Play another round');
    output.textContent = 'It\'s a tie! Play another round';
  	//return playRound(playerPlay(), computerPlay());
  }
}

//DOM manipulation
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');
const player = document.querySelector('#playerMove');
const computer = document.querySelector('#computerMove');
const output = document.querySelector('#output');

var playerSelection, computerSelection;
rockButton.onclick = () => {
  playerSelection = 'Rock';
  computerSelection = computerPlay();
  player.textContent = playerSelection;
  computer.textContent = computerSelection;
  playRound(playerSelection, computerSelection);
 	}
paperButton.onclick = () => {
	playerSelection = 'Paper';
  computerSelection = computerPlay();
  player.textContent = playerSelection;
  computer.textContent = computerSelection;
  playRound(playerSelection, computerSelection);
 	}
scissorsButton.onclick = () => {
	playerSelection = 'Scissors';
  computerSelection = computerPlay();
  player.textContent = playerSelection;
  computer.textContent = computerSelection;
  playRound(playerSelection, computerSelection);
 	}

//TODO: make game start on click and finish after 5 rounds
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
