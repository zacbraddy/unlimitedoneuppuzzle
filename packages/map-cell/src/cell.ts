export interface Position {
  readonly x: number;
  readonly y: number;
}

export class Cell {
  readonly position: Position;

  constructor(position: Position) {
    this.position = position;
  }
}
