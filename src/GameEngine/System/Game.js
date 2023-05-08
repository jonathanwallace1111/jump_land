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

export default class Game {
    constructor(ctx) {
        this.ctx = ctx; 
        this.state = new StateManager();
        this.controls = new ControlsManager();
        this.physicsEngine = new PhysicsManager();
        this.gameObjectManager = new GameObjectManager(this.ctx);
        this.dojo = new DojoManager(this.ctx); 
        this.levelManager = new LevelManager();
        this.camera = new Camera(); 
        this.renderManager = new RenderManager(this.ctx); 
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
