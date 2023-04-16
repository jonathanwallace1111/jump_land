import { GameObject } from "./GameObject.js"; 
import { Vector } from "../Utilities/Vector.js"; 

export class PhysicalGameObject extends GameObject { 
    constructor(x, y, w=0, h=0) {
        super(); 
        this.pos = new Vector(x, y); 
        this.w = w; 
        this.h = h; 

        this.renderPos = new Vector(x, y); 
        this.renderW = w; 
        this.renderH = h; 

        this.dtObject = {
            timeSensetiveBool: false,
            accumulator: 0,
        };  

        this.isDeathObject = false; 
        this.isGoalObject = false; 
    }

    rotate = () => {
        let newW = this.h;
        let newH = this.w;
        this.w = newW;
        this.h = newH;
    }
}