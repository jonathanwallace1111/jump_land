import { GameObject } from "./GameObject.js"; 
import { Vector } from "../Utilities/Vector.js"; 

export class PhysicalGameObject extends GameObject { 
    constructor(x, y, w=0, h=0) {
        super(); 
        this.pos = new Vector(x, y); 
        // this.x = x; 
        // this.y = y; 
        this.w = w; 
        this.h = h; 

        this.renderPos = new Vector(x, y); 
        // this.renderX = x; 
        // this.renderY = y; 
        this.renderW = w; 
        this.renderH = h; 

        this.dtAccumulator = 0;

    }

    rotate = () => {
        console.log("rotate"); 
        let newW = this.h;
        let newH = this.w;
        this.w = newW;
        this.h = newH;
    }
}