// import { Camera } from "./Camera";
import { SmallBox } from "../GameAssets/SmallBox.js";
import { MediumBox } from "../GameAssets/MediumBox.js";
import { LargeBox } from "../GameAssets/LargeBox.js";
import { SmallPlatform } from "../GameAssets/SmallPlatform.js";
import { MediumPlatform } from "../GameAssets/MediumPlatform.js";
import { LargePlatform } from "../GameAssets/LargePlatform.js";
import { Spike } from "../GameAssets/Spike.js";
import { SmallSpikePlatform } from "../GameAssets/SmallSpikePlatform.js";



export class ControlsManager {
    constructor() {

        this.keyCodeMap = {
            37: 'left',
            38: 'up',
            39: 'right',
            40: 'down',
            81: 'q',
            87: 'w',
            69: 'e',
            65: 'a',
            83: 's',
            68: 'd',
            90: 'z',
            88: 'x',
            67: 'c',
            82: 'r',
            84: 't',
            89: 'y',
            70: 'f',
            71: 'g',
            72: 'h',
            86: 'v',
            66: 'b',
            78: 'n',
        }

        this.controlMap = {
            up: false,
            down: false,
            left: false,
            right: false,
            q: false,
            w: false,
            e: false,
            a: false,
            s: false,
            d: false,
            z: false,
            x: false,
            c: false,
            r: false,
            t: false,
            y: false,
            f: false,
            g: false,
            h: false,
            v: false,
            b: false,
            n: false,
        };

        this.liveKeyMap = {
            up: false,
            down: false,
            left: false,
            right: false,
            q: false,
            w: false,
            e: false,
            a: false,
            s: false,
            d: false,
            z: false,
            x: false,
            c: false,
            r: false,
            t: false,
            y: false,
            f: false,
            g: false,
            h: false,
            v: false,
            b: false,
            n: false,
        };

        this.localState = {
            newObjectCreated: false,
            objectIsSelected: false,
            selectedObject: undefined,
        }

        window.mousePressed = this.mouseIsPressed.bind(this);
        window.mouseDragged = this.mouseIsDragged.bind(this);

        window.keyPressed = this.keyIsPressed.bind(this);
        window.keyReleased = this.keyIsReleased.bind(this);
    }

    mouseIsPressed = () => {
        let objArr = window.jlSystem.gameObjectManager.gameObjects;
        let state = window.jlSystem.state;

        this.localState.newObjectCreated = false;

        this.localState.selectedObject = objArr.find(obj => {
            this.localState.objectIsSelected = true; 
            return (mouseX <= obj.renderPos.x + obj.w &&
                mouseX >= obj.renderPos.x &&
                mouseY <= obj.renderPos.y + obj.h &&
                mouseY >= obj.renderPos.y);
        })
    }

    mouseIsDragged = () => {

        let selectedObject = this.localState.selectedObject;
        let camera = window.jlSystem.camera;

        if (!!selectedObject) {
            selectedObject.pos.x = mouseX + camera.pos.x;
            selectedObject.pos.y = mouseY + camera.pos.y;
        }

        // console.log(selectedObject.pos); 

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
        let gravityDirection = pe.gravityDirection;
        let gravOpposite = pe.gravOpposite;
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
        let gravityDirection = pe.gravityDirection;
        let gravOpposite = pe.gravOpposite;
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
        let gameObjArr = window.jlSystem.gameObjectManager.gameObjects;

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

        if (this.liveKeyMap['q']) {
            if (!this.localState.newObjectCreated) {
                this.localState.newObjectCreated = true;
                gameObjArr.push(new SmallBox(400, 400));
            }
        }
        if (this.liveKeyMap['w']) {
            if (!this.localState.newObjectCreated) {
                this.localState.newObjectCreated = true;
                gameObjArr.push(new MediumBox(400, 400));
            }
        }
        if (this.liveKeyMap['e']) {
            if (!this.localState.newObjectCreated) {
                this.localState.newObjectCreated = true;
                gameObjArr.push(new LargeBox(400, 400));
            }
        }

        if (this.liveKeyMap['a']) {
            if (!this.localState.newObjectCreated) {
                this.localState.newObjectCreated = true;
                gameObjArr.push(new SmallPlatform(400, 400));
            }
        }
        if (this.liveKeyMap['s']) {
            if (!this.localState.newObjectCreated) {
                this.localState.newObjectCreated = true;
                gameObjArr.push(new MediumPlatform(400, 400));
            }
        }
        if (this.liveKeyMap['d']) {
            if (!this.localState.newObjectCreated) {
                this.localState.newObjectCreated = true;
                gameObjArr.push(new LargePlatform(400, 400));
            }
        }

        if (this.liveKeyMap['z']) {
            //ROTATE OBJECT
            if (this.localState.objectIsSelected) {
                if (!this.localState.newObjectCreated) {
                    this.localState.newObjectCreated = true;
                    console.log("rotate conditional")
                    this.localState.selectedObject.rotate(); 
                }
            }

        }
        if (this.liveKeyMap['x']) {
            console.log(gameObjArr);
        }
        if (this.liveKeyMap['c']) {

        }

        if (this.liveKeyMap['r']) {
            if (!this.localState.newObjectCreated) {
                this.localState.newObjectCreated = true;
                gameObjArr.push(new Spike(400, 400));
            }
        }
        if (this.liveKeyMap['t']) {
            if (!this.localState.newObjectCreated) {
                this.localState.newObjectCreated = true;
                gameObjArr.push(new SmallSpikePlatform(400, 400));
            }
        }
        if (this.liveKeyMap['y']) {

        }

        if (this.liveKeyMap['f']) {

        }
        if (this.liveKeyMap['g']) {

        }
        if (this.liveKeyMap['h']) {

        }

        if (this.liveKeyMap['v']) {

        }
        if (this.liveKeyMap['b']) {

        }
        if (this.liveKeyMap['n']) {

        }
    }

    update = () => {
        let pe = window.jlSystem.physicsEngine;
        let state = window.jlSystem.state;
        let gravityDirection = pe.gravityDirection;
        let gravOpposite = pe.gravOpposite;
        let protagonist = window.jlSystem.gameObjectManager.getProtagonist();

        Object.values(this.keyCodeMap).forEach(key => {
            this.controlMap[key] = this.liveKeyMap[key];
        });

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