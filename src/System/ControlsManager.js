export class ControlsManager{ 
    constructor(state) {

        this.state = state;

        this.keyPressedBool = false; 
        this.keyPressed = []; 

        // this.lateralMovementV = 1; 

        // this goes in protagonist
        this.jumpStrength = 3;
    }

    moveLaterally = (gravityDirection, gravOpposite, protagonist) => {
        let latDirAPressedBool = this.keyPressed.includes(this.state.lateralDirections.a);
        let latDirBPressedBool = this.keyPressed.includes(this.state.lateralDirections.b);

        let latDirToMove = null; 

        if (latDirAPressedBool && latDirBPressedBool) {
            return; 
        } else if (latDirAPressedBool) {
            latDirToMove = this.state.lateralDirections.a;
        } else if (latDirBPressedBool) {
            latDirToMove = this.state.lateralDirections.b;
        }

        switch (latDirToMove) {
            case "up":
                // protagonist.addAccelerationToVelocity();
                protagonist.yv -= protagonist.currentVAbs;  
                break; 
            case "down":
                // protagonist.addAccelerationToVelocity();
                protagonist.yv += protagonist.currentVAbs; 
                break; 
            case "left":
                // protagonist.addAccelerationToVelocity();
                protagonist.xv -= protagonist.currentVAbs;
                break; 
            case "right":
                // protagonist.addAccelerationToVelocity();
                protagonist.xv += protagonist.currentVAbs;
                break; 
            default : 
                return; 
        }
    }

    jump = (gravityDirection, gravOpposite, protagonist) => {
        switch (gravOpposite) {
            case "up":
                protagonist.yv -= this.jumpStrength;
                protagonist.jumping = true
                protagonist.onGround = false; 
                break; 
            case "down":
                protagonist.yv += this.jumpStrength;
                protagonist.jumping = true
                protagonist.onGround = false; 
                break; 
            case "left":
                protagonist.xv -= this.jumpStrength;
                protagonist.jumping = true
                protagonist.onGround = false; 
                break;
            case "right":
                protagonist.xv += this.jumpStrength;
                protagonist.jumping = true
                protagonist.onGround = false; 
            default :
                return
        }

        return
    }
 
    update = (gravityDirection, gravOpposite, protagonist) => {
        if (this.keyPressedBool) {

            if (this.keyPressed.includes(gravityDirection)) {

            }

            if (this.keyPressed.includes(gravOpposite) && !protagonist.isJumping) {
                protagonist.maxJumpDeltaTimeAccumulator += deltaTime; 

                if (protagonist.maxJumpDeltaTimeAccumulator < protagonist.maxJumpDeltaTimeLimit) {
                    this.jump(gravityDirection, gravOpposite, protagonist); 
                }
            }
            
            if (this.keyPressed.includes(this.state.lateralDirections.a) || this.keyPressed.includes(this.state.lateralDirections.b)) {
                this.moveLaterally(gravityDirection, gravOpposite, protagonist); 
            }
        }
    }
  }



//JP'S CODE, MIGRATE TO THIS
// export const keyCodeMap = {
//     37: 'left',
//     38: 'up',
//     39: 'right',
//     40: 'down',
// }
// export class ControlsManager {
//     constructor() {

//         this.controlMap = {
//             up: false,
//             down: false,
//             left: false,
//             right: false,
//         };

//         this.liveKeyMap = {};

//         window.keyPressed = this.keyPressed.bind(this);
//         window.keyReleased = this.keyReleased.bind(this);
//     }

//     update() {
//         Object.values(keyCodeMap).forEach(key => {
//             this.controlMap[key] = this.liveKeyMap[key];
//         });
//     }

//     keyPressed() {
//         if (keyCodeMap[keyCode]) {
//             this.liveKeyMap[keyCodeMap[keyCode]] = true;
//         }
//     }

//     keyReleased() {
//         if (keyCodeMap[keyCode]) {
//             this.liveKeyMap[keyCodeMap[keyCode]] = false;
//         }
//     }
// }