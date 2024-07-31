import { describe, test, expect } from "vitest";
import { MapBuilder } from "./map-builder.js";

describe("Map Builder", () => {
  test("can instantiate map builder", () => {
    const mapBuilder = new MapBuilder();

    expect(true).toBe(true);
  });

  test("when you call build it creates a square with the width you want", () => {
    const mapBuilder = new MapBuilder();

    const result = mapBuilder.build({ size: 2 });

    const cell1 = result.get({ x: 0, y: 0 });
    const cell2 = result.get({ x: 1, y: 0 });
    const cell3 = result.get({ x: 0, y: 1 });
    const cell4 = result.get({ x: 1, y: 1 });

    expect(cell1?.position.x).toBe(0);
    expect(cell1?.position.y).toBe(0);
    expect(cell2?.position.x).toBe(1);
    expect(cell2?.position.y).toBe(0);
    expect(cell3?.position.x).toBe(0);
    expect(cell3?.position.y).toBe(1);
    expect(cell4?.position.x).toBe(1);
    expect(cell4?.position.y).toBe(1);
  });
});
