import { GameMap } from "@repo/game-map";
import { Cell } from "@repo/map-cell";

export class MapBuilder {
  build({ size }: { size: number }) {
    const result = new GameMap();

    for (let x = 0; x < size; x++) {
      for (let y = 0; y < size; y++) {
        const newCell = new Cell({ x, y });
        result.set(newCell);
      }
    }

    return result;
  }
}
