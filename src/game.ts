import { Board } from "./board";
import { Position } from "./position";


// Maintains the state of the game including current player, move validation, turn management, and game end conditions.
export class Game {
  board = new Board();
  currentPlayer: 'white' | 'black' = 'white';

  playMove(from: string, to: string): boolean {
    const fromPos = Position.fromAlgebraic(from);
    const toPos = Position.fromAlgebraic(to);
    const piece = this.board.getPiece(fromPos);
    if (!piece || piece.color !== this.currentPlayer) return false;

    const cloneBoard = JSON.parse(JSON.stringify(this.board));
    if (this.board.movePiece(fromPos, toPos)) {
      if (this.board.isKingInCheck(this.currentPlayer)) {
        this.board = cloneBoard;
        return false;
      }
      this.currentPlayer = this.currentPlayer === 'white' ? 'black' : 'white';
      return true;
    }
    return false;
  }

  printBoard(): void {
    for (let row = 0; row < 8; row++) {
      let line = '';
      for (let col = 0; col < 8; col++) {
        const piece = this.board.grid[row][col];
        line += piece ? piece.getSymbol() : '.';
        line += ' ';
      }
      console.log(8 - row, line);
    }
    console.log('  A B C D E F G H');
  }
}