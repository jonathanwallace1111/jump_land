export class PhysicsManager {
    constructor(state, colorObject) {


        this.state = state;
        this.colorObject = colorObject; 

        this.gravityStrength = 1.5;
        this.gravityDirection = "down";

        this.gravOpposite = "up";
    }

    returnState = () => {
        return this.state;
    }

    applyFrictionToObject = (object) => {
        object.xv *= 0.9;
        object.yv *= 0.9;
    }

    applyGravityToObject = (object) => {
        if (!object.onGround) {
            switch (this.gravityDirection) {
                case "up":
                    object.yv -= this.gravityStrength;
                    break;
                case "down":
                    object.yv += this.gravityStrength;
                    break;
                case "left":
                    object.xv -= this.gravityStrength;
                    break;
                case "right":
                    object.xv += this.gravityStrength;
                    break;
                default:
                    break;
            }
        }
    }

    determineDirectionOfCollision = (obj1, obj2) => {
        // Most of this stuff would probably be good to keep stored inside the obj1
        // along side their x and y position. That way it doesn't have to be recalculated
        // every collision check
        var obj1HalfW = obj1.w / 2
        var obj1HalfH = obj1.h / 2
        var obj2HalfW = obj2.w / 2
        var obj2HalfH = obj2.h / 2
        var obj1CenterX = obj1.x + obj1.w / 2
        var obj1CenterY = obj1.y + obj1.h / 2
        var obj2CenterX = obj2.x + obj2.w / 2
        var obj2CenterY = obj2.y + obj2.h / 2

        // Calculate the distance between centers
        var diffX = obj1CenterX - obj2CenterX
        var diffY = obj1CenterY - obj2CenterY

        // Calculate the minimum distance to separate along X and Y
        var minXDist = obj1HalfW + obj2HalfW
        var minYDist = obj1HalfH + obj2HalfH

        // Calculate the depth of collision for both the X and Y axis
        var depthX = diffX > 0 ? minXDist - diffX : -minXDist - diffX
        var depthY = diffY > 0 ? minYDist - diffY : -minYDist - diffY

        let collisionDirection;

        // Now that you have the depth, you can pick the smaller depth and move
        // along that axis.
        if (depthX != 0 && depthY != 0) {
            if (Math.abs(depthX) < Math.abs(depthY)) {
                // Collision along the X axis. React accordingly
                if (depthX > 0) {
                    // Left side collision
                    collisionDirection = "left";
                }
                else {
                    // Right side collision
                    collisionDirection = "right";
                }
            }
            else {
                // Collision along the Y axis.
                if (depthY > 0) {
                    // Top side collision
                    collisionDirection = "up";
                }
                else {
                    // Bottom side collision
                    collisionDirection = "down";
                }
            }
        }

        return collisionDirection
    }

    collisionDetection = (obj1, obj2) => {
        let didCollideBool = (
            obj1.x <= obj2.x + obj2.w &&
            obj1.x + obj1.w >= obj2.x &&
            obj1.y <= obj2.y + obj2.h &&
            obj1.h + obj1.y >= obj2.y
        )

        if (didCollideBool) {
            return true;
        }

        return false;
    }

    assignLateralDirections = (corner = false) => {
        if (!corner) {
            if (this.gravityDirection === "up" || this.gravityDirection === "down") {
                this.state.lateralDirections.a = "left";
                this.state.lateralDirections.b = "right";
            } else if (this.gravityDirection === "left" || this.gravityDirection === "right") {
                this.state.lateralDirections.a = "up";
                this.state.lateralDirections.b = "down";
            }
        } else {
            switch (corner) {
                case "lu":
                    this.state.lateralDirections.a = "right";
                    this.state.lateralDirections.b = "down";
                    break;
                case "ur":
                    this.state.lateralDirections.a = "down";
                    this.state.lateralDirections.b = "left";
                    break;
                case "rd":
                    this.state.lateralDirections.a = "left";
                    this.state.lateralDirections.b = "up";
                    break;
                case "dl":
                    this.state.lateralDirections.a = "up";
                    this.state.lateralDirections.b = "right";
                    break;
                default:
                    break;
            }
        }
    }

    changeGravityDirection = (newGravDirection) => {
        this.gravityDirection = newGravDirection;

        switch (newGravDirection) {
            case "corner":
                this.gravOpposite = "corner";
                break;
            case "up":
                this.gravOpposite = "down";
                break;
            case "down":
                this.gravOpposite = "up";
                break;
            case "left":
                this.gravOpposite = "right";
                break;
            case "right":
                this.gravOpposite = "left";
                break;
            default:
                break;
        }
    }

    exitCorner = () => {
        if (this.state.objectsCurrentlyTouchingProtagonist.length === 1) {
            let obj = this.state.objectsCurrentlyTouchingProtagonist[0];
            this.changeGravityDirection(obj.touchingFromWhichDirection);
            this.assignLateralDirections();
        }
    }

    //eventually I need to simplify this and make one loop that goes through all boxes and boundries 
    metaCollisionDetectionForProtagonist = (protagonist, boundries, boxes) => {
        let boundriesCurrentlyTouchingProtagonistIDArr = []

        //boundries loop
        for (let i = 0; i < boundries.length; i++) {
            let boundry = boundries[i];

            //This conditional decides if the collision handler needs to be called and sets state
            if (this.collisionDetection(protagonist, boundry) && !boundry.isCurrentlyTouchingProtagonistBool) {
                this.state.objectsCurrentlyTouchingProtagonist.push(boundry)
                this.state.objectsCurrentlyTouchingProtagonistIdArr.push(boundry.id)
                boundry.isCurrentlyTouchingProtagonistBool = true;

                let collisionDirection = this.determineDirectionOfCollision(protagonist, boundry);
                boundry.touchingFromWhichDirection = collisionDirection;

                //this conditional checks if the protagonist is in a corner
                if (this.state.objectsCurrentlyTouchingProtagonistIdArr.length === 2) {
                    protagonist.inCorner = true;
                }

                boundry.hasTouchedProtagonistBool = true; 
                boundry.fillColor = this.colorObject.returnQuaternaryColor(); 

                // console.log(this.state.protagonist.inCorner);
                this.collisionHandlerForProtagonist(protagonist, boundry, collisionDirection);
            };

            //this conditional is garbage collection, removing boundries that are no longer touching protag from objectsCurrentlyTouchingProtag
            if (!this.collisionDetection(protagonist, boundry) && boundry.isCurrentlyTouchingProtagonistBool) {
                let boundryIndex = this.state.objectsCurrentlyTouchingProtagonistIdArr.indexOf(boundry.id);
                this.state.objectsCurrentlyTouchingProtagonist.splice(boundryIndex, 1);
                this.state.objectsCurrentlyTouchingProtagonistIdArr.splice(boundryIndex, 1);
                boundry.isCurrentlyTouchingProtagonistBool = false;
                boundry.touchingFromWhichDirection = null;
            }

            if (this.state.objectsCurrentlyTouchingProtagonistIdArr.length != 2 && protagonist.inCorner) {
                protagonist.inCorner = false;
                this.exitCorner();
            }
        }

        //boxes loop
        for (let i = 0; i < boxes.length; i++) {
            let box = boxes[i];

            //This conditional decides if the collision handler needs to be called and sets state
            if (this.collisionDetection(protagonist, box) && !box.isCurrentlyTouchingProtagonistBool) {
                this.state.objectsCurrentlyTouchingProtagonist.push(box)
                this.state.objectsCurrentlyTouchingProtagonistIdArr.push(box.id)
                box.isCurrentlyTouchingProtagonistBool = true;

                let collisionDirection = this.determineDirectionOfCollision(protagonist, box);
                box.touchingFromWhichDirection = collisionDirection;

                //this conditional checks if the protagonist is in a corner
                if (this.state.objectsCurrentlyTouchingProtagonistIdArr.length === 2) {
                    protagonist.inCorner = true;
                }

                box.hasTouchedProtagonistBool = true; 
                box.fillColor = this.colorObject.returnQuaternaryColor();  

                this.collisionHandlerForProtagonist(protagonist, box, collisionDirection);
            };

            //this conditional is garbage collection, removing boxes that are no longer touching protag from objectsCurrentlyTouchingProtag
            if (!this.collisionDetection(protagonist, box) && box.isCurrentlyTouchingProtagonistBool) {
                let boxIndex = this.state.objectsCurrentlyTouchingProtagonistIdArr.indexOf(box.id);
                this.state.objectsCurrentlyTouchingProtagonist.splice(boxIndex, 1);
                this.state.objectsCurrentlyTouchingProtagonistIdArr.splice(boxIndex, 1);
                box.isCurrentlyTouchingProtagonistBool = false;
                box.touchingFromWhichDirection = null;
            }

            if (this.state.objectsCurrentlyTouchingProtagonist.length === 0) {
                protagonist.onGround = false; 
            }

            if (this.state.objectsCurrentlyTouchingProtagonistIdArr.length != 2 && protagonist.inCorner) {
                protagonist.inCorner = false;
                this.exitCorner();
            }
        }
    }

    collisionHandlerForProtagonist = (protagonist, obj2, collisionDirection) => {
        if (protagonist.inCorner) {
            let directionsOfObjectsArr = [];
            let corner;

            for (let i = 0; i < this.state.objectsCurrentlyTouchingProtagonist.length; i++) {
                let obj = this.state.objectsCurrentlyTouchingProtagonist[i];
                directionsOfObjectsArr.push(obj.touchingFromWhichDirection);
            }

            if (directionsOfObjectsArr.includes("left") && directionsOfObjectsArr.includes("up")) {
                corner = "lu";
                this.assignLateralDirections(corner);
            } else if (directionsOfObjectsArr.includes("up") && directionsOfObjectsArr.includes("right")) {
                corner = "ur";
                this.assignLateralDirections(corner);
            } else if (directionsOfObjectsArr.includes("right") && directionsOfObjectsArr.includes("down")) {
                corner = "rd";
                this.assignLateralDirections(corner);
            } else if (directionsOfObjectsArr.includes("down") && directionsOfObjectsArr.includes("left")) {
                corner = "dl";
                this.assignLateralDirections(corner);
            }

            this.changeGravityDirection("corner");
            this.assignLateralDirections(corner);
        } else {
            this.changeGravityDirection(collisionDirection);
            this.assignLateralDirections();
        }

        protagonist.onGround = true;
        protagonist.maxJumpDeltaTimeAccumulator = 0;

        protagonist.xv = 0;
        protagonist.yv = 0;
        obj2.touchingProtagonistBool = true;
        protagonist.jumping = false;
    }
}
