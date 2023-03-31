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

        //This belongs in protagonist
        this.protagonist = {
            inCorner: false 
        }

        this.stats = { 
            numOfDeaths: 0, 
        }

        this.levelMetaData = {}; 

        this.inLevelBuilderMode = false; 
    }

    updateDeltaTime = () => {
        this.currentTime = performance.now(); 
        this.deltaTime = (this.currentTime - this.lastTime) /1000; 
        this.lastTime = this.currentTime
    }

    //Gravity changes are currently handled by physics manager, but they should be handled here. 
    changeGravityToDown = () => {}
}
