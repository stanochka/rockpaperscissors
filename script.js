window.onload = ()=> {

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

var results = [];
//plays a single round of Rock Paper Scissors
const playRound = (playerSelection, computerSelection) => {
  if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
    output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    results.push(1);
    console.log(results);
  } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
    output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    results.push(0);
    console.log(results);
  } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
    output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    results.push(1);
    console.log(results);
  } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
    output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    results.push(0);
    console.log(results);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
    output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    results.push(1);
    console.log(results);
  } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
    output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    results.push(0);
    console.log(results);
  } else if (playerSelection === computerSelection) {
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

const play = () => {
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
}

//TODO: make game finish after 5 rounds
  const game = () => {
    //let results = [];
    while (results.length < 5) {
      play();
    }
    if (results.reduce((sum, x) => sum + x) >= 3) {
      output.textContent = 'YOU WIN!';
    } else {
      output.textContent = 'YOU LOOSE:(';
    }
  }

  play()
};
