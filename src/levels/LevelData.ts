export interface LevelConfig {
  id: number;
  cats: number;
  enemies: number;
}

export const Levels: LevelConfig[] = [
  { id: 1, cats: 3, enemies: 2 },
  { id: 2, cats: 3, enemies: 3 },
  { id: 3, cats: 4, enemies: 4 },
];
