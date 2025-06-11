import { Piece } from "./piece";
import { Position } from "../position";
import { Board } from "../board";

export class Rook extends Piece {
  canMove(from: Position, to: Position, board: Board): boolean {
    if (from.row !== to.row && from.col !== to.col) return false;
    const rowStep = from.row === to.row ? 0 : (to.row - from.row) / Math.abs(to.row - from.row);
    const colStep = from.col === to.col ? 0 : (to.col - from.col) / Math.abs(to.col - from.col);

    let current = new Position(from.row + rowStep, from.col + colStep);
    while (!current.equals(to)) {
      if (board.getPiece(current)) return false;
      current = new Position(current.row + rowStep, current.col + colStep);
    }
    const target = board.getPiece(to);
    return !target || target.color !== this.color;
  }

  getSymbol(): string {
    return this.color === 'white' ? '♖' : '♜';
  }
}