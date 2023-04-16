// import { Camera } from "./Camera";
import { Box } from "../GameAssets/Box.js"
import { Platform } from "../GameAssets/Platform.js"; 
import { DeathStake } from "../GameAssets/DeathStake.js"
import { GoalObject } from "../GameAssets/GoalObject.js"



export class ControlsManager {
    constructor() {

        this.keyCodeMap = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            82: 'r',
        }

        this.controlMap = {
            up: false,
            down: false,
            left: false,
            right: false,
            r: false,
        };

        this.liveKeyMap = {
            up: false,
            down: false,
            left: false,
            right: false,
            r: false,
        };

        this.newObjectCreated = false; 

        window.mousePressed = this.mouseIsPressed.bind(this);
        window.mouseDragged = this.mouseIsDragged.bind(this);

        window.keyPressed = this.keyIsPressed.bind(this);
        window.keyReleased = this.keyIsReleased.bind(this);
    }

    mouseIsPressed = () => {
        let objArr = window.jlSystem.gameObjectManager.gameObjects;
        let state = window.jlSystem.state;

        this.newObjectCreated = false; 

        state.selectedObject = objArr.find(obj => {
            state.objectIsSelected = true; 
            return (mouseX <= obj.renderPos.x + obj.w &&
                mouseX >= obj.renderPos.x &&
                mouseY <= obj.renderPos.y + obj.h &&
                mouseY >= obj.renderPos.y);
        })
    }

    mouseIsDragged = () => {
        let state = window.jlSystem.state; 
        let selectedObject = state.selectedObject;
        let camera = window.jlSystem.camera;

        if (!!selectedObject) {
            selectedObject.pos.x = mouseX + camera.pos.x;
            selectedObject.pos.y = mouseY + camera.pos.y;
        }
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

    moveLaterally = () => {
        let pe = window.jlSystem.physicsEngine;
        let state = window.jlSystem.state;
        let gravityDirection = state.gravityDirection;
        let gravOpposite = state.gravOpposite;
        let protagonist = window.jlSystem.gameObjectManager.getProtagonist();

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
                protagonist.velocity.y -= protagonist.lateralMovementVelocity;
                break;
            case "down":
                protagonist.velocity.y += protagonist.lateralMovementVelocity;
                break;
            case "left":
                protagonist.velocity.x -= protagonist.lateralMovementVelocity;
                break;
            case "right":
                protagonist.velocity.x += protagonist.lateralMovementVelocity;
                break;
            default:
                return;
        }
    }

    jump = () => {
        let pe = window.jlSystem.physicsEngine;
        let state = window.jlSystem.state; 
        let gravityDirection = state.gravityDirection;
        let gravOpposite = state.gravOpposite;
        let protagonist = window.jlSystem.gameObjectManager.getProtagonist();

        switch (gravOpposite) {
            case "up":
                protagonist.velocity.y -= protagonist.jumpVelocity;
                protagonist.jumping = true
                protagonist.onGround = false;
                break;
            case "down":
                protagonist.velocity.y += protagonist.jumpVelocity;
                protagonist.jumping = true
                protagonist.onGround = false;
                break;
            case "left":
                protagonist.velocity.x -= protagonist.jumpVelocity;
                protagonist.jumping = true
                protagonist.onGround = false;
                break;
            case "right":
                protagonist.velocity.x += protagonist.jumpVelocity;
                protagonist.jumping = true
                protagonist.onGround = false;
            default:
                return
        }

        return
    }

    levelBuilderUpdate = () => {
        let camera = window.jlSystem.camera;
        let state = window.jlSystem.state; 
        let gameObjArr = window.jlSystem.gameObjectManager.gameObjects;
        let globalState = window.jlSystem.state; 

        Object.values(this.keyCodeMap).forEach(key => {
            this.controlMap[key] = this.liveKeyMap[key];
        });


        let cameraV = 6;
        if (this.liveKeyMap['up']) {
            camera.pos.y -= cameraV;
        }
        if (this.liveKeyMap['down']) {
            camera.pos.y += cameraV;
        }
        if (this.liveKeyMap['left']) {
            camera.pos.x -= cameraV;
        }
        if (this.liveKeyMap['right']) {
            camera.pos.x += cameraV;
        }

        //ROTATE OBJECT
        if (this.liveKeyMap['r']) {
            if (state.objectIsSelected) {
                if (!this.newObjectCreated) {
                    this.newObjectCreated = true;
                    state.selectedObject.rotate(); 
                }
            }
        }
    }

    update = () => {
        let pe = window.jlSystem.physicsEngine;
        let state = window.jlSystem.state;
        let gravityDirection = state.gravityDirection;
        let gravOpposite = state.gravOpposite;
        let protagonist = window.jlSystem.gameObjectManager.getProtagonist();

        Object.values(this.keyCodeMap).forEach(key => {
            this.controlMap[key] = this.liveKeyMap[key];
        });

        if (this.liveKeyMap["f"]) {
            state.inLevelBuilderMode = true; 
        }

        if (this.liveKeyMap[gravOpposite] && !protagonist.isJumping) {
            protagonist.maxJumpDeltaTimeAccumulator += deltaTime;
            if (protagonist.maxJumpDeltaTimeAccumulator < protagonist.maxJumpDeltaTimeLimit) {
                this.jump();
            }
        }

        if (this.liveKeyMap[state.lateralDirections.a] || this.liveKeyMap[state.lateralDirections.b]) {
            this.moveLaterally();
        }

        protagonist.pos.x += protagonist.velocity.x;
        protagonist.pos.y += protagonist.velocity.y;
    }
}