import { StateManager } from "./StateManager.js"; 
import { ControlsManager } from "./ControlsManager.js";
import { ColorObject } from "./ColorObject.js"; 
import { PhysicsManager } from "./PhysicsManager.js";

import { Protagonist } from "../ObjectClasses/Protagonist.js"; 
import { Level_1 } from "../Levels/Level_1.js"
import { GameBackground } from "../GameAssets/GameBackground.js";

// import { GameObjectManager } from "./GameObjectManager.js";
// import { LevelManager } from "./LevelManager.js";
// import { RenderManager } from "./RenderManager.js"; 

export default class Game {
    constructor() {
        this.state = new StateManager();
        this.controls = new ControlsManager(this.state);
        this.colorObject = new ColorObject();
        this.physicsEngine = new PhysicsManager(this.state, this.colorObject);

        this.protagonist = new Protagonist(400, 600, 50, 50, "down", this.colorObject.returnPrimaryColor(), this.colorObject.strokeColor);
        this.currentLevel = new Level_1(this.protagonist, this.physicsEngine, this.colorObject.returnSecondaryColor(), this.colorObject.strokeColor);
        this.gameBackground = new GameBackground(this.colorObject.returnTertiaryColor(), this.colorObject.strokeColor);

        this.deltaTimeAccumulator = 0;
    }

    updateControls = () => {
        this.controls.update(this.physicsEngine.gravityDirection, this.physicsEngine.gravOpposite, this.protagonist);

    }

    init = () => {
        this.currentLevel.init();
    }

    updateState = () => {
        this.controls.state = this.state;
        this.physicsEngine.state = this.state;
    }

    update = () => {
        this.physicsEngine.applyGravityToObject(this.protagonist);
        this.physicsEngine.applyFrictionToObject(this.protagonist);

        let boundries = this.currentLevel.outerBoundriesArr; 
        let boxes = this.currentLevel.boxesArr; 

        

        this.physicsEngine.metaCollisionDetectionForProtagonist(this.protagonist, boundries, boxes);


        this.updateControls(); 

        this.protagonist.x += this.protagonist.xv;
        this.protagonist.y += this.protagonist.yv;

        this.gameBackground.update();
        this.currentLevel.update();
        this.protagonist.update();
        this.updateState();
    }

    draw = () => {
        this.gameBackground.draw();
        this.currentLevel.draw();
        this.protagonist.draw();
    }

    gameLoop = () => {
        this.deltaTimeAccumulator += deltaTime
        this.update();
        this.draw();
    }
}


//JP'S CODE. MIGRATE TO THIS EVENTUALLY
// export default class Game {
//     constructor() {
//     //     this.controls = new ControlsManager();
//     //     this.gameObjectManager = new GameObjectManager();
//     //     this.levelManager = new LevelManager();
//     //     this.deltaTime = 0;
//     //     window.jlSystem = this;
//     }
//     // updateControls = () => {
//     //     this.controls.update();
//     // }
//     // update = () => {
//     //     gameObjectManager.update(this.deltaTime);
//     // }
//     // draw = () => {
//     //     gameObjectManager.draw();
//     // }
//     // gameLoop = () => {
//     //     this.deltaTime = deltaTime ?? 0;
//     //     this.updateControls();
//     //     this.update();
//     //     this.draw();
//     // }