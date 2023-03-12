// import { Camera } from "./Camera";

export class ControlsManager {
    constructor() {

        // this.lateralMovementV = 1; 

        // this goes in protagonist
        this.jumpStrength = 3.5;

        this.keyCodeMap = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
        }

        this.controlMap = {
            up: false,
            down: false,
            left: false,
            right: false,
        };

        this.liveKeyMap = {};

        window.mousePressed = this.mouseIsPressed.bind(this); 
        window.mouseDragged = this.mouseIsDragged.bind(this); 

        window.keyPressed = this.keyIsPressed.bind(this);
        window.keyReleased = this.keyIsReleased.bind(this);
    }

    mouseIsPressed = () => { 
        let objArr = window.jlSystem.gameObjectManager.gameObjects; 
        let state = window.jlSystem.state; 

        state.selectedObject = objArr.find(obj => {
            return(mouseX <= obj.renderX + obj.w &&
            mouseX >= obj.renderX &&
            mouseY <= obj.renderY + obj.h &&
            mouseY >= obj.renderY); 
        })

        console.log(state.selectedObject); 
    }

    mouseIsDragged = () => {
        let selectedObject = window.jlSystem.state.selectedObject; 
        let camera = window.jlSystem.camera; 

        selectedObject.x = mouseX - camera.x; 
        selectedObject.y = mouseY - camera.y
        

    }

    keyIsPressed = () => {
        if (this.keyCodeMap[keyCode]) {
            this.liveKeyMap[this.keyCodeMap[keyCode]] = true;
        }
    }

    keyIsReleased = () => {
        if (this.keyCodeMap[keyCode]) {
            this.liveKeyMap[this.keyCodeMap[keyCode]] = false;
        }
    }

    moveLaterally = (gravityDirection, gravOpposite, protagonist) => {
        let state = window.jlSystem.state; 

        let latDirAPressedBool = this.liveKeyMap[state.lateralDirections.a]; 
        let latDirBPressedBool = this.liveKeyMap[state.lateralDirections.b];

        let latDirToMove = null;

        if (latDirAPressedBool && latDirBPressedBool) {
            return;
        } else if (latDirAPressedBool) {
            latDirToMove = state.lateralDirections.a;
        } else if (latDirBPressedBool) {
            latDirToMove = state.lateralDirections.b;
        }

        switch (latDirToMove) {
            case "up":
                protagonist.yv -= protagonist.currentVAbs;
                break;
            case "down":
                protagonist.yv += protagonist.currentVAbs;
                break;
            case "left":
                protagonist.xv -= protagonist.currentVAbs;
                break;
            case "right":
                protagonist.xv += protagonist.currentVAbs;
                break;
            default:
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
            default:
                return
        }

        return
    }

    update = () => {
        let pe = window.jlSystem.physicsEngine;
        let state = window.jlSystem.state;  
        let gravityDirection = pe.gravityDirection; 
        let gravOpposite = pe.gravOpposite; 
        let protagonist = window.jlSystem.gameObjectManager.getProtagonist(); 


        //This is the part that updates what buttons  are actually pressed. 
        Object.values(this.keyCodeMap).forEach(key => {
            this.controlMap[key] = this.liveKeyMap[key];
        });


            if (this.liveKeyMap[gravityDirection]) {

            }

            if (this.liveKeyMap[gravOpposite] && !protagonist.isJumping) {
                protagonist.maxJumpDeltaTimeAccumulator += deltaTime;

                if (protagonist.maxJumpDeltaTimeAccumulator < protagonist.maxJumpDeltaTimeLimit) {
                    this.jump(gravityDirection, gravOpposite, protagonist);
                }
            }

            if (this.liveKeyMap[state.lateralDirections.a] || this.liveKeyMap[state.lateralDirections.b]) {

                this.moveLaterally(gravityDirection, gravOpposite, protagonist);
            }

        protagonist.x += protagonist.xv;
        protagonist.y += protagonist.yv;
    }
}