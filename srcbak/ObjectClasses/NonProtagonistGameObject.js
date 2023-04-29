class NonProtagonistGameObject extends PhysicalGameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h); 

        this.hasTouchedProtagonistBool = false;
        this.isCurrentlyTouchingProtagonistBool = false; 
        this.touchingFromWhichDirection = null; 
    }
}