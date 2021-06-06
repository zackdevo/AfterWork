export class OpeningCutscene extends Phaser.Scene {
    constructor(){
        super('cutscene');
    }
    init(data){
        this.music = data.music;
    }

    create(){
        this.michel = this.physics.add.sprite(650,1945, 'characters_json', 'michel265.png').setDepth(1);
        // MAP
        let map = this.add.tilemap('mainMap');
        let terrain = map.addTilesetImage("terrain_atlas", "terrain");
        // CAMERA SUIT LE JOUEUR
        this.cameras.main.startFollow(this.michel);
        // DELIMITER LES BORDURES DU JEU PAR RAPPORT A LA MAP
        this.physics.world.setBounds(0,0, map.widthInPixels, map.heightInPixels);
        // CALQUE DE LA MAP
        let botLayer = map.createLayer("bot", [terrain], 0, 0).setDepth(-1);
        let topLayer = map.createLayer("top", [terrain], 0, 0);
        this.michel.play("wakeup");
        this.michel.on("animationcomplete", () => {
        this.scene.start('game', this.music);
        })
    }
}