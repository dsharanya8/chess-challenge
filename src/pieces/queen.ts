import { Piece } from "./piece";
import { Position } from "../position";
import { Board } from "../board";

//  Combines the movement abilities of Rook and Bishop for vertical, horizontal, and diagonal moves.
export class Queen extends Piece {
  canMove(from: Position, to: Position, board: Board): boolean {
    const rook = new (require("./rook").Rook)(this.color);
    const bishop = new (require("./bishop").Bishop)(this.color);
    return rook.canMove(from, to, board) || bishop.canMove(from, to, board);
  }

  getSymbol(): string {
    return this.color === 'white' ? '♕' : '♛';
  }
}