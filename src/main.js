let config = {
   type: Phaser.CANVAS,
   width: 1080,
   height: 720,
   autoCenter: Phaser.Scale.Center.CENTER_BOTH,
   scene: [ title, scene1, scene2, scene3, scene4, scene5, scene6, scene7, scene8, scene9, scene10 ]
}
 
let game = new Phaser.Game(config);
let keySPACE;