export class GameManager {
  private static _instance: GameManager;
  public currentLevel = 0;
  public catsLeft = 0;

  static get instance(): GameManager {
    if (!this._instance) {
      this._instance = new GameManager();
    }
    return this._instance;
  }

  startLevel(level: number, cats: number) {
    this.currentLevel = level;
    this.catsLeft = cats;
    console.log(`Starting level ${level} with ${cats} cats`);
    // TODO: load level data and initialize entities
  }

  onCatUsed() {
    this.catsLeft -= 1;
    if (this.catsLeft <= 0) {
      this.failLevel();
    }
  }

  onEnemyDefeated() {
    // TODO: check if all enemies are defeated
  }

  completeLevel() {
    console.log(`Level ${this.currentLevel} complete`);
    // TODO: handle rewards and progression
  }

  failLevel() {
    console.log(`Level ${this.currentLevel} failed`);
    // TODO: show retry UI
  }
}
