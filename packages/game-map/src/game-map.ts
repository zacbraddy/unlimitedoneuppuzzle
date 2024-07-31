import { Cell, Position } from "@repo/map-cell";

export class GameMap {
  readonly cells: Map<string, Cell>;
  #current?: Cell;

  constructor() {
    this.cells = new Map<string, Cell>();
  }

  set(newCell: Cell) {
    this.cells.set(`${newCell.position.x}-${newCell.position.y}`, newCell);
  }

  get(position: Position) {
    return this.cells.get(`${position.x}-${position.y}`);
  }

  get current(): Cell | undefined {
    return this.#current;
  }

  moveTo(position: Position) {
    this.#current = this.cells.get(`${position.x}-${position.y}`);
  }

  moveRight() {
    const currentPosition = this.#current?.position;

    if (!currentPosition) return;

    this.#current = this.cells.get(
      `${currentPosition.x + 1}-${currentPosition.y}`,
    );
  }

  moveLeft() {
    const currentPosition = this.#current?.position;

    if (!currentPosition) return;

    this.#current = this.cells.get(
      `${currentPosition.x - 1}-${currentPosition.y}`,
    );
  }

  moveDown() {
    const currentPosition = this.#current?.position;

    if (!currentPosition) return;

    this.#current = this.cells.get(
      `${currentPosition.x}-${currentPosition.y + 1}`,
    );
  }

  moveUp() {
    const currentPosition = this.#current?.position;

    if (!currentPosition) return;

    this.#current = this.cells.get(
      `${currentPosition.x}-${currentPosition.y - 1}`,
    );
  }
}
