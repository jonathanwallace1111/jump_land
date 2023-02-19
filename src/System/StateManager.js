export class StateManager {
    constructor() {
        
        this.directionOfGravity = "down";

        this.lateralDirections = {
            a: "left", 
            b: "right"
        }

        this.objectsCurrentlyTouchingProtagonist = [];
        this.objectsCurrentlyTouchingProtagonistIdArr = []; 

        this.protagonist = {
            inCorner: false 
        }
    }

    changeGravityToDown = () => {}
}
