export interface Position {
  readonly x: number;
  readonly y: number;
}

export interface Links {
  up: Cell | undefined;
}

export class Cell {
  readonly position: Position;
  links: Links;

  constructor(position: Position) {
    this.position = position;
    this.links = { up: undefined };
  }

  addUp(newUp: Cell) {
    this.links.up = newUp;
  }
}
