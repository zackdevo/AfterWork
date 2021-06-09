/** @type {import("../typings/phaser")} */

import { CreditsScene } from "./CreditsScene";
import { FirstDialogue } from "./dialogues/FirstDialogue";
import { SecondDialogue } from "./dialogues/SecondDialogue";
import { ThirdDialogue } from "./dialogues/ThirdDialogue";
import { FourthDialogue } from "./dialogues/FourthDialogue";
import { EndingScene } from "./EndingScene";
import { GameScene } from "./GameScene";
import { HudScene } from "./HudScene";
import { LoadScene } from "./LoadScene";
import { FifthMemory } from "./memories/FifthMemory";
import { FirstMemory } from "./memories/FirstMemory";
import { FourthMemory } from "./memories/FourthMemory";
import { SecondMemory } from "./memories/SecondMemory";
import { ThirdMemory } from "./memories/ThirdMemory";
import { MenuScene } from "./MenuScene";
import { OpeningCutscene } from "./OpeningCutscene";
import { OptionsScene } from "./OptionsScene";
import { PauseMenu } from "./PauseMenu";
import { EndCredits } from "./EndCredits";

const config = {
    width: 800,
    height: 600,
    type: Phaser.AUTO,
    scene: [LoadScene, MenuScene, OptionsScene,OpeningCutscene, GameScene, CreditsScene ,PauseMenu, FirstMemory, SecondMemory, ThirdMemory, FourthMemory, FifthMemory,HudScene,EndingScene,FirstDialogue,SecondDialogue,ThirdDialogue,FourthDialogue,EndCredits],
    physics: {
        default: "arcade",
    },
    scale: {
        parent: "game-div",
        mode: Phaser.Scale.FIT,
        width: 800,
        height: 600
    },
}

var game = new Phaser.Game(config);