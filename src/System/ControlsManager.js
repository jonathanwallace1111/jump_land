export class ControlsManager {
    constructor(state) {

        this.state = state;

        this.keyPressedBool = false;
        this.keyPressed = [];

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

        window.keyPressed = this.keyIsPressed.bind(this);
        window.keyReleased = this.keyIsReleased.bind(this);
    }

    keyIsPressed = () => {
        if (this.keyCodeMap[keyCode]) {
            this.liveKeyMap[this.keyCodeMap[keyCode]] = true;
        }

        if (keyCode === 38) { // up
            this.keyPressed.push("up");
        }
        if (keyCode === 40) { // down 
            this.keyPressed.push("down");
        }
        if (keyCode === 37) { // left 
            this.keyPressed.push("left");
        }
        if (keyCode === 39) { // right 
            this.keyPressed.push("right");
        }

        this.keyPressedBool = true;
    }

    keyIsReleased = () => {
        if (this.keyCodeMap[keyCode]) {
            this.liveKeyMap[this.keyCodeMap[keyCode]] = false;
        }

        if (keyCode === 38) { // up
            let indexOfDir = this.keyPressed.indexOf("up");
            this.keyPressed.splice(indexOfDir, 1);
        }

        if (keyCode === 40) { // down
            let indexOfDir = this.keyPressed.indexOf("down");
            this.keyPressed.splice(indexOfDir, 1);
        }

        if (keyCode === 37) { // left ; 
            let indexOfDir = this.keyPressed.indexOf("left");
            this.keyPressed.splice(indexOfDir, 1);
        }

        if (keyCode === 39) { // right 
            let indexOfDir = this.keyPressed.indexOf("right");
            this.keyPressed.splice(indexOfDir, 1);
        }

        if (this.keyPressed.length === 0) {
            this.keyPressedBool = false;
        }
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

    update = (gravityDirection, gravOpposite, protagonist) => {
        //This is the part that updates what buttons  are actually pressed. 
        Object.values(this.keyCodeMap).forEach(key => {
            this.controlMap[key] = this.liveKeyMap[key];
        });

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