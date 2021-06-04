/** @type {import("../typings/phaser")} */

import { CreditsScene } from "./CreditsScene";
import { GameScene } from "./GameScene";
import { LoadScene } from "./LoadScene";
import { MenuScene } from "./MenuScene";
import { OpeningCutscene } from "./OpeningCutscene";
import { OptionsScene } from "./OptionsScene";
import { PauseMenu } from "./PauseMenu";

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    scene: [LoadScene, MenuScene, OptionsScene,OpeningCutscene, GameScene, CreditsScene ,PauseMenu],
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
}

var game = new Phaser.Game(config);