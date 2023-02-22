class title extends Phaser.Scene {
   constructor() {
       super("titleScene");
   }

   preload() {
      this.load.image('titlebg', './assets/bg/title.png');
      this.load.image('bg1', './assets/bg/1.png');
      this.load.image('bg2', './assets/bg/2.png');
      this.load.image('bg3', './assets/bg/3.png');
      this.load.image('bg4', './assets/bg/4.png');
      this.load.image('bg5', './assets/bg/5.png');
      this.load.image('bg6', './assets/bg/6.png');
      this.load.image('bg7', './assets/bg/7.png');
      this.load.image('bg8', './assets/bg/8.png');
      this.load.image('bg9', './assets/bg/9.png');
      this.load.image('bg10', './assets/bg/10.png');
   }

   create() {
      this.add.sprite(1080/2, 720/2, "titlebg");
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   }

   update() {
      if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
         this.scene.start('scene1'); 
      }
   }
}