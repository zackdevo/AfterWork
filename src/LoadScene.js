export class LoadScene extends Phaser.Scene {
    constructor() {
        super("load")
    }
    preload() {
        // On charge tout nos assests Images, SpriteSheets, audio dont on aura besoin pour cette scene
        this.load.image("menu_bg", "./assets/title_bg.jpg");
        this.load.image("options", "./assets/buttons/options_btn.png");
        this.load.image("play", "./assets/buttons/play_btn.png");
        this.load.image("credits", "./assets/buttons/credit_btn.png");
        this.load.image("title", "./assets/game_title.png");
        this.load.spritesheet("characters", "./assets/characters.png", {
            frameWidth: 64,
            frameHeight: 64
        })
        this.load.atlas("characters_json", "./assets/characters.png","./assets/characters.json", Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        this.load.json('characters', "./assets/characters.json");
        this.load.audio("music", "./assets/audio/Atmosphere.mp3");
        // Creation de la barre de chargement 

        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff // Couleur de la barre de chargement
            }
        })

        // Evenements de chargement : Complete -> quand tout est chargé & progression -> décimal de la progression
        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            // TEXTE LOADING POUR FAIRE STYLE TU CONNAIS 
            let loading_text = this.add.text(10, 10, "LOADING...");
            loading_text.setScale(1);
        })


    }

    create() {

        this.scene.start("menu");
    }
}