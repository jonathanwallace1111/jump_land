import { GameObject } from "./GameObject.js"; 
import { Vector } from "../Utilities/Vector.js"; 

export class PhysicalGameObject extends GameObject { 
    constructor(x, y, w, h) {
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
    }
}