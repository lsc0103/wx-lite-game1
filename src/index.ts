import { GameManager } from './core/GameManager';
import { UIManager } from './core/UIManager';
import { Levels } from './levels/LevelData';

const ui = new UIManager();
const game = GameManager.instance;

ui.showMainMenu();

game.startLevel(Levels[0].id, Levels[0].cats);
ui.showLevelUI(game.catsLeft, game.currentLevel);
