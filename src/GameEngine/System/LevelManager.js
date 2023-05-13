import { LevelManifest } from '../Levels/index.js';
import { Platform } from "../GameAssets/Platform.js";
import { Protagonist } from "../ObjectClasses/Protagonist.js";
import { DeathStake } from "../GameAssets/DeathStake.js";
import { GoalObject } from "../GameAssets/GoalObject.js";


export class LevelManager {
    constructor(ctx) {
        this.level = undefined;
        this.ctx = ctx; 
    }

    /* Need a function that communicates with the bridge to retrieve the json data 
       from react side and parses it */

    loadLevel = (levelNumber) => {
        let gom = jlSystem.gameObjectManager;
        gom.clearObjects();
        this.level = LevelManifest[levelNumber];

        if (!!this.level.keys) {
            //communicate with state to create key conditional that makes the goal object collectable only after all keys in key array are collected. 
        }

        // //I need to check if any object is a compound object and if so add them separately so that collision detection works for each 
        let newLevelObjects = [
            ...this.level.platforms.map(p => new Platform(p.x, p.y, p.w, p.h, p.id)),
            new Protagonist(this.ctx, this.level.protagonist.x, this.level.protagonist.y, this.level.protagonist.w, this.level.protagonist.h),
            new DeathStake(this.level.deathStake.x, this.level.deathStake.y, this.level.deathStake.w, this.level.deathStake.h, this.level.deathStake.id), 
            new GoalObject(this.level.goalObject.x, this.level.goalObject.y, this.level.goalObject.w, this.level.goalObject.h, this.level.goalObject.id)
        ];

        gom.loadObjects(newLevelObjects);
    }

} 