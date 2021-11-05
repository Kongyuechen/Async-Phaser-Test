import Phaser from "phaser";

export default class TestPhysics extends Phaser.Scene {

  preload() {
    // Things to load/preload before actual scene is created.
    // For Example, Assets like pictures or loading screen.
  }

  create() {
    const text = this.add.text(400,250, 'Testing Physics ');
    text.setOrigin(0.5, 0.5);
    // Adding object
    this.add.circle(400, 150, 10, 0xffffff, 1)
  }
}
