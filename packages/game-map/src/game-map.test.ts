import { describe, expect, test } from "vitest";
import { GameMap } from "./game-map.js";
import { Cell } from "@repo/map-cell";

describe("Game map", () => {
  describe("#instantiation", () => {
    test("can instantiate a game map", () => {
      const gameMap = new GameMap();

      expect(true).toBe(true);
    });
  });

  describe("#setup", () => {
    test("can set a new cell into the map", () => {
      const gameMap = new GameMap();
      const cell = new Cell({ x: 0, y: 0 });

      gameMap.set(cell);

      expect(gameMap.cells.get("0-0")).toStrictEqual(cell);
    });

    test("can get a cell from the map once it's been set", () => {
      const gameMap = new GameMap();
      const cell = new Cell({ x: 0, y: 0 });

      gameMap.set(cell);

      const result = gameMap.get({ x: 0, y: 0 });

      expect(result).toStrictEqual(cell);
    });
  });

  describe("#traversal", () => {
    test("current is undefined when there is no game map set", () => {
      const gameMap = new GameMap();

      expect(gameMap.current).toBeUndefined();
    });

    test("setting current to a position changes the current cursor to that cell", () => {
      const gameMap = new GameMap();
      const cell = new Cell({ x: 0, y: 0 });

      gameMap.set(cell);

      gameMap.moveTo({ x: 0, y: 0 });

      expect(gameMap.current).toStrictEqual(cell);
    });

    test("moveRight goes right when there is a cell to the right", () => {
      const gameMap = new GameMap();
      const cell1: Cell = new Cell({ x: 0, y: 0 });
      const cell2: Cell = new Cell({ x: 1, y: 0 });

      gameMap.set(cell1);
      gameMap.set(cell2);

      gameMap.moveTo({ x: 0, y: 0 });
      gameMap.moveRight();

      expect(gameMap.current).toEqual(cell2);
    });

    test("moveLeft goes left when there is a cell to the left", () => {
      const gameMap = new GameMap();
      const cell1: Cell = new Cell({ x: 0, y: 0 });
      const cell2: Cell = new Cell({ x: 1, y: 0 });

      gameMap.set(cell1);
      gameMap.set(cell2);

      gameMap.moveTo({ x: 1, y: 0 });
      gameMap.moveLeft();

      expect(gameMap.current).toEqual(cell1);
    });

    test("moveDown goes down when there is a cell below", () => {
      const gameMap = new GameMap();
      const cell1: Cell = new Cell({ x: 0, y: 0 });
      const cell2: Cell = new Cell({ x: 0, y: 1 });

      gameMap.set(cell1);
      gameMap.set(cell2);

      gameMap.moveTo({ x: 0, y: 0 });
      gameMap.moveDown();

      expect(gameMap.current).toEqual(cell2);
    });

    test("moveUp goes up when there is a cell above", () => {
      const gameMap = new GameMap();
      const cell1: Cell = new Cell({ x: 0, y: 0 });
      const cell2: Cell = new Cell({ x: 0, y: 1 });

      gameMap.set(cell1);
      gameMap.set(cell2);

      gameMap.moveTo({ x: 0, y: 1 });
      gameMap.moveUp();

      expect(gameMap.current).toEqual(cell1);
    });
  });
});
