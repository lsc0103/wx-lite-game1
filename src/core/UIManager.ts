export class UIManager {
  showMainMenu() {
    console.log('Showing main menu');
  }

  showLevelUI(catsLeft: number, level: number) {
    console.log(`Level ${level} - Cats left: ${catsLeft}`);
  }

  showResult(success: boolean) {
    console.log(success ? 'Success!' : 'Fail!');
  }
}
