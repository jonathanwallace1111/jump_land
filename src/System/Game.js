import { ControlsManager } from "./ControlsManager";
import { GameObjectManager } from "./GameObjectManager";
import { LevelManager } from "./LevelManager";

export class Game {
    constructor() {
        this.controls = new ControlsManager();
        this.gameObjectManager = new GameObjectManager();
        this.levelManager = new LevelManager();

        this.deltaTime = 0;

        window.jlSystem = this;
    }

    updateControls = () => {
        this.controls.update();
    }

    update = () => {
        gameObjectManager.update(this.deltaTime);
    }

    draw = () => {
        gameObjectManager.draw();
    }

    gameLoop = () => {
        this.deltaTime = deltaTime ?? 0;

        this.updateControls();
        this.update();
        this.draw();
    }
}