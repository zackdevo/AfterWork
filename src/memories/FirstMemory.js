export class FirstMemory extends Phaser.Scene {
    constructor(){
        super('first_memory')
    }

    create(){
      let dialogue =  this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 100, "first_memory");
      dialogue.setScale(0.6);
    }
    update(){
        var keyObj = this.input.keyboard.addKey('ENTER');
         if (keyObj.isDown === true) {
             this.scene.stop();
             this.scene.resume('game');
         }
    }
}