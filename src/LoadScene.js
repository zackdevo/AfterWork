export class LoadScene extends Phaser.Scene {
    constructor() {
        super("load")
    }
    preload() {
        // On charge tout nos assests Images, SpriteSheets, audio dont on aura besoin pour le jeu
        this.load.image("menu_bg", "./dist/assets/title_bg.jpg");
        this.load.image("options", "./dist/assets/buttons/options_btn.png");
        this.load.image("play", "./dist/assets/buttons/play_btn.png");
        this.load.image("credits", "./dist/assets/buttons/credit_btn.png");
        this.load.image("title", "./dist/assets/game_title.png");
        // OPTIONS SCREEN
        this.load.image('close_btn', './dist/assets/buttons/close_btn.png');
        this.load.image('music_btn', './dist/assets/buttons/musique_btn.png');
        this.load.image('on_btn', './dist/assets/buttons/on_btn.png');
        this.load.image('off_btn', './dist/assets/buttons/off_btn.png');
        // CREDITS SCREEN
        this.load.image('devs', './dist/assets/buttons/devs.png');
        this.load.image('music_credits', './dist/assets/buttons/music_credits.png');
        this.load.image('pause', './dist/assets/buttons/pause_btn.png');
        this.load.image('resume', './dist/assets/buttons/resume_btn.png');
        this.load.image("thanks", "./dist/assets/buttons/remerciements.png");
        this.load.json('characters', "./dist/assets/characters.json");
        this.load.audio("music", "./dist/assets/audio/Atmosphere.mp3");

        // TOUT CE QUI CONCERNE LA MAP --
        this.load.image('terrain', './dist/assets/map/terrain_atlas.png');
        this.load.tilemapTiledJSON('mainMap', './dist/assets/map/mainMap.json');
        this.load.atlas("terrain_sprite", "./dist/assets/map/terrain_atlas.png","./dist/assets/map/terrain_sprite.json", Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        this.load.atlas("characters_json", "./dist/assets/characters.png","./dist/assets/characters.json", Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);
        // DIALOGUES
        this.load.image('first_memory', "./dist/assets/dialogues/first_memory.png");
        this.load.image('second_memory', "./dist/assets/dialogues/second_memory.png");
        this.load.image('third_memory', "./dist/assets/dialogues/third_memory.png");
        this.load.image('fourth_memory', "./dist/assets/dialogues/fourth_memory.png");
        this.load.image('fifth_memory', "./dist/assets/dialogues/fifth_memory.png");
        this.load.image('first_dialogue', "./dist/assets/dialogues/first_dialogue.png");
        this.load.image('second_dialogue', "./dist/assets/dialogues/second_dialogue.png");
        this.load.image('third_dialogue', "./dist/assets/dialogues/third_dialogue.png");
        this.load.image('fourth_dialogue', "./dist/assets/dialogues/fourth_dialogue.png");
        //HUD
        this.load.image('memory', "./dist/assets/hud/memory.png");
        // Creation de la barre de chargement 
        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff // Couleur de la barre de chargement
            }
        })

        // Evenements de chargement : Complete -> quand tout est charg?? & progression -> d??cimal de la progression
        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);
            // TEXTE LOADING POUR FAIRE STYLE TU CONNAIS
            let loading_text = this.add.text(320, 370, "Loading...");
            loading_text.setScale(1.5);
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

        //ANIMATION SE RETOURNE 
        this.anims.create({
            key : 'turn',
            delay: 1000,
            frameRate : 5,
            repeat : 0,
            frames : this.anims.generateFrameNames('characters_json', {
                frames : ["john000.png","john000.png","john001.png","john001.png","john247.png","john247.png","john130.png","john130.png",]
            })
        })

        // Le Menu se lance
        this.scene.start("menu");
    }
}