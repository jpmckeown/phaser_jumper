import Phaser from "../lib/phaser.js";
export default class Game extends Phaser.Scene
{
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
    const platforms = this.physics.add.staticGroup();

    for (let i = 0; i < 5; ++i){
      const x = Phaser.Math.Between(80, 400);
      const y = 150 * i;

      /** @type {Phaser.Physics.Arcade.Sprite} */
      const platform = platforms.create(x, y, 'platform')

      /** @type {Phaser.Physics.Arcade.StaticBody} */
      const body = platform.body
      body.updateFromGameObject()
    }
    
    const player = this.physics.add.sprite(240, 320, 'player-stand');
    this.physics.add.collider(platforms, player);
  }
}