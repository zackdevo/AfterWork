import { Game } from "phaser";

export class GameScene extends Phaser.Scene {
    constructor(){
        super("game")
    }

    preload(){

    }

    create(){
        this.michel = this.physics.add.sprite(this.game.renderer.width/2,this.game.renderer.height/2, 'characters_json', 'michel260.png');
        this.keyboard = this.input.keyboard.addKeys('UP,DOWN,LEFT,RIGHT');
        // Hitbox de michel yea
        this.michel.setSize(45,60);
        this.michel.setCollideWorldBounds(true);
    }

    update(){
        // ###### DEPLACEMENT JOUEUR #######
        // marche vers la gauche 
        if (this.keyboard.LEFT.isDown === true) {
            this.michel.setVelocityX(-64);
        }
        // vers la droite
        if (this.keyboard.RIGHT.isDown === true) {
            this.michel.setVelocityX(+64);
        }
        // RESET SI ON APPUIE SUR NI GAUCHE NI DROITE
        if (this.keyboard.LEFT.isUp === true && this.keyboard.RIGHT.isUp === true ) {
            this.michel.setVelocityX(0);
        }
        // VERS LE HAUT
        if (this.keyboard.UP.isDown === true) {
            this.michel.setVelocityY(-64);
        }
        // VERS LE BAS
        if (this.keyboard.DOWN.isDown === true) {
            this.michel.setVelocityY(+64);
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
             console.log('Switch scenes');
             this.scene.pause();
             this.scene.launch('pause');
         }
    }   
}