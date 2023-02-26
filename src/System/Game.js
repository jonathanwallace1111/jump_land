import { StateManager } from "./StateManager.js";
import { ControlsManager } from "./ControlsManager.js";
import { PhysicsManager } from "./PhysicsManager.js";
import { GameObjectManager } from "./GameObjectManager.js";
import { LevelManager } from "./LevelManager.js";

export default class Game {
    constructor() {
        this.state = new StateManager();
        this.controls = new ControlsManager();
        this.physicsEngine = new PhysicsManager();
        this.gameObjectManager = new GameObjectManager();
        this.levelManager = new LevelManager();
        window.jlSystem = this;
    }

    init = () => {
        this.levelManager.loadLevel()
    }

    updateControls = () => {
        this.controls.update();
    }

    update = () => {
        this.state.updateDeltaTime(); 
        this.updateControls();
        this.physicsEngine.update(); 
        this.gameObjectManager.update(this.state.deltaTime);
    }

    draw = () => {
        this.gameObjectManager.draw();
    }

    gameLoop = () => {
        this.update();
        this.draw();
    }
}
