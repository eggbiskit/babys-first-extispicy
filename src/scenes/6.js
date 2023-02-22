class scene6 extends Phaser.Scene {
   constructor() {
       super("scene6");
   }

   create() {
      this.add.sprite(1080/2, 720/2, "bg6");
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   }

   update() {
       if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
         this.scene.start('scene7');    
       }
   }
}