export class SecondDialogue extends Phaser.Scene {
    constructor(){
        super('second_dialogue')
    }

    create(){
        let dialogue =  this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 110, "second_dialogue");
        dialogue.setScale(0.6);
    }
    update(){
        let keyObj = this.input.keyboard.addKey('ENTER');
         if (keyObj.isDown === true) {
             this.scene.stop();
             this.scene.launch('third_dialogue');
         }
    }
}