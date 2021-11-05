import Phaser from 'phaser';

// Config can actually be put into seperate file then imported
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500
}

const game = new Phaser.Game(config)



/* Game instance can be start from using class,
However, instead I will just use the 'new' keyword.
Class example
----------------
class Game extends Phaser.Game{
  constructor{
    //Config will be inserted into game instance
    super(config)
  }
}
*/
