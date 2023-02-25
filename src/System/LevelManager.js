// import LevelManifest from '../Levels';

import { WallFloor } from "../GameAssets/WallFloor.js";
import { Protagonist } from "../ObjectClasses/Protagonist.js";

export class LevelManager {
    constructor() {
        this.level = undefined;
    }

    loadLevel(/*levelNumber*/) {
        let gom = jlSystem.gameObjectManager;
        gom.clearObjects();
        
        //Couldn't get LevelManifest working because of MIME issues
        //let level = LevelManifest[levelNumber];

        //Used "fetch" because of MIME issues 
        fetch("./Levels/level_1.json")
            .then(response => response.json())
            .then(data => {
                this.level = data;

                // console.log(this.level.protagonist); 

                let newLevelObjects = [
                    ...this.level.wallFloors.map(wall => new WallFloor(wall.x, wall.y, wall.w, wall.h, wall.id, wall.fillColor, wall.strokeColor)),
                    new Protagonist(this.level.protagonist.x, this.level.protagonist.y, this.level.protagonist.w, this.level.protagonist.h, this.level.protagonist.gravityDirection, this.level.protagonist.fillColor, this.level.protagonist.strokeColor)
                ];

                // console.log(newLevelObjects); 

                gom.loadObjects(newLevelObjects);
            })
            .catch(error => console.error(error));
    }
} 