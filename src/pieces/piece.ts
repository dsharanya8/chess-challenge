import { Position } from "../position";
import { Board } from "../board";

export abstract class Piece {
// Base class for all the chess pieces
// color and position, and abstract methods for move & symbols
  constructor(public color: 'white' | 'black') {}

  abstract canMove(from: Position, to: Position, board: Board): boolean;
  abstract getSymbol(): string;
}
