import { Piece } from "./piece";
import { Position } from "../position";
import { Board } from "../board";

export class Bishop extends Piece {
  canMove(from: Position, to: Position, board: Board): boolean {
    const rowDiff = to.row - from.row;
    const colDiff = to.col - from.col;
    if (Math.abs(rowDiff) !== Math.abs(colDiff)) return false;
    const rowStep = rowDiff / Math.abs(rowDiff);
    const colStep = colDiff / Math.abs(colDiff);

    let current = new Position(from.row + rowStep, from.col + colStep);
    while (!current.equals(to)) {
      if (board.getPiece(current)) return false;
      current = new Position(current.row + rowStep, current.col + colStep);
    }
    const target = board.getPiece(to);
    return !target || target.color !== this.color;
  }

  getSymbol(): string {
    return this.color === 'white' ? '♗' : '♝';
  }
}