import { describe, expect, test } from "vitest";
import { Cell, Position } from "./cell.js";

describe("Cell", () => {
  describe("#instantiation", () => {
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
  });
});
