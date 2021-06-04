import {MenuScene} from './MenuScene';
export class OptionsScene extends Phaser.Scene {

    constructor(){
        super("options")
    }

    init(data){
        this.music = data.music;
    }

    create(){
        this.add.image(0, 0, "menu_bg").setDepth(0).setOrigin(0, 0); // BACKGROUND
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 4, 'options').setScale(1);
        let music_btn =  this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "music_btn").setScale(0.8);
        let close_btn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height - 100, 'close_btn').setScale(1); // BTN RETOUR
        let on_btn = this.add.image(music_btn.x - 100, music_btn.y + 75, "on_btn").setScale(0.5);
        let off_btn = this.add.image(music_btn.x + 100, music_btn.y + 75, "off_btn").setScale(0.5);
        let playerHover = this.add.sprite(this.game.renderer.width / 4, on_btn.y + 50, 'characters_json', 'michel130.png');
        playerHover.setVisible(false);

        // PARAMETRAGE BUTTON RETOUR
        close_btn.setScale(0.5);
        close_btn.setInteractive();
        // RETOURNER AU MENU
        close_btn.on('pointerup', () => {
            this.scene.stop('options');
        } )
        on_btn.setInteractive();
        off_btn.setInteractive();

        on_btn.on('pointerup', () => {
            this.music.resume();    
        })
        on_btn.on('pointerover', () => {
            playerHover.setVisible(true);
            playerHover.play("walkdown");
            playerHover.y = on_btn.y - 10;
            playerHover.x = on_btn.x - 50;
        })
        on_btn.on('pointerout', () => {
            playerHover.setVisible(false);
        })
        off_btn.on('pointerup', () => {
            this.music.pause();
        })
        off_btn.on('pointerover', () => {
            playerHover.setVisible(true);
            playerHover.play("walkdown");
            playerHover.y = off_btn.y - 10;
            playerHover.x = off_btn.x - 50;
        })
        off_btn.on('pointerout', () => {
            playerHover.setVisible(false);
        })
    }
}