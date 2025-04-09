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

// Set up the game board
function setUpGameBoard() {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}

// Function to handle cell click and change the character
function handleCellClick(event) {
    const cell = event.target;

    // If the cell already has a mark (X or O), return
    if (cell.textContent === "X" || cell.textContent === "O") return;

    // Set the current player's mark (X for Player 1, O for Player 2)
    const currentSymbol = currentPlayer === 0 ? "X" : "O";
    cell.textContent = currentSymbol;

    // Switch the turn to the next player
    currentPlayer = 1 - currentPlayer; // Toggle between 0 and 1 (Player 1 and Player 2)
    updateGameStatus(); // Update the game status message
}

// Function to update the status message to show whose turn it is
function updateGameStatus() {
    const statusMessage = document.getElementById('game-status');
    statusMessage.textContent = `${playerNames[currentPlayer]}'s turn`;
}

// Set up the game board with event listeners
function setUpGameBoard() {
    const cells = document.querySelectorAll('td');
    cells.forEach(cell => {
        cell.addEventListener('click', handleCellClick);
    });
}

// Call the setUpGameBoard when the game starts
setUpGameBoard();