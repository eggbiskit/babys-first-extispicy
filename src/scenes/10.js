class scene10 extends Phaser.Scene {
   constructor() {
       super("scene10");
   }

   create() {
      this.add.sprite(1080/2, 720/2, "bg10");
      keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
   }
}