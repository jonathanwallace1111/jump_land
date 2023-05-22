import p5 from 'p5';

import { StateManager } from "./StateManager.js";
import { ControlsManager } from "./ControlsManager.js";
import { PhysicsManager } from "./PhysicsManager.js";
import { GameObjectManager } from "./GameObjectManager.js";
import DojoManager from "./DojoManager.js";
import { LevelManager } from "./LevelManager.js";
import { Camera } from "./Camera.js";
import { RenderManager } from "./RenderManager.js";
// import { BridgeObject } from "../../Bridge/BridgeObject.js"; 
import DojoBridgeObject from '../../Bridge/DojoBridgeObject.js';

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
            // this.bridge = new BridgeObject(); 
            // this.bridge = new DojoBridgeObject(); 
            window.jlSystem = this;
    
            this.reactContext = reactContext;

        // this.setCurrentView = setCurrentView; 
    }

    init = () => {
        if (this.dojo?.createNewLevel) this.dojo.createNewLevel();
        // this.levelManager.loadLevel(1); 
        // this.state.init(); 
    }

    updateReactBridge = (reactBridge) => { this.reactBridge = reactBridge; }

    togglePause = () => {
        this.state.paused = !this.state.paused;

        if (this.state.paused) {
            // console.log("game.togglepause puase conditional");
            this.pauseGame(); 
        } else if (!this.state.paused) {
            this.unpauseGame(); 
        }
    }

    pauseGame = () => {
        //this.bridge.pauseGame(); 
        console.log("game.pauseGame()");

        this.reactBridge.setCurrentView(this.reactBridge.currentViewOptions.mainMenu); 
    }

    unpauseGame = () => {
        //this.bridge.unpauseGame(); 
    }

    updateControls = () => {
        // if (this.state.inLevelBuilderMode) {
        // this.controls.levelBuilderUpdate(); 
        // } else {
        this.controls.update(this.state.deltaTime);
        // }
    }

    update = () => {

        // if (this.state.inLevelBuilderMode) {
        //     this.state.update(); 
        //     this.updateControls();
        //     this.gameObjectManager.update(this.state.deltaTime);
        //     this.camera.levelBuilderUpdate(); 
        // } else {

        this.updateControls();

        if (!this.state.paused) {
            this.state.update();
            this.physicsEngine.update(this.state.deltaTime);
            this.gameObjectManager.update(this.state.deltaTime);
            this.camera.updatePosition();
        }
        // }

        // console.log("game.update")
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
