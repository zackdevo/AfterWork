export class CreditsScene extends Phaser.Scene {
    constructor(){
        super('credits');
    }

    create(){
        this.add.image(0, 0, "menu_bg").setDepth(0).setOrigin(0, 0); // BACKGROUND
        this.add.image(this.game.renderer.width / 4, this.game.renderer.height / 2, 'devs').setScale(0.5);
        this.add.image(this.game.renderer.width - 200, this.game.renderer.height / 2 - 16.5, 'music_credits').setScale(0.5);
        let close_btn = this.add.image(this.game.renderer.width / 2 , this.game.renderer.height - 100, 'close_btn').setScale(1); // BTN RETOUR
        // PARAMETRAGE BUTTON RETOUR
        close_btn.setScale(0.5);
        close_btn.setInteractive();
        // RETOURNER AU MENU
        close_btn.on('pointerup', () => {
            this.scene.stop('credits');
        } )
    }
}