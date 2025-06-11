import { Piece } from "./pieces/piece";
import { Position } from "./position";
import { Knight } from "./pieces/knight";
import { King } from "./pieces/king";
import { Pawn } from "./pieces/pawn";
import { Rook } from "./pieces/rook";
import { Bishop } from "./pieces/bishop";
import { Queen } from "./pieces/queen";

// Represents the chessboard
// Manages piece placement, move execution, board state, and detection of special conditions like check/checkmate.
export class Board {
  grid: (Piece | null)[][] = Array.from({ length: 8 }, () => Array(8).fill(null));

  constructor() {
    this.setupBoard();
  }

  setupBoard() {
    const backRank = [Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook];
    for (let i = 0; i < 8; i++) {
      this.setPiece(new Position(7, i), new backRank[i]('white'));
      this.setPiece(new Position(0, i), new backRank[i]('black'));
      this.setPiece(new Position(6, i), new Pawn('white'));
      this.setPiece(new Position(1, i), new Pawn('black'));
    }
  }

  getPiece(pos: Position): Piece | null {
    return this.grid[pos.row][pos.col];
  }

  setPiece(pos: Position, piece: Piece | null): void {
    this.grid[pos.row][pos.col] = piece;
  }

  movePiece(from: Position, to: Position): boolean {
    const piece = this.getPiece(from);
    if (!piece || !piece.canMove(from, to, this)) return false;
    this.setPiece(to, piece);
    this.setPiece(from, null);
    return true;
  }

  isKingInCheck(color: 'white' | 'black'): boolean {
    let kingPos: Position | null = null;
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = this.grid[row][col];
        if (piece && piece instanceof King && piece.color === color) {
          kingPos = new Position(row, col);
        }
      }
    }
    if (!kingPos) return false;

    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        const piece = this.grid[row][col];
        if (piece && piece.color !== color) {
          if (piece.canMove(new Position(row, col), kingPos, this)) {
            return true;
          }
        }
      }
    }
    return false;
  }
}