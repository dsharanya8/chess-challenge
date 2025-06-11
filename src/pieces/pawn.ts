import { Piece } from "./piece";
import { Position } from "../position";
import { Board } from "../board";

export class Pawn extends Piece {
  canMove(from: Position, to: Position, board: Board): boolean {
    const dir = this.color === 'white' ? -1 : 1;
    const rowDiff = to.row - from.row;
    const colDiff = Math.abs(to.col - from.col);
    const target = board.getPiece(to);

    // Move forward by 1
    if (colDiff === 0 && rowDiff === dir && !target) return true;

    // Initial double move
    if (colDiff === 0 && rowDiff === 2 * dir && !target &&
        ((this.color === 'white' && from.row === 6) || (this.color === 'black' && from.row === 1))) {
      return true;
    }

    // Capture diagonally
    if (colDiff === 1 && rowDiff === dir && target && target.color !== this.color) return true;

    return false;
  }

  getSymbol(): string {
    return this.color === 'white' ? '♙' : '♟';
  }
}