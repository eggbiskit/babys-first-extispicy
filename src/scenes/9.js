class scene9 extends Phaser.Scene {
   constructor() {
       super("scene9");
   }

   create() {
      this.add.sprite(1080/2, 720/2, "bg9");
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   }

   update() {
       if (Phaser.Input.Keyboard.JustDown(keySPACE)) {
         this.scene.start('scene10');    
       }
   }
}