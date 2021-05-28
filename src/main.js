/** @type {import("../typings/phaser")} */

import { CreditsScene } from "./CreditsScene";
import { GameScene } from "./GameScene";
import { LoadScene } from "./LoadScene";
import { MenuScene } from "./MenuScene";
import { OpeningCutscene } from "./OpeningCutscene";
import { OptionsScene } from "./OptionsScene";

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    scene: [LoadScene, MenuScene,OptionsScene, CreditsScene,OpeningCutscene, GameScene],
    physics: {
        default: "arcade",
        arcade: {
            debug: true,
        }
    },
    render: {
        pixelArt: true
    },
    scale: {
        parent: "game-div",
        mode: Phaser.Scale.FIT,
        width: 800,
        height: 600
    },
    disableWebAudio: true,
}

var game = new Phaser.Game(config);