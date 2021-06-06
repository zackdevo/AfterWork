export class FifthMemory extends Phaser.Scene {
    constructor(){
        super('fifth_memory')
    }

    create(){
      let dialogue =  this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 150, "fifth_memory");
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