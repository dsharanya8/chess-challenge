import { Piece } from "./piece";
import { Position } from "../position";
import { Board } from "../board";


export class Knight extends Piece {
  canMove(from: Position, to: Position, board: Board): boolean {
    const rowDiff = Math.abs(from.row - to.row);
    const colDiff = Math.abs(from.col - to.col);
    return (rowDiff === 2 && colDiff === 1) || (rowDiff === 1 && colDiff === 2);
  }

  getSymbol(): string {
    return this.color === 'white' ? '♘' : '♞';
  }
}
