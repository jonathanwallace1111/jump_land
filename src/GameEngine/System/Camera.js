import { Vector } from "../Utilities/Vector.js";

export class Camera {
    constructor() { 
        this.pos = new Vector(0, 0); 
        this.scale = 1; 
    }

    levelBuilderUpdate = () => {
        //this is currently handled in ControlsManager.LevelBuilderUpdate
    }

    updatePosition = () => { 
        // THIS IS ALL COMMENTED OUT BECAUSE I'M JUST NOT USING THE CAMERA AT THIS STAGE
        let game = window.jlSystem; 
        let gom = game.gameObjectManager; 
        let protagonist = gom.getProtagonist(); 
        let state = game.state; 

        // this.pos.x = protagonist.pos.x - (width / 2); 
        // this.pos.y = protagonist.pos.y - (height - 200); 
    }
}