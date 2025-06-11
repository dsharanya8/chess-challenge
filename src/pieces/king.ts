import { Piece } from "./piece";
import { Position } from "../position";
import { Board } from "../board";

// King class to move 1 suqare any direction
export class King extends Piece {
  canMove(from: Position, to: Position, board: Board): boolean {
    const rowDiff = Math.abs(from.row - to.row);
    const colDiff = Math.abs(from.col - to.col);
    return rowDiff <= 1 && colDiff <= 1;
  }

  getSymbol(): string {
    return this.color === 'white' ? '♔' : '♚';
  }
}