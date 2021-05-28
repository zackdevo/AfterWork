export class OpeningCutscene extends Phaser.Scene {
    constructor(){
        super('cutscene');
    }

    create(){
        this.michel = this.add.sprite(this.game.renderer.width/2,this.game.renderer.height/2, 'characters_json', 'michel265.png');
        this.michel.play("wakeup");
        this.michel.on("animationcomplete", () => {
        this.scene.start('game');
        })
    }
}