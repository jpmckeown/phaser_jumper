import Phaser from "../lib/phaser.js";
export default class Game extends Phaser.Scene
{
  /** @type {Phaser.Physics.Arcade.Sprite} */
  player

  constructor() {
    super('game');
  }
  preload() {
    this.load.image('background', 'assets/bg_layer1.png');
    this.load.image('platform', 'assets/tile_ground.png');
    this.load.image('player-stand', 'assets/sheep_normal.png');
  }
  create() {
    this.add.image(240, 320, 'background');
    this.add
    const platforms = this.physics.add.staticGroup();

    for (let i = 0; i < 5; ++i){

      const x = Phaser.Math.Between(80, 400);
      const y = 20 + 150 * i;

      /** @type {Phaser.Physics.Arcade.Sprite} */
      const platform = platforms.create(x, y, 'platform')
      platform.scaleX = 4.0
      platform.scaleY = 0.5

      /** @type {Phaser.Physics.Arcade.StaticBody} */
      const body = platform.body
      body.updateFromGameObject()
    }
    
    this.player = this.physics.add.sprite(240, 240, 'player-stand');
    this.physics.add.collider(platforms, this.player);
  }

  update() {
    const touchingDown = this.player.body.touching.down
    if (touchingDown) {
      this.player.setVelocityY(-300)
    }
  }
}