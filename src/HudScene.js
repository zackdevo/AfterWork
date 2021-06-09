export class HudScene extends Phaser.Scene {
    constructor(){
        super('hud')
    }

    init(data){
        this.michel = data;
    }

    create(){
        let mem = this.add.image(50, 50, "memory");
        this.score = this.add.text(80, 35, this.michel.memories + "/5").setScale(1.5);        

    }
    update(){
        
        if (this.michel.memories === 0) {
            this.score.setText(this.michel.memories +"/5")
        } else if (this.michel.memories === 1) {
            this.score.setText(this.michel.memories +"/5")
        } else if (this.michel.memories === 2) {
            this.score.setText(this.michel.memories +"/5")
        } else if (this.michel.memories === 3) {
            this.score.setText(this.michel.memories +"/5")
        } else if (this.michel.memories === 4) {
            this.score.setText(this.michel.memories +"/5")
        } else if (this.michel.memories === 5) {
            this.score.setText(this.michel.memories +"/5")
        }
    }
}