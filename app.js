// Game value
let min = 1, 
    max = 10,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

// UI Element
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num');
      maxNum = document.querySelector('.max-num');
      guessBtn = document.querySelector('#guess-btn');
      guessInput = document.querySelector('#guess-input');
      message = document.querySelector('.message');

      // Assign UI MIN and MAX
      minNum.textContent = min;
      maxNum.textContent = max;

      // Play again event listener
      game.addEventListener('mousedown', function(e){
        if(e.target.className === 'play-again'){
          window.location.reload();
        }
      });

      // Listen for guess
      guessBtn.addEventListener('click', function(){
        let guess = parseInt(guessInput.value);

           // Validation
           if(isNaN(guess) || guess < min || guess > max){
             setMessage(`Please enter a number between ${min} and ${max}`, 'red');
           }

           // Check if Won
           if(guess === winningNum){
             gameOver(true, `${winningNum} is correct, you WIN!`);
           } else {
            // Wrong Number
            guessesLeft -=1;
            if(guessesLeft ===0){
              // Game OVER - lost
              gameOver(false, `YOU LOST! The correct number was ${winningNum}`);
            } else {
              // Game continues - wrong answer

              // Change border color
              guessInput.style.borderColor = 'red';

              // Clear INPUT Field
              guessInput.value = '';

              // Tell the answer was wrong and guesses left
              setMessage(`${guess} is not correct, you have ${guessesLeft} guesses left!`, 'red');
            }
           }
      });

      // Function: Game OVER
      function gameOver(won, msg){
        let color;
        won === true ? color = 'green' : color = 'red';
        
        // Disable input
        guessInput.disabled = true;
        // Change border color
        guessInput.style.borderColor = color;
        // Change text color
        message.style.color = color;
        // Set Message
        setMessage(msg);
        // PLAY AGAIN
        guessBtn.value = 'Play Again';
        guessBtn.className += 'play-again';
      }

      // Get Winning Number
      function getRandomNum(min, max){
        return Math.floor(Math.random()*(max-min+1)+min);
      }

      // Set Message Function
      function setMessage(msg, color){
        message.style.color = color;
        message.textContent = msg;
      }

   
