const game = () => {
  let pScore = 0;
  let cScore = 0;

  // START THE GAME
  const startGame = () => {
    const playBtn = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro')
    const match = document.querySelector('.match');

    playBtn.addEventListener('click', () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  // PLAY MATCH
  const playMatch = () => {
    const options = document.querySelectorAll('.options button'); // IT WILL SELECT ALL THE BUTTONS OF DIV CLASS OPTIONS
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const hands = document.querySelectorAll('.hands img');

    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = '';
      });
    });


    //COMPUTER OPTIONS
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        // COMPUTER CHOICE
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //WHERE WE COMPARE HANDS
          compareHands(this.textContent, computerChoice);
          
          //UPDATE THE IMAGES
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);

        //ANIMATION
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

const updateScore = () => {
  const playerScore = document.querySelector('.player-score p');
  const computerScore = document.querySelector('.computer-score p');
  playerScore.textContent = pScore;
  computerScore.textContent = cScore;

}

const compareHands = (playerChoice, computerChoice) => {
  const winner = document.querySelector('.winner');

  // CHECKS FOR TIE
  if(playerChoice === computerChoice) {
      winner.textContent = 'It is a tie!';
      return;
  }

  // CHECKS FOR ROCK
  if(playerChoice === 'rock') {
      if(computerChoice === 'scissors') {
        winner.textContent = 'Player Wins!'
        pScore++
        updateScore();
        return;
      }else {
        winner.textContent = 'Computer Wins!';
        cScore++
        updateScore();
        return;
      }
  }

  // CHECKS FOR PAPER

  if(playerChoice === 'paper') {
    if(computerChoice === 'scissors') {
      winner.textContent = 'Computer Wins!'
      cScore++
      updateScore();
      return;
    }else {
      winner.textContent = 'Player Wins!';
      pScore++
      updateScore();
      return;
    }
  }

  // CHECK FOR SCISSORS
  if(playerChoice === 'scissors') {
    if(computerChoice === 'rock') {
      winner.textContent = 'Computer Wins!'
      cScore++
      updateScore();
      return;
    }else {
      winner.textContent = 'Player Wins!';
      pScore++
      updateScore();
      return;
    }
  }
}



  // START CALL ALL THE INNER FUNCTION
  startGame();
  playMatch();
};

// START THE GAME FUNCTION
game();