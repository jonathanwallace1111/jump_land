import { PhysicalGameObject } from "./PhysicalGameObject.js";

export class NonProtagonistGameObject extends PhysicalGameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h); 

        this.hasTouchedProtagonistBool = false;
        this.isCurrentlyTouchingProtagonistBool = false; 
        this.touchingFromWhichDirection = null; 
    }

    touchProtagonist() { 
        // this.hasTouchedProtagonistBool = true; 
        // console.log(this.hasTouchedProtagonistBool); 
    }

    protagnoistNoLongerTouching() {
        //This is used for platforms that disappear after the  protagonist leaves
    }  
}