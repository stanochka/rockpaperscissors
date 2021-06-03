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

  //DOM selectors
  const buttons = document.querySelectorAll('.playButton');
  const player = document.querySelector('#playerMove');
  const computer = document.querySelector('#computerMove');
  const output = document.querySelector('#output');
  //score counter - resets after 5 rounds with function game()
  var results = [];

  //plays a single round of Rock Paper Scissors
  const playRound = (playerSelection, computerSelection) => {
    if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
      output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      results.push(1);
    } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
      output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      results.push(0);
    } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
      output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      results.push(1);
    } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
      output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      results.push(0);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
      output.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
      results.push(1);
    } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
      output.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
      results.push(0);
    } else if (playerSelection === computerSelection) {
      output.textContent = 'It\'s a tie! Play another round';
    }
    if (results.length === 5) {
      game();
    }
  }

  //button click listener
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      playerSelection = button.id.slice(0, 1).toUpperCase() + button.id.slice(1);
      computerSelection = computerPlay();
      player.textContent = playerSelection;
      computer.textContent = computerSelection;
      playRound(playerSelection, computerSelection);
    });
  });

  //checks result and restarts the score count
  const game = () => {
    let playerResult = results.reduce((sum, x) => sum + x);
    let computerResult = results.filter(x => x === 0).length;
    if (playerResult >= 3) {
      player.textContent = `${playerResult}`;
      computer.textContent = `${computerResult}`;
      output.textContent = `CONGRATS! YOU WON!`;
      results.length = 0;
    } else {
      player.textContent = `${playerResult}`;
      computer.textContent = `${computerResult}`;
      output.textContent = `YOU LOST:( MORE LUCK NEXT TIME!`;
      results.length = 0;
    }
  }

};
