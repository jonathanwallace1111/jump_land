import { StateManager } from "./StateManager.js";
import { ControlsManager } from "./ControlsManager.js";
import { PhysicsManager } from "./PhysicsManager.js";
import { GameObjectManager } from "./GameObjectManager.js";
import DojoManager from "./DojoManager.js";
import { LevelManager } from "./LevelManager.js";
import { Camera } from "./Camera.js"; 
import { RenderManager } from "./RenderManager.js";
// import { BridgeObject } from "../../Bridge/BridgeObject.js"; 

export default class Game {
    constructor() {
        this.state = new StateManager();
        this.controls = new ControlsManager();
        this.physicsEngine = new PhysicsManager();
        this.gameObjectManager = new GameObjectManager();
        this.dojo = new DojoManager(); 
        this.levelManager = new LevelManager();
        this.camera = new Camera(); 
        this.renderManager = new RenderManager(); 
        // this.bridge = new BridgeObject(); 
        window.jlSystem = this;
    }

    init = () => {
        this.dojo.createNewLevel(); 
        // this.levelManager.loadLevel(1); 
        // this.state.init(); 
    }

    updateControls = () => {
        // if (this.state.inLevelBuilderMode) {
            // this.controls.levelBuilderUpdate(); 
        // } else {
            this.controls.update();
        // }
    }

    update = () => {

        // if (this.bridge.incomingBool) {
            // this.bridge.incoming(); 
        // }

        // if (this.bridge.outgoingBool) {
            // this.bridge.outgoing(); 
        // }

        // if (this.state.inLevelBuilderMode) {
        //     this.state.update(); 
        //     this.updateControls();
        //     this.gameObjectManager.update(this.state.deltaTime);
        //     this.camera.levelBuilderUpdate(); 
        // } else {
            this.state.update(); 
            this.updateControls();
            this.physicsEngine.update(); 
            this.gameObjectManager.update(this.state.deltaTime);
            this.camera.updatePosition(); 
        // }
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
