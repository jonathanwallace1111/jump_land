export class PhysicsManager {
    constructor() {
        this.gravityStrength = 1.5;
        this.gravityDirection = "down";

        this.gravOpposite = "up";
    }

    applyGravityToObject = (object) => {
        if (!object.onGround) {
            switch (this.gravityDirection) {
                case "up":
                    object.velocity.y -= this.gravityStrength;
                    break;
                case "down":
                    object.velocity.y += this.gravityStrength;
                    break;
                case "left":
                    object.velocity.x  -= this.gravityStrength;
                    break;
                case "right":
                    object.velocity.x  += this.gravityStrength;
                    break;
                default:
                    break;
            }
        }
    }

    applyGravityToProtagonist = () => {
        let protagonist = window.jlSystem.gameObjectManager.getProtagonist(); 

        if (!protagonist.onGround) {
            switch (this.gravityDirection) {
                case "up":
                    protagonist.velocity.y -= this.gravityStrength;
                    break;
                case "down":
                    protagonist.velocity.y += this.gravityStrength;
                    break;
                case "left":
                    protagonist.velocity.x  -= this.gravityStrength;
                    break;
                case "right":
                    protagonist.velocity.x  += this.gravityStrength;
                    break;
                default:
                    break;
            }
        }
    }

    applyFrictionToObject = () => {
        object.velocity.x  *= 0.9;
        object.velocity.y *= 0.9;
    }

    applyFrictionToProtagonist = () => {
        let protagonist = window.jlSystem.gameObjectManager.getProtagonist(); 
        protagonist.velocity.x  *= 0.9;
        protagonist.velocity.y *= 0.9;
    }

    determineDirectionOfCollision = (obj1, obj2) => {
        // Most of this stuff would probably be good to keep stored inside the obj1
        // along side their x and y position. That way it doesn't have to be recalculated
        // every collision check
        var obj1HalfW = obj1.w / 2
        var obj1HalfH = obj1.h / 2
        var obj2HalfW = obj2.w / 2
        var obj2HalfH = obj2.h / 2
        var obj1CenterX = obj1.pos.x + obj1.w / 2
        var obj1CenterY = obj1.pos.y + obj1.h / 2
        var obj2CenterX = obj2.pos.x + obj2.w / 2
        var obj2CenterY = obj2.pos.y + obj2.h / 2

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
        // console.log("cd()")
        let didCollideBool = (
            obj1.pos.x <= obj2.pos.x + obj2.w &&
            obj1.pos.x + obj1.w >= obj2.pos.x &&
            obj1.pos.y <= obj2.pos.y + obj2.h &&
            obj1.h + obj1.pos.y >= obj2.pos.y
        )

        if (didCollideBool) {
        return true;
        }

        return false;
    }

    assignLateralDirections = (corner = false) => {
        let state = window.jlSystem.state; 

        if (!corner) {
            if (this.gravityDirection === "up" || this.gravityDirection === "down") {
                state.lateralDirections.a = "left";
                state.lateralDirections.b = "right";
            } else if (this.gravityDirection === "left" || this.gravityDirection === "right") {
                state.lateralDirections.a = "up";
                state.lateralDirections.b = "down";
            }
        } else {
            switch (corner) {
                case "lu":
                    state.lateralDirections.a = "right";
                    state.lateralDirections.b = "down";
                    break;
                case "ur":
                    state.lateralDirections.a = "down";
                    state.lateralDirections.b = "left";
                    break;
                case "rd":
                    state.lateralDirections.a = "left";
                    state.lateralDirections.b = "up";
                    break;
                case "dl":
                    state.lateralDirections.a = "up";
                    state.lateralDirections.b = "right";
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
        let state = window.jlSystem.state; 
        if (state.objectsCurrentlyTouchingProtagonist.length === 1) {
            let obj = state.objectsCurrentlyTouchingProtagonist[0];
            this.changeGravityDirection(obj.touchingFromWhichDirection);
            this.assignLateralDirections();
        }
    }

    //eventually I need to simplify this and make one loop that goes through all boxes and boundries 
    metaCollisionDetectionForProtagonist = () => {
        let protagonist = window.jlSystem.gameObjectManager.getProtagonist(); 
        let boundries = window.jlSystem.gameObjectManager.getBoundriesArr(); 
        let state = window.jlSystem.state; 
        let boxes = []; 
        let boundriesCurrentlyTouchingProtagonistIDArr = []

        //boundries loop
        for (let i = 0; i < boundries.length; i++) {
            let boundry = boundries[i];

            // console.log(boundry); 
            // console.log(protagonist); 

            //This conditional decides if the collision handler needs to be called and sets state
            if (this.collisionDetection(protagonist, boundry) && !boundry.isCurrentlyTouchingProtagonistBool) {
                state.objectsCurrentlyTouchingProtagonist.push(boundry)
                state.objectsCurrentlyTouchingProtagonistIdArr.push(boundry.id)
                boundry.isCurrentlyTouchingProtagonistBool = true;

                let collisionDirection = this.determineDirectionOfCollision(protagonist, boundry);
                boundry.touchingFromWhichDirection = collisionDirection;

                //this conditional checks if the protagonist is in a corner
                if (state.objectsCurrentlyTouchingProtagonistIdArr.length === 2) {
                    protagonist.inCorner = true;
                }

                boundry.touchProtagonist(); 

                if (boundry.isDeathObject){
                    this.deathObjectCollisionHandler(); 
                } else {
                    this.collisionHandlerForProtagonist(protagonist, boundry, collisionDirection);
                }
            };

            //this conditional is garbage collection, removing boundries that are no longer touching protag from objectsCurrentlyTouchingProtag
            if (!this.collisionDetection(protagonist, boundry) && boundry.isCurrentlyTouchingProtagonistBool) {
                let boundryIndex = state.objectsCurrentlyTouchingProtagonistIdArr.indexOf(boundry.id);
                state.objectsCurrentlyTouchingProtagonist.splice(boundryIndex, 1);
                state.objectsCurrentlyTouchingProtagonistIdArr.splice(boundryIndex, 1);
                boundry.isCurrentlyTouchingProtagonistBool = false;
                boundry.touchingFromWhichDirection = null;
            }

            if (state.objectsCurrentlyTouchingProtagonistIdArr.length != 2 && protagonist.inCorner) {
                protagonist.inCorner = false;
                this.exitCorner();
            }
        }

        //boxes loop
        for (let i = 0; i < boxes.length; i++) {
            let box = boxes[i];

            //This conditional decides if the collision handler needs to be called and sets state
            if (this.collisionDetection(protagonist, box) && !box.isCurrentlyTouchingProtagonistBool) {
                state.objectsCurrentlyTouchingProtagonist.push(box)
                state.objectsCurrentlyTouchingProtagonistIdArr.push(box.id)
                box.isCurrentlyTouchingProtagonistBool = true;

                let collisionDirection = this.determineDirectionOfCollision(protagonist, box);
                box.touchingFromWhichDirection = collisionDirection;

                //this conditional checks if the protagonist is in a corner
                if (state.objectsCurrentlyTouchingProtagonistIdArr.length === 2) {
                    protagonist.inCorner = true;
                }

                box.touchProtagonist(); 

                if (boundry.isDeathObject){
                    this.deathObjectCollisionHandler(); 
                } else {
                    this.collisionHandlerForProtagonist(protagonist, box, collisionDirection);
                }
            };

            //this conditional is garbage collection, removing boxes that are no longer touching protag from objectsCurrentlyTouchingProtag
            if (!this.collisionDetection(protagonist, box) && box.isCurrentlyTouchingProtagonistBool) {
                let boxIndex = state.objectsCurrentlyTouchingProtagonistIdArr.indexOf(box.id);
                state.objectsCurrentlyTouchingProtagonist.splice(boxIndex, 1);
                state.objectsCurrentlyTouchingProtagonistIdArr.splice(boxIndex, 1);
                box.isCurrentlyTouchingProtagonistBool = false;
                box.touchingFromWhichDirection = null;
            }

            if (state.objectsCurrentlyTouchingProtagonist.length === 0) {
                protagonist.onGround = false; 
            }

            if (state.objectsCurrentlyTouchingProtagonistIdArr.length != 2 && protagonist.inCorner) {
                protagonist.inCorner = false;
                this.exitCorner();
            }
        }
    }

    collisionHandlerForProtagonist = (protagonist, obj2, collisionDirection) => {
        let state = window.jlSystem.state; 

        if (protagonist.inCorner) {
            let directionsOfObjectsArr = [];
            let corner;

            for (let i = 0; i < state.objectsCurrentlyTouchingProtagonist.length; i++) {
                let obj = state.objectsCurrentlyTouchingProtagonist[i];
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

        protagonist.velocity.x  = 0;
        protagonist.velocity.y = 0;
        obj2.touchingProtagonistBool = true;
        protagonist.jumping = false;
    }

    deathObjectCollisionHandler = () => { 
        let state = window.jlSystem.state; 
        let lm = window.jlSystem.levelManager; 
        let gom = window.jlSystem.gameObjectManager; 

        console.log("inside doch"); 

        state.stats.numOfDeaths++; 
        gom.clearObjects(); 
        lm.loadLevel(); 
    }

    update = () => {
        this.applyGravityToProtagonist(); 
        this.applyFrictionToProtagonist(); 
        this.metaCollisionDetectionForProtagonist(); 
    }
}

