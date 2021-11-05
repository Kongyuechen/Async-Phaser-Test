import Phaser from "phaser";

export default class TestPhysics extends Phaser.Scene {

  preload() {
    // Things to load/preload before actual scene is created.
    // For Example, Assets like pictures or loading screen.
  }

  create() {
    // Adding Text To Middle Of Screen
    const text = this.add.text(400,250, 'Testing Physics ');
    text.setOrigin(0.5, 0.5);
    // Adding Circle Object
    this.circleObj = this.add.circle(400, 150, 10, 0xffffff, 1)
    this.physics.add.existing(this.circleObj)
    this.circleObj.body.setCollideWorldBounds(true)
    // Adding A Rectangle Object As Platform
    const rectangleObj = this.add.rectangle(400, 300, 200, 20, 0xffffff, 1)
    this.physics.add.existing(rectangleObj, true)

    // Adding Collision Function
    this.physics.add.collider(rectangleObj, this.circleObj)

    // Keyboard Plugin
    this.cursors = this.input.keyboard.createCursorKeys()
  }

  update() {
    if(this.cursors.space.isDown){
      // this.circleObj.StaticBody.setVelocityY(-100)
      this.circleObj.y -= 10
    }else if (this.cursors.left.isDown){
      this.circleObj.x -= 10

      // this.circleObj.StaticBody.setVelocityX(-100)
    }else if (this.cursors.right.isDown){
      this.circleObj.x += 10

      // this.circleObj.StaticBody.setVelocityX(100)
    }
  }
}
