import { StateManager } from "./StateManager.js";
import { ControlsManager } from "./ControlsManager.js";
import { ColorObject } from "./ColorObject.js";
import { PhysicsManager } from "./PhysicsManager.js";

import { Protagonist } from "../ObjectClasses/Protagonist.js";
// import { Level_1 } from "../Levels/Level_1.js"
// import { Level_2 } from "../Levels/Level_2.js"
import { GameBackground } from "../GameAssets/GameBackground.js";
import { GameObjectManager } from "./GameObjectManager.js";


import { LevelManager } from "./LevelManager.js";
// import { RenderManager } from "./RenderManager.js"; 

export default class Game {
    constructor() {
        this.state = new StateManager();
        this.controls = new ControlsManager(this.state);

        this.colorObject = new ColorObject();
        this.physicsEngine = new PhysicsManager(this.state, this.colorObject);

        this.objs = undefined;

        this.protagonist = new Protagonist(400, 600, 50, 50, "down", this.colorObject.returnPrimaryColor(), this.colorObject.strokeColor);
        // this.currentLevel = new Level_1(this.protagonist, this.physicsEngine, this.colorObject.returnSecondaryColor(), this.colorObject.strokeColor);
        // this.currentLevel = new Level_2(this.protagonist, this.physicsEngine, this.colorObject.returnSecondaryColor(), this.colorObject.strokeColor);
        this.gameBackground = new GameBackground(this.colorObject.returnTertiaryColor(), this.colorObject.strokeColor);

        this.deltaTimeAccumulator = 0;

        //THIS IS JP'S CODE
        //     this.controls = new ControlsManager();
        this.gameObjectManager = new GameObjectManager();
        this.levelManager = new LevelManager();
        //     this.deltaTime = 0;
        window.jlSystem = this;
    }

    updateControls = () => {
        this.controls.update(this.physicsEngine.gravityDirection, this.physicsEngine.gravOpposite, this.protagonist);
    }

    init = () => {
        // this.currentLevel.init();
        // console.log(Objs); 

        this.levelManager.loadLevel()

        //This code was moved to LevelManager.loadLevel(); 
        // fetch("./Levels/level_1.json")
        //     .then(response => response.json())
        //     .then(data => {
        //         this.objs = data;
        //         // console.log(data); 
        //         console.log(this.objs.player);
        //     })
        //     .catch(error => console.error(error));

    }

    updateState = () => {
        this.controls.state = this.state;
        this.physicsEngine.state = this.state;
    }

    update = () => {
        let protagonist = this.gameObjectManager.getProtagonist(); 

        this.gameObjectManager.update(this.deltaTime);

        this.physicsEngine.applyGravityToProtagonist();
        this.physicsEngine.applyFrictionToProtagonist();

        this.physicsEngine.metaCollisionDetectionForProtagonist();

        this.updateControls();

        protagonist.x += protagonist.xv;
        protagonist.y += protagonist.yv;

        this.gameBackground.update();
        // this.currentLevel.update();
        this.protagonist.update();
        this.updateState();
    }

    draw = () => {
        this.gameBackground.draw();

        this.gameObjectManager.draw();

        // this.currentLevel.draw();
        // this.protagonist.draw();
    }

    gameLoop = () => {
        // JP'S CODE
        // this.deltaTime = deltaTime ?? 0;
        // this.updateControls();
        // this.update();
        // this.draw();

        this.deltaTimeAccumulator += deltaTime
        this.update();
        this.draw();
    }
}
