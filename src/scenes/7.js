class scene7 extends Phaser.Scene {
   constructor() {
       super("scene7");
   }

   create() {
      this.add.sprite(1080/2, 720/2, "bg7");
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   }

   update() {
       if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
         this.scene.start('scene8');    
       }
   }
}