export class EndCredits extends Phaser.Scene {
    constructor(){
        super('endCredits')
    }
    create(){
        this.add.image(this.game.renderer.width / 2, 100, "thanks").setDepth(1);
        this.add.image(0, 0, "menu_bg").setDepth(0).setOrigin(0, 0); // BACKGROUND
        this.add.image(this.game.renderer.width / 4, this.game.renderer.height / 2, 'devs').setScale(0.5);
        this.add.image(this.game.renderer.width - 200, this.game.renderer.height / 2 - 16.5, 'music_credits').setScale(0.5);
    }
}