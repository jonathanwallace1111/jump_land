import { StateManager } from "./StateManager.js";
import { ControlsManager } from "./ControlsManager.js";
import { PhysicsManager } from "./PhysicsManager.js";
import { GameObjectManager } from "./GameObjectManager.js";
import DojoManager from "./DojoManager.js";
import { LevelManager } from "./LevelManager.js";
import { Camera } from "./Camera.js";
import { RenderManager } from "./RenderManager.js";

export default class Game {
    constructor(ctx, reactContext) {

            this.ctx = ctx;
            this.state = new StateManager();
            this.controls = new ControlsManager();
            this.physicsEngine = new PhysicsManager();
            this.gameObjectManager = new GameObjectManager(this.ctx);
            this.dojo = new DojoManager(this.ctx);
            this.levelManager = new LevelManager(this.ctx);
            this.camera = new Camera();
        this.renderManager = new RenderManager(this.ctx);
            window.jlSystem = this;
    
        this.reactContext = reactContext;
    }

    init = () => {
        if (this.dojo?.createNewLevel) this.dojo.createNewLevel();
    }

    updateReactBridge = (reactBridge) => { this.reactBridge = reactBridge; }

    togglePause = () => {
        this.state.paused = !this.state.paused;

        if (this.state.paused) {
            this.pauseGame(); 
        } else if (!this.state.paused) {
            this.unpauseGame(); 
        }
    }

    pauseGame = () => {
        console.log("game.pauseGame()");

        this.reactBridge.setCurrentView(this.reactBridge.currentViewOptions.mainMenu); 
    }

    unpauseGame = () => {

    }

    updateControls = () => {

        this.controls.update(this.state.deltaTime);
    }

    update = () => {

        this.updateControls();

        if (!this.state.paused) {
            this.state.update();
            this.physicsEngine.update(this.state.deltaTime);
            this.gameObjectManager.update(this.state.deltaTime);
            this.camera.updatePosition();
        }
    }

    draw = () => {
        this.renderManager.draw();
    }

    gameLoop = () => {
        this.update();
        this.draw();
        requestAnimationFrame(this.gameLoop);
    }
}
