import { StateManager } from "./StateManager.js";
import { ControlsManager } from "./ControlsManager.js";
import { PhysicsManager } from "./PhysicsManager.js";
import { GameObjectManager } from "./GameObjectManager.js";
import { LevelManager } from "./LevelManager.js";
import { Camera } from "./Camera.js"; 
import { RenderManager } from "./RenderManager.js";

export default class Game {
    constructor() {
        this.state = new StateManager();
        this.controls = new ControlsManager();
        this.physicsEngine = new PhysicsManager();
        this.gameObjectManager = new GameObjectManager();
        this.levelManager = new LevelManager();
        this.camera = new Camera(); 
        this.renderManager = new RenderManager(); 
        window.jlSystem = this;
    }

    init = () => {
        this.levelManager.loadLevel()
    }

    updateControls = () => {
        if (this.state.inLevelBuilderMode) {
            this.controls.levelBuilderUpdate(); 
        } else {
            this.controls.update();
        }
    }

    update = () => {
        if (this.state.inLevelBuilderMode) {
            this.updateControls();
            this.gameObjectManager.update(this.state.deltaTime);
            this.camera.levelBuilderUpdate(); 
        } else {
            this.state.updateDeltaTime(); 
            this.updateControls();
            this.physicsEngine.update(); 
            this.gameObjectManager.update(this.state.deltaTime);
            this.camera.updatePosition(); 
        }
    }

    draw = () => {

        this.renderManager.draw(); 
        // this.gameObjectManager.draw();
    }

    gameLoop = () => {
        this.update();
        this.draw();
    }
}
