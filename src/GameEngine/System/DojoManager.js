import { Box } from "../GameAssets/Box"; 
import { Platform } from "../GameAssets/Platform";
import { Protagonist } from "../ObjectClasses/Protagonist";

export default class DojoManager { 
    constructor(ctx) { 
        this.ctx = ctx; 
    }

    startDojo = () => {
        //This function relates to the function that will be called on the bridge object in the useEffect 
        //hook on mounting
    }

    stopDojo = () => {
        //This function relates to the function that will be called on the bridge object in the useEffect 
        //hook on unmounting
    }

    pauseGame = () => {
        // This function obviously needs to communicate with the bridge 
        //stop game loop

    }

    unpauseGame = () => {

    }

    generateRandomNumberWithinRange = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    generateRandomBoxs = () => {
        let numOfBoxes = this.generateRandomNumberWithinRange(4, 7); 
        let boxesArr = []; 

        for (let i = 0; i < numOfBoxes; i++) {
            let randomBoxPropertiesObj = {
                //75 is an estimation of the outer boundry plus the width of the box. Definitely temporary
                //Also, this is based of canvas width and height and it should be based on the boundries.
                // x: this.generateRandomNumberWithinRange(75, this.ctx.canvas.width - 75),
                // y: this.generateRandomNumberWithinRange(75, this.ctx.canvas.height - 75),

                x: this.generateRandomNumberWithinRange(75, 780 - 75),
                y: this.generateRandomNumberWithinRange(75, 780 - 75),

                //Just putting 50 here. Might be best to create small, medium, and large boxes. Might be cleaner in instances like this
                w: 50, 
                h: 50, 
                idNum: i, 
            }

            boxesArr.push(randomBoxPropertiesObj); 
        }

        return boxesArr; 
    }

    generateBoundries = () => {
        let platforms = [
            {
                id: 1,
                x: 0,
                y: 0,
                w: 780,
                h: 20,
                fillColor: "#FE2712",
                strokeColor: "white"
            },
            {
                id: 2,
                x: 780,
                y: 0,
                w: 20,
                h: 780,
                fillColor: "#FE2712",
                strokeColor: "white"
            },
            {
                id: 3,
                x: 20,
                y: 780,
                w: 780,
                h: 20,
                fillColor: "#FE2712",
                strokeColor: "white"
            },
            {
                id: 4,
                x: 0,
                y: 20,
                w: 20,
                h: 780,
                fillColor: "#FE2712",
                strokeColor: "white"
            }
        ]

        return platforms; 
    }
   

    createNewLevel = () => {
        let gom = jlSystem.gameObjectManager; 
        let randomBoxesParametersArray = this.generateRandomBoxs(); 
        let boundriesParametersArray = this.generateBoundries(); 

        let newLevelObjects = []; 

        for (let i = 0; i < randomBoxesParametersArray.length; i++) {
            let boxParamObj = randomBoxesParametersArray[i];
            newLevelObjects.push(new Box(this.ctx, boxParamObj.x, boxParamObj.y, boxParamObj.w, boxParamObj.h, boxParamObj.idNum)); 
        }

        for (let i = 0; i < boundriesParametersArray.length; i++) {
            let boundry = boundriesParametersArray[i]; 
            newLevelObjects.push(new Platform(this.ctx, boundry.x, boundry.y, boundry.w, boundry.h, boundry.id)); 
        }

        newLevelObjects.push(new Protagonist(this.ctx, 50, 600, 50, 50)); 
        
        gom.loadObjects(newLevelObjects); 
    }
}