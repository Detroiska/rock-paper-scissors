const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";
const CHOICES = [ROCK, PAPER, SCISSORS];

const MAX_ROUNDS = 5;

const score = document.querySelector('.score');
const winner = document.querySelector('.winner');
const buttons = document.querySelectorAll('button');


let playerScore = 0;
let computerScore = 0;
let rounds = 0;


		
function playRound(player1, player2) {
	if (rounds++ === MAX_ROUNDS) {
		buttons.forEach(button => button.removeEventListener('click', playRoundEvt));
		return announceWinner();
	}
	if (beats(player1, player2)) {
		console.log("You win! " + player1 + " beats " + player2);
		playerScore++;
		}
	else if (beats(player2, player1)) {
		console.log("You lose! " + player2 + " beats " + player1);
		computerScore++;
		}
	else {
		console.log("It's a tie! Both threw " + player1);
		}
	updateScore();
	}


	
function updateScore() {
	score.textContent = `${playerScore} -- ${computerScore}`;
}

function announceWinner() {
	if (playerScore > computerScore) {
		winner.textContent = 'You win!';
	}
	else if (playerScore < computerScore) {
		winner.textContent = 'You lose!';
	}
	else {
		winner.textContent = 'Draw!';
	}
	winner.classList.add('winnerAnnounced');
}
		
	
function beats(choiceA, choiceB) {
	return (CHOICES.indexOf(choiceA) + 2) % 3 == CHOICES.indexOf(choiceB);
}

function getComputerChoice() {
	let randomNumber = Math.floor(Math.random() * 100) % 3;
	return CHOICES[randomNumber];
}

function playRoundEvt(e) {
	playRound(e.currentTarget.dataset['key'], getComputerChoice());
}

buttons.forEach(button => button.addEventListener('click', playRoundEvt));


