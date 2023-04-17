import { NonProtagonistGameObject } from "./NonProtagonistGameObject.js"; 

export class DeathObject extends NonProtagonistGameObject {
    constructor(x, y, w, h) {
        super(x, y, w, h);


        this.isDeathObject = true; 
    }
}