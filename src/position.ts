export class Position {
  constructor(public row: number, public col: number) {}

  static fromAlgebraic(notation: string): Position {
    const col = notation.charCodeAt(0) - 'A'.charCodeAt(0);
    const row = 8 - parseInt(notation[1]);
    return new Position(row, col);
  }

  toAlgebraic(): string {
    const colChar = String.fromCharCode(this.col + 'A'.charCodeAt(0));
    return `${colChar}${8 - this.row}`;
  }

  equals(other: Position): boolean {
    return this.row === other.row && this.col === other.col;
  }
}