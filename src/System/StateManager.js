export class StateManager {
    constructor() {

        //physics manager curretly has its own gravity direction, it should be changed to be handled by stateManager
        this.directionOfGravity = "down";
        
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

        //This belongs in protagonist
        this.protagonist = {
            inCorner: false 
        }

        this.levelMetaData = {}; 

        this.selectedObject = undefined; 
    }

    updateDeltaTime = () => {
        this.currentTime = performance.now(); 
        this.deltaTime = (this.currentTime - this.lastTime) /1000; 
        this.lastTime = this.currentTime
    }

    //Gravity changes are currently handled by physics manager, but they should be handled here. 
    changeGravityToDown = () => {}
}
