export class LoadScene extends Phaser.Scene {
    constructor() {
        super("load")
    }
    preload() {
        // On charge tout nos assests Images, SpriteSheets, audio dont on aura besoin pour le jeu
        this.load.image("menu_bg", "./assets/title_bg.jpg");
        this.load.image("options", "./assets/buttons/options_btn.png");
        this.load.image("play", "./assets/buttons/play_btn.png");
        this.load.image("credits", "./assets/buttons/credit_btn.png");
        this.load.image("title", "./assets/game_title.png");
        this.load.spritesheet("characters", "./assets/characters.png", {
            frameWidth: 64,
            frameHeight: 64
        })
        // OPTIONS SCREEN
        this.load.image('close_btn', './assets/buttons/close_btn.png');
        this.load.image('music_btn', './assets/buttons/musique_btn.png');
        this.load.image('on_btn', './assets/buttons/on_btn.png');
        this.load.image('off_btn', './assets/buttons/off_btn.png');
        // CREDITS SCREEN
        this.load.image('devs', './assets/buttons/devs.png');
        this.load.image('music_credits', './assets/buttons/music_credits.png');
        this.load.image('pause', './assets/buttons/pause_btn.png');
        this.load.image('resume', './assets/buttons/resume_btn.png');
        this.load.atlas("characters_json", "./assets/characters.png","./assets/characters.json", Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        this.load.json('characters', "./assets/characters.json");
        this.load.audio("music", "./assets/audio/Atmosphere.mp3");

        // TOUT CE QUI CONCERNE LA MAP --
        this.load.image('terrain', './assets/map/terrain_atlas.png');
        this.load.tilemapTiledJSON('map', './assets/map/map.json');
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
            let loading_text = this.add.text(320, 370, "LOADING...");
            loading_text.setScale(2);
        })

    }

    create() {
        // ANIMATION MARCHE VERS LE BAS MICHEL
        this.anims.create({
            key : 'walkdown',
            frameRate : 15,
            repeat : -1,
            frames : this.anims.generateFrameNames('characters_json', {
                frames : ['michel130.png','michel131.png', 'michel132.png','michel133.png','michel134.png','michel135.png','michel136.png','michel137.png','michel138.png',]
            })
        })
        // ANIMATION MARCHE VERS LE HAUT
        this.anims.create({
            key : 'walkup',
            frameRate : 15,
            repeat : -1,
            frames : this.anims.generateFrameNames('characters_json', {
                frames : ['michel104.png','michel105.png', 'michel106.png','michel107.png','michel108.png','michel109.png','michel110.png','michel111.png','michel112.png',]
            })
        })
        // ANIMATION MARCHE VERS LA GAUCHE
        this.anims.create({
            key : 'walkleft',
            frameRate : 15,
            repeat : -1,
            frames : this.anims.generateFrameNames('characters_json', {
                frames : ['michel117.png','michel118.png', 'michel119.png','michel120.png','michel121.png','michel122.png','michel123.png','michel124.png','michel125.png']
            })
        })
        // ANIMATION MARCHE VERS LA DROITE
        this.anims.create({
            key : 'walkright',
            frameRate : 15,
            repeat : -1,
            frames : this.anims.generateFrameNames('characters_json', {
                frames : ['michel143.png','michel144.png', 'michel145.png','michel146.png','michel147.png','michel148.png','michel149.png','michel150.png','michel151.png']
            })
        })
        // ANIMATION PETITE DANSE 
        this.anims.create({
            key : 'dance',
            frameRate : 10,
            repeat : -1,
            frames : this.anims.generateFrameNames('characters_json', {
                frames : ['michel182.png','michel183.png', 'michel184.png','michel185.png','michel186.png','michel187.png','michel026.png','michel027.png','michel028.png','michel029.png','michel030.png','michel031.png','michel031.png','michel044.png','michel043.png','michel042.png','michel041.png' ]
            })
        })

        // ANIMATION REVEIL
        this.anims.create({
            key : 'wakeup',
            delay: 2000,
            frameRate : 10,
            repeat : 0,
            frames : this.anims.generateFrameNames('characters_json', {
                frames : ['michel265.png','michel265.png','michel264.png', 'michel264.png','michel263.png','michel263.png','michel262.png','michel262.png','michel261.png','michel261.png','michel260.png','michel260.png']
            })
        })
        // Le Menu se lance
        this.scene.start("menu");
    }
}