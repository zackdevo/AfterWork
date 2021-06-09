export class MenuScene extends Phaser.Scene {
    constructor() {
        super("menu")
    }

    preload() {
        
    }
    create() {
        // AFFICHAGE DU MENU APRES L'ECRAN DE CHARGEMENT
        this.add.image(0, 0, "menu_bg").setDepth(0).setOrigin(0, 0); // BACKGROUND
        this.add.image(this.game.renderer.width / 2 + 20, this.game.renderer.height / 4, "title").setDepth(1).setScale(0.9); // TITRE DU JEU
        let play_btn = this.add.image(this.game.renderer.width / 2, this.game.renderer.height / 2, "play").setDepth(1).setScale(0.8);
        let options_btn = this.add.image(this.game.renderer.width / 2, (this.game.renderer.height / 2) + 80, "options").setDepth(1).setScale(0.5);
        let credits_btn = this.add.image(this.game.renderer.width / 2, options_btn.y + 50, "credits").setDepth(1).setScale(0.5);

        // On créer le perso qui apparait au Hover des boutons et on le rend invisible wow
        let playerHover = this.add.sprite(this.game.renderer.width / 4, options_btn.y + 50, 'characters_json', 'michel130.png');
        playerHover.setScale(1).setVisible(false);
        // CONFIGURATION DE LA MUSIQUE DU MENU
        let music = this.sound.add("music", {
            mute: false,
            loop: true,
            volume : 0.2
        })
        music.play();
        // INTERACTIONS AVEC LES BOUTONS DU MENU

        // ######## BOUTON JOUER #########
        play_btn.setInteractive();

        play_btn.on('pointerover', () => {
            playerHover.setVisible(true);
            playerHover.play('walkdown');
            playerHover.y = play_btn.y;
            playerHover.x = play_btn.x - (play_btn.width/2.5);
        })

        play_btn.on('pointerout', () => {
            playerHover.setVisible(false);
        })
        // Quand on clique le bouton jouer
        play_btn.on('pointerup', () => {
            this.scene.start('cutscene', {music});
        })

        // ######## BOUTON OPTIONS #########
        options_btn.setInteractive();

        options_btn.on('pointerover', () => {
            playerHover.setVisible(true);
            playerHover.play('walkdown');
            playerHover.y = options_btn.y;
            playerHover.x = options_btn.x - (options_btn.width/2.5);
        })

        options_btn.on('pointerout', () => {
            playerHover.setVisible(false);
        })
        // Quand on clique le bouton options
        options_btn.on('pointerup', () => {
            this.scene.launch('options', {music, playerHover});
        })

        // ######## BOUTON CREDITS #########
        credits_btn.setInteractive();

        credits_btn.on('pointerover', () => {
            playerHover.setVisible(true);
            playerHover.play('walkdown');
            playerHover.y = credits_btn.y;
            playerHover.x = credits_btn.x - (credits_btn.width/2.5);
        })

        credits_btn.on('pointerout', () => {
            playerHover.setVisible(false);
        })
        // Quand on clique le bouton options
        credits_btn.on('pointerup', () => {
            this.scene.launch('credits');
        })
    }
}