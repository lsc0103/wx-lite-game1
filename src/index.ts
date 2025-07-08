import { _decorator, Component } from 'cc';
import { GameManager } from './core/GameManager';
import { UIManager } from './core/UIManager';
import { Levels } from './levels/LevelData';

const { ccclass } = _decorator;

/**
 * Entry component for the demo project.
 *
 * Attach this script to a node in your scene to trigger the basic
 * bootstrap logic when the scene loads.
 */
@ccclass('Index')
export class Index extends Component {
  start() {
    const ui = new UIManager();
    const game = GameManager.instance;

    ui.showMainMenu();

    game.startLevel(Levels[0].id, Levels[0].cats);
    ui.showLevelUI(game.catsLeft, game.currentLevel);
  }
}

export default null;
