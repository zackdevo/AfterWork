export class GameScene extends Phaser.Scene {
    constructor(){
        super("game")
    }

    init(data){
        this.music = data;
    }

    create(){
        this.michel = this.physics.add.sprite(650,1945, 'characters_json', 'michel260.png');
        this.keyboard = this.input.keyboard.addKeys('UP,DOWN,LEFT,RIGHT');
        // Hitbox de michel yea
        this.michel.setSize(45,60);
        this.michel.setCollideWorldBounds(true);

        //Custom Property pour le joueur 
        this.michel.memories = 0;

        let map = this.add.tilemap('mainMap');
        let terrain = map.addTilesetImage("terrain_atlas", "terrain");
        // CALQUE DE LA MAP
        let botLayer = map.createLayer("bot", [terrain], 0, 0).setDepth(-1);
        let topLayer = map.createLayer("top", [terrain], 0, 0);

        // COLLISIONS
        this.physics.add.collider(this.michel, topLayer);
        topLayer.setCollisionByProperty({collides:true});
        // EVENTS EN COLLISIONS COLLECT MEMORIES
        // SUR LES 5 SOUVENIRS
            // 1ER
            topLayer.setTileLocationCallback(7,62, 1,1, () => {
                if (this.michel.memories === 0) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('first_memory');
                } else if (this.michel.memories === 1) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('second_memory');
                } else if (this.michel.memories === 2) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('third_memory');
                } else if (this.michel.memories === 3) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('fourth_memory');
                } else if (this.michel.memories === 4) {
                    this.scene.pause();
                    this.scene.launch('fifth_memory');
                }
                topLayer.setTileLocationCallback(7,62, 1,1, null);
            });
            // SECOND
            topLayer.setTileLocationCallback(30,62, 1,1, () => {
                if (this.michel.memories === 0) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('first_memory');
                } else if (this.michel.memories === 1) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('second_memory');
                } else if (this.michel.memories === 2) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('third_memory');
                } else if (this.michel.memories === 3) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('fourth_memory');
                } else if (this.michel.memories === 4) {
                    this.scene.pause();
                    this.scene.launch('fifth_memory');
                }
                topLayer.setTileLocationCallback(30,62, 1,1, null);
            });
            // TROISIEME
            topLayer.setTileLocationCallback(20,45, 1,1, () => {
                if (this.michel.memories === 0) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('first_memory');
                } else if (this.michel.memories === 1) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('second_memory');
                } else if (this.michel.memories === 2) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('third_memory');
                } else if (this.michel.memories === 3) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('fourth_memory');
                } else if (this.michel.memories === 4) {
                    this.scene.pause();
                    this.scene.launch('fifth_memory');
                }
                topLayer.setTileLocationCallback(20,45, 1,1, null);
            });
            // QUATRIEME
            topLayer.setTileLocationCallback(10,34, 1,1, () => {
                if (this.michel.memories === 0) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('first_memory');
                } else if (this.michel.memories === 1) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('second_memory');
                } else if (this.michel.memories === 2) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('third_memory');
                } else if (this.michel.memories === 3) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('fourth_memory');
                } else if (this.michel.memories === 4) {
                    this.scene.pause();
                    this.scene.launch('fifth_memory');
                }
                topLayer.setTileLocationCallback(10,34, 1,1, null);
            });
            // CINQUIEME
            topLayer.setTileLocationCallback(28,32, 1,1, () => {
                if (this.michel.memories === 0) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('first_memory');
                } else if (this.michel.memories === 1) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('second_memory');
                } else if (this.michel.memories === 2) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('third_memory');
                } else if (this.michel.memories === 3) {
                    this.michel.memories += 1;
                    this.scene.pause();
                    this.scene.launch('fourth_memory');
                } else if (this.michel.memories === 4) {
                    this.scene.pause();
                    this.scene.launch('fifth_memory');
                }
                topLayer.setTileLocationCallback(28,32, 1,1, null);
            });
        

        // CAMERA SUIT LE JOUEUR
        this.cameras.main.startFollow(this.michel);
        // DELIMITER LES BORDURES DU JEU PAR RAPPORT A LA MAP
        this.physics.world.setBounds(0,0, map.widthInPixels, map.heightInPixels);
    }

    update(){
        // ###### DEPLACEMENT JOUEUR #######
        // marche vers la gauche 
        if (this.keyboard.LEFT.isDown === true) {
            this.michel.setVelocityX(-150);
        }
        // vers la droite
        if (this.keyboard.RIGHT.isDown === true) {
            this.michel.setVelocityX(+150);
        }
        // RESET SI ON APPUIE SUR NI GAUCHE NI DROITE
        if (this.keyboard.LEFT.isUp === true && this.keyboard.RIGHT.isUp === true ) {
            this.michel.setVelocityX(0);
        }
        // VERS LE HAUT
        if (this.keyboard.UP.isDown === true) {
            this.michel.setVelocityY(-150);
        }
        // VERS LE BAS
        if (this.keyboard.DOWN.isDown === true) {
            this.michel.setVelocityY(+150);

            // FAIRE RAYTRACING DANS LES OPTIONS
        }
        // RESET SI ON APPUIE SUR NI HAUT NI BAS
        if (this.keyboard.UP.isUp === true && this.keyboard.DOWN.isUp === true ) {
            this.michel.setVelocityY(0);
        }

        // ANIMATIONS POUR MULTIDIRECTION
        if (this.michel.body.velocity.x > 0 ) { // Si on bouge vers la droite, l'animation vers la droite se joue et ainsi de suite
            this.michel.play("walkright", true);
        } else if (this.michel.body.velocity.x < 0 ) {
            this.michel.play('walkleft', true);
        } else if (this.michel.body.velocity.y < 0 ) {
            this.michel.play('walkup', true);
        } else if (this.michel.body.velocity.y > 0 ) {
            this.michel.play('walkdown', true);
        } else if (this.michel.body.velocity.y === 0 && this.michel.body.velocity.x === 0) { // Si on ne bouge plus, l'animation s'arrete 
            this.michel.anims.stop();
        }
        
        // METTRE EN PAUSE
        var keyObj = this.input.keyboard.addKey('P');
         if (keyObj.isDown === true) {
             this.music.pause();
             this.scene.pause();
             this.scene.launch('pause', this.music);
         }
    }   
}