let score = 0;
let ballSpeed = 2;
let ballDirection = 1; // 1 for moving down, -1 for moving up

const player = document.getElementById('player');
const ball = document.getElementById('ball');
const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');

document.addEventListener('keydown', movePlayer);

function movePlayer(e) {
    if (e.key === 'ArrowLeft' && player.offsetLeft > 0) {
        player.style.left = player.offsetLeft - 20 + 'px';
    }
    if (e.key === 'ArrowRight' && player.offsetLeft < gameArea.clientWidth - player.clientWidth) {
        player.style.left = player.offsetLeft + 20 + 'px';
    }
}

function updateBallPosition() {
    const ballBottom = ball.offsetTop + ball.clientHeight;
    const playerZone = ballBottom >= gameArea.clientHeight - player.clientHeight - 10;

    if (playerZone && ball.offsetLeft > player.offsetLeft && ball.offsetLeft < player.offsetLeft + player.clientWidth) {
        ballDirection = -1; // Bounce the ball back up
        score += 1; // Increase the score
        scoreDisplay.innerText = score;
    } else if (ballBottom >= gameArea.clientHeight) {
        ballDirection = -1; // Change direction if it hits the bottom
    } else if (ball.offsetTop <= 0) {
        ballDirection = 1; // Change direction if it hits the top
    }

    ball.style.top = ball.offsetTop + ballDirection * ballSpeed + 'px';
}

setInterval(updateBallPosition, 20);
