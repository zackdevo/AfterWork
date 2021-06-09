export class EndingScene extends Phaser.Scene {
    constructor(){
        super('ending')
    }

    create(){
        // MAP
        let map = this.add.tilemap('mainMap');
        let terrain = map.addTilesetImage("terrain_atlas", "terrain");
        
        // CALQUE DE LA MAP
        map.createLayer("bot", [terrain], 0, 0).setDepth(-1);
        map.createLayer("top", [terrain], 0, 0);
        // MICHEL POS
        this.michel = this.add.sprite(640,372, 'characters_json', 'michel000.png');
        //JOHN
        this.john = this.add.sprite(590,250, 'characters_json', 'john000.png');
        this.cameras.main.startFollow(this.michel);
        this.john.play('turn');
        this.john.on("animationcomplete", () => {
            this.scene.pause();
            this.scene.launch('first_dialogue');
        })

    }
}