document.getElementById('submit').addEventListener('click', startGame);

let playerNames = ["Player 1", "Player 2"]; // Default player names
let currentPlayer = 0; // 0 = Player 1, 1 = Player 2

function startGame() {
    const playerName1 = document.getElementById('player-name').value;

    if (playerName1) {
        // Set Player 1's name
        playerNames[0] = playerName1;
        
        // Prompt for Player 2's name
        const playerName2 = prompt("Enter Player 2's name:");

        if (playerName2) {
            // Set Player 2's name
            playerNames[1] = playerName2;

            // Update the game status
            document.getElementById('game-status').textContent = `${playerNames[currentPlayer]}'s turn`;

            // Hide the submit button
            document.getElementById('submit').style.display = 'none';

            // You can now initialize the game logic here
            // Example: initializeBoard();
        } else {
            alert('Please enter Player 2 name.');
        }
    } else {
        alert('Please enter Player 1 name.');
    }
}

function changeTurn() {
    if (playerTurn == 1) playerTurn = 2;
    else playerTurn = 1;
}