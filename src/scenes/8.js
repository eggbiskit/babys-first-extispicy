class scene8 extends Phaser.Scene {
   constructor() {
       super("scene8");
   }

   create() {
      this.add.sprite(1080/2, 720/2, "bg8");
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   }

   update() {
       if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
         this.scene.start('scene9');    
       }
   }
}