export class FourthDialogue extends Phaser.Scene {
    constructor(){
        super('fourth_dialogue')
    }

    create(){
        let dialogue =  this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 110, "fourth_dialogue");
        dialogue.setScale(0.6);
    }
    update(){
        let keyObj = this.input.keyboard.addKey('ENTER');
         if (keyObj.isDown === true) {
             this.scene.stop("ending");
             this.scene.stop();
             this.scene.start('endCredits');
         }
    }
}