import Phaser from "phaser";

export default class TitleScreen extends Phaser.Scene {

  preload() {

  }

  create() {
    // Should add to a variable to access methods.
    const text = this.add.text(400,250, 'Async Week, Yes')
    text.setOrigin(0.5, 0.5)
  }
}
