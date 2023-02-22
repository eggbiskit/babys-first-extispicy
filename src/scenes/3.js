class scene3 extends Phaser.Scene {
   constructor() {
       super("scene3");
   }

   create() {
      this.add.sprite(1080/2, 720/2, "bg3");
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   }

   update() {
       if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
         this.scene.start('scene4');    
       }
   }
}