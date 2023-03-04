import { GameObject } from "./GameObject.js"

export class PhysicalGameObject extends GameObject { 
    constructor(x, y, w, h) {
        super(); 
        this.x = x; 
        this.y = y; 
        this.w = w; 
        this.h = h; 

        this.renderX = x; 
        this.renderY = y; 
        this.renderW = w; 
        this.renderH = h; 
    }
}