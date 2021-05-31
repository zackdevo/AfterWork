export class PauseMenu extends Phaser.Scene {
    constructor(){
        super('pause');
    }

    create(){
        this.menu =  this.add.sprite(this.game.renderer.width / 2, this.game.renderer.height / 2, 'pause').setVisible(true);
        this.resume =  this.add.sprite(this.menu.x, this.menu.y + 100, 'resume').setVisible(true);
        this.resume.setInteractive();
        this.resume.on('pointerup', () => {
            this.scene.stop();
            this.scene.resume('game');
        })
    }
}