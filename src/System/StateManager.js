import { Box } from "../GameAssets/Box.js"
import { Platform } from "../GameAssets/Platform.js";
import { DeathStake } from "../GameAssets/DeathStake.js"
import { GoalObject } from "../GameAssets/GoalObject.js"

export class StateManager {
    constructor() {

        this.gravityStrength = 1.5;
        this.gravityDirection = "down";
        this.gravOpposite = "up";


        this.lateralDirections = {
            a: "left",
            b: "right"
        }

        this.deltaTime = 0;
        this.lastTime = performance.now();
        this.currentTime = performance.now();

        //This stuff belongs in gameObjectManager
        this.objectsCurrentlyTouchingProtagonist = [];
        this.objectsCurrentlyTouchingProtagonistIdArr = [];

        //This is for platforms that disappear after a moment and other objects that have dt accummulators
        this.timeTrackingObjectsArr = [];

        //This belongs in protagonist
        this.protagonist = {
            inCorner: false
        }

        this.stats = {
            numOfDeaths: 0,
        }

        this.levelMetaData = {};

        this.inLevelBuilderMode = false;
        this.levelBuilderDock = undefined;

        this.typesOfObjects = {

        }
    }

    updateDeltaTime = () => {
        this.currentTime = performance.now();
        this.deltaTime = (this.currentTime - this.lastTime) / 1000;
        this.lastTime = this.currentTime;
    }

    init = () => {
        let dock = document.createElement("div")
        dock.setAttribute("id", "builderDock")
        let main = document.getElementById("main");
        main.appendChild(dock);
        this.levelBuilderDock = dock;
        this.turnOffLevelBuilderMode();
    }



    turnOnLevelBuilderMode = () => {
        let gameObjArr = window.jlSystem.gameObjectManager.gameObjects;

        while (this.levelBuilderDock.firstChild) {
            this.levelBuilderDock.removeChild(this.levelBuilderDock.lastChild);
        }

        this.inLevelBuilderMode = true;
        let btn = document.createElement('div');
        btn.innerHTML = "TURN OFF LVL BUILDER"
        btn.addEventListener("click", this.turnOffLevelBuilderMode);
        this.levelBuilderDock.appendChild(btn);

        // let boxBtn = document.createElement('div'); 
        // boxBtn.innerHTML = "create small box"; 
        // boxBtn.addEventListener("click", function () { gameObjArr.push(new Box(400, 400, 125, 125, gameObjArr.length + 1))}); 
        // this.levelBuilderDock.appendChild(boxBtn); 

        let objectSelectContainer = document.createElement('div');
        let select = document.createElement('select');
        objectSelectContainer.appendChild(select);

        let smallBox = document.createElement('option');
        smallBox.value = 'smallBox';
        smallBox.text = 'small box';
        select.appendChild(smallBox);

        let mediumBox = document.createElement('option');
        box.value = 'box';
        box.text = 'box';
        select.appendChild(box);

        let largeBox = document.createElement('option');
        box.value = 'box';
        box.text = 'box';
        select.appendChild(box);

        let platform = document.createElement('option');
        platform.value = 'platform';
        platform.text = 'platform';
        select.appendChild(platform);











        let makeObjBtn = document.createElement('div');

        makeObjBtn.addEventListener("click", function () {
            switch (select.value) {
                case "smallBox":
                    gameObjArr.push(new Box(400, 400, 50, 50, gameObjArr.length + 1));
                    break;
                case "box":
                    gameObjArr.push(new Box(400, 400, 75, 75, gameObjArr.length + 1));
                    break;
                case "box":
                    gameObjArr.push(new Box(400, 400, 75, 75, gameObjArr.length + 1));
                    break;
                case "platform":
                    gameObjArr.push(new Platform(400, 400, 20, 200, gameObjArr.length + 1));
                    break;
                default:
                    break;
            }
        });

        makeObjBtn.innerHTML = "make this object";

        objectSelectContainer.appendChild(makeObjBtn)

        this.levelBuilderDock.appendChild(objectSelectContainer);
    }

    turnOffLevelBuilderMode = () => {
        while (this.levelBuilderDock.firstChild) {
            this.levelBuilderDock.removeChild(this.levelBuilderDock.lastChild);
        }

        this.inLevelBuilderMode = false;
        let btn = document.createElement('div');
        btn.innerHTML = "TURN ON LVL BUILDER"
        btn.addEventListener("click", this.turnOnLevelBuilderMode);
        this.levelBuilderDock.appendChild(btn);
    }

    //Gravity changes are currently handled by physics manager, but they should be handled here. 
    changeGravityToDown = () => { }
}
