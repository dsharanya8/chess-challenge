import readline from 'readline';
import { Game } from './game';

// Controls the interface of the game.
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const game = new Game();

function clearScreen() {
  process.stdout.write('\x1Bc');
}

function askMove() {
  try {
    clearScreen();
    game.printBoard();
    rl.question(`\n${game.currentPlayer}'s move (e.g., E2 E4 or 'exit'): `, (input) => {
      try {
        const trimmed = input.trim().toLowerCase();
        if (trimmed === 'exit' || trimmed === 'quit') {
          console.log('Exiting game. Goodbye!');
          rl.close();
          return;
        }

        const [from, to] = input.toUpperCase().trim().split(' ');
        if (!from || !to) {
          console.log('Invalid input. Please enter move like "E2 E4".');
          return setTimeout(askMove, 1000);
        }

        const success = game.playMove(from, to);
        if (!success) {
          console.log('Invalid move. Try again.');
          return setTimeout(askMove, 1000);
        }

        askMove();
      } catch (err) {
        console.error('Error processing your move:', err);
        return setTimeout(askMove, 1000);
      }
    });
  } catch (err) {
    console.error('Unexpected error:', err);
    rl.close();
  }
}

askMove();