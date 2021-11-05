import Phaser from 'phaser';
import TitleScreen from './scenes/TitleScreen';
import TestPhysics from './scenes/TestPhysics';
// Config can actually be put into seperate file then imported
const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 500
}

/* game is now the instance, so if we do 'game.scene.'
we can access scene's method from phaser */
const game = new Phaser.Game(config)

game.scene.add('TitleScreen', TitleScreen)
game.scene.add('TestPhysics', TestPhysics)

//takes in a key to start
game.scene.start('TestPhysics')


/* Game instance can be start from using class,
However, instead I will just use the 'new' keyword.
Class example
----------------
import 'phaser'
import config from ....whateverpath it's in
import exampleScene from ....whateverpaths it's in

class Game extends Phaser.Game{
  constructor{
    // Config will be inserted into game instance
    super(config)
    // Imported Scenes goes under
    // this.scene.add('key here, can be the name of scene', exampleScene)
  }
}
window.onload = function() {
  window.game = new Game();
}
*/
