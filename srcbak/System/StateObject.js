class StateObject extends GameObject {
    constructor() {
        super(); 

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
