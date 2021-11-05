import Phaser from "phaser";

export default class TestPhysics extends Phaser.Scene {

  preload() {
    // Things to load/preload before actual scene is created.
    // For Example, Assets like pictures or loading screen.
  }

  create() {
    const text = this.add.text(400,250, 'Testing Physics ');
    text.setOrigin(0.5, 0.5);
    // Adding Circle Object
    const circleObj = this.add.circle(400, 150, 10, 0xffffff, 1)
    this.physics.add.existing(circleObj)
    // Adding A Rectangle Object As Platform
    const rectangleObj = this.add.rectangle(400, 300, 200, 20, 0xffffff, 1)
    this.physics.add.existing(rectangleObj, true)

    // Adding Collision function
    this.physics.add.collider(rectangleObj, circleObj)
  }
}
