let playerNames = ["Player 1", "Player 2"]; // Default player names
let currentPlayer = 0; // 0 = Player 1, 1 = Player 2
let gameActive= true;
let board=[
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
];


document.getElementById('submit').addEventListener('click', startGame);


function startGame() {
    const playerName1 = document.getElementById('player-name').value;

    if (playerName1) { // Set Player 1's name
        playerNames[0] = playerName1;
        
        // Prompt for Player 2's name using prompt
        const playerName2 = prompt("Enter Player 2's name:");

        if (playerName2) { // Set Player 2's name
            
            playerNames[1] = playerName2;


            // Update the game status
            document.getElementById('game-status').textContent = `${playerNames[currentPlayer]}'s turn`;

            // Hide the submit button
            document.getElementById('submit').style.display = 'none';

            
            // set up the game
            setUpGameBoard();
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

    // player's mark (X for Player 1, O for Player 2)
    const currentSymbol = currentPlayer === 0 ? "X" : "O";
    cell.textContent = currentSymbol;

// Update the board state based on the clicked cell
const cellId = cell.id;
board[getRow(cellId)][getCol(cellId)] = currentSymbol;




// Check if there's a winner or draw after this move
if (checkWinner(currentSymbol)) { // Check for a winner
    document.getElementById('game-status').textContent = `${playerNames[currentPlayer]} wins!`;
    gameActive = false; // Stop the game after a win


    document.getElementById('reset').style.display = 'inline-block'; // Show reset button
} else if (isDraw()) { // Check for a draw


    document.getElementById('game-status').textContent = "It's a draw!";
    gameActive = false; // Stop the game after a draw


    document.getElementById('reset').style.display = 'inline-block'; 
} else {
    // Switch the turn to the next player
    currentPlayer = 1 - currentPlayer; // Toggle between 0 and 1 (Player 1 and Player 2)
    updateGameStatus(); // Update the game status message
    }
} 

// Function to check for a winner
function checkWinner(symbol) {


    // Check rows, columns, and diagonals for a win
    for (let i = 0; i < 3; i++) {

        // Row check
        if (board[i][0] === symbol && board[i][1] === symbol && board[i][2] === symbol) return true;
        
        // Column check
        if (board[0][i] === symbol && board[1][i] === symbol && board[2][i] === symbol) return true;
    }
    
    // Diagonal check (top-left to bottom-right)
    if (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) return true;
    
    // Diagonal check (top-right to bottom-left)
    if (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol) return true;
    
    return false;
}

// Function to check for a draw (when all cells are filled and no winner)
function isDraw() {
    return board.flat().every(cell => cell === "X" || cell === "O");
}

// Function to update the status message to show whose turn it is
function updateGameStatus() {
    const statusMessage = document.getElementById('game-status');
    statusMessage.textContent = `${playerNames[currentPlayer]}'s turn`;
}


