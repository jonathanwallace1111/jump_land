// import LevelManifest from '../Levels';
// import level1Data from "../Levels/level_1.json";
import { WallFloor } from "../GameAssets/WallFloor.js";
import { Protagonist } from "../ObjectClasses/Protagonist.js";
import { DeathStake } from "../GameAssets/DeathStake.js";
import { GoalObject } from "../GameAssets/GoalObject.js";


export class LevelManager {
    constructor() {
        this.level = undefined;
    }

    // async loadLevel(/*levelNumber*/) {
    //     // this.fetchLevel(); 

    //     let gom = jlSystem.gameObjectManager;
    //     gom.clearObjects();

    //     // console.log(level1Data); 

    //     // Couldn't get LevelManifest working because of MIME issues
    //     // let level = LevelManifest[levelNumber];

    //     // Used "fetch" because of MIME issues 
    //     try {
    //         const response = await fetch("./Levels/level_2.json")
    //         const data = await response.json();

    //         this.level = data;

    //         window.jlSystem.state.levelMetaData = this.level.levelMetaData; 

    //         let newLevelObjects = [
    //             ...this.level.wallFloors.map(wall => new WallFloor(wall.x, wall.y, wall.w, wall.h, wall.id)),
    //             new Protagonist(this.level.protagonist.x, this.level.protagonist.y, this.level.protagonist.w, this.level.protagonist.h)
    //         ];

    //         gom.loadObjects(newLevelObjects);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }


    loadLevel = () => {
        let gom = jlSystem.gameObjectManager;
        gom.clearObjects();

        let data = {
            protagonist: {
                id: "Protagonist",
                x: 50,
                y: 600,
                w: 50,
                h: 50,
                gravityDirection: "down",
                fillColor: "#0247FE",
                strokeColor: "white"
            },
            deathStake: {
                x: 400, 
                y: 715
            },
            goalObject: {
                x: 650,
                y: 700, 
            },
            wallFloors: [
                {
                    id: "WF-idNum-1",
                    x: 0,
                    y: 0,
                    w: 780,
                    h: 20,
                    fillColor: "#FE2712",
                    strokeColor: "white"
                },
                {
                    id: "WF-idNum-2",
                    x: 780,
                    y: 0,
                    w: 20,
                    h: 780,
                    fillColor: "#FE2712",
                    strokeColor: "white"
                },
                {
                    id: "WF-idNum-3",
                    x: 20,
                    y: 780,
                    w: 780,
                    h: 20,
                    fillColor: "#FE2712",
                    strokeColor: "white"
                },
                {
                    id: "WF-idNum-4",
                    x: 0,
                    y: 20,
                    w: 20,
                    h: 780,
                    fillColor: "#FE2712",
                    strokeColor: "white"
                }
            ]
        }

        this.level = data;

        window.jlSystem.state.levelMetaData = this.level.levelMetaData;

        let newLevelObjects = [
            ...this.level.wallFloors.map(wall => new WallFloor(wall.x, wall.y, wall.w, wall.h, wall.id)),
            new Protagonist(this.level.protagonist.x, this.level.protagonist.y, this.level.protagonist.w, this.level.protagonist.h),
            new DeathStake(this.level.deathStake.x, this.level.deathStake.y), 
            new GoalObject(this.level.goalObject.x, this.level.goalObject.y)
        ];

        gom.loadObjects(newLevelObjects);
    }

} 