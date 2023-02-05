

export const keyCodeMap = {
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
}

export class ControlsManager {
    constructor() {

        this.controlMap = {
            up: false,
            down: false,
            left: false,
            right: false,
        };

        this.liveKeyMap = {};

        window.keyPressed = this.keyPressed.bind(this);
        window.keyReleased = this.keyReleased.bind(this);
    }

    update() {
        Object.values(keyCodeMap).forEach(key => {
            this.controlMap[key] = this.liveKeyMap[key];
        });
    }

    keyPressed() {
        if (keyCodeMap[keyCode]) {
            this.liveKeyMap[keyCodeMap[keyCode]] = true;
        }
    }

    keyReleased() {
        if (keyCodeMap[keyCode]) {
            this.liveKeyMap[keyCodeMap[keyCode]] = false;
        }
    }
}