'use strict';

function randomNum(maxNum) {
    return Math.trunc(Math.random() * maxNum) + 1;
}
let secretNumber = randomNum(20);
console.log(secretNumber);

let score = 20;
let highScore = 0;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message ; 
};


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // No input
    if (!guess) {
        displayMessage("⛔️ No number!");
        // document.querySelector('.message').textContent = "⛔️ No number!";
        // Win
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = "🎉 Correct number!";
        displayMessage("🎉 Correct number!");
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = "30rem"
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
        // wrong
    }else if (guess !== secretNumber) {
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too high!' :'📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' :'📉 Too low!');

            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = "💥 You lost the game!";
            document.querySelector('.score').textContent = 0;
        }
    }  
})

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    
    document.querySelector('.score').textContent = score;
    secretNumber = randomNum(20);
    console.log(secretNumber);
    // document.querySelector('.message').textContent = "Start guessing...";
    displayMessage("Start guessing...");
    document.querySelector('.number').textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = "15rem"
})