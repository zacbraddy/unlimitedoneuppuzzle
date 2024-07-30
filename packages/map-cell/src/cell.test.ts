import { describe, expect, test } from "vitest";
import { Cell, Position } from "./cell.ts";

describe("Cell", () => {
  test("can instantiate a position", () => {
    const position: Position = { x: 0, y: 0 };

    expect(position.x).toBe(0);
    expect(position.y).toBe(0);
  });

  test("can instantiate cell", () => {
    const cell: Cell = new Cell({ x: 0, y: 0 });

    expect(cell.position.x).toBe(0);
    expect(cell.position.y).toBe(0);
  });

  test("can add an up linke", () => {
    const cell1: Cell = new Cell({ x: 0, y: 0 });
    const cell2: Cell = new Cell({ x: 0, y: 1 });

    cell2.addUp(cell1);

    expect(cell1.position.x).toBe(0);
    expect(cell1.position.y).toBe(0);
    expect(cell2.links.up?.position.x).toBe(0);
    expect(cell2.links.up?.position.y).toBe(0);
    expect(cell2.position.x).toBe(0);
    expect(cell2.position.y).toBe(1);
  });
});
