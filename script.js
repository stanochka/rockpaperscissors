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
