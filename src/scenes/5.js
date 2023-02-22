class scene5 extends Phaser.Scene {
   constructor() {
       super("scene5");
   }

   create() {
      this.add.sprite(1080/2, 720/2, "bg5");
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   }

   update() {
       if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
         this.scene.start('scene6');    
       }
   }
}