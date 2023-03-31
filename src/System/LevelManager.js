import { LevelManifest } from '../Levels/index.js';
import { Platform } from "../GameAssets/Platform.js";
import { Protagonist } from "../ObjectClasses/Protagonist.js";
import { DeathStake } from "../GameAssets/DeathStake.js";
import { GoalObject } from "../GameAssets/GoalObject.js";


export class LevelManager {
    constructor() {
        this.level = undefined;
    }

    loadLevel = (levelNumber) => {
        let gom = jlSystem.gameObjectManager;
        gom.clearObjects();
        this.level = LevelManifest[levelNumber];

        let newLevelObjects = [
            ...this.level.platforms.map(p => new Platform(p.x, p.y, p.w, p.h, p.id)),
            new Protagonist(this.level.protagonist.x, this.level.protagonist.y, this.level.protagonist.w, this.level.protagonist.h),
            new DeathStake(this.level.deathStake.x, this.level.deathStake.y, this.level.deathStake.w, this.level.deathStake.h, this.level.deathStake.id), 
            new GoalObject(this.level.goalObject.x, this.level.goalObject.y, this.level.goalObject.w, this.level.goalObject.h, this.level.goalObject.id)
        ];

        gom.loadObjects(newLevelObjects);
    }

} 