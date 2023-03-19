import { DeathObject } from "../ObjectClasses/DeathObject.js"; 

export class Spike extends DeathObject {
    constructor(x, y) {
        super(x, y) 
        
        this.w = 25; 
        this.h = 25; 
        this.halfW = this.w / 2; 
        this.halfH = this.h /2; 
        this.quarterW = this.w / 4; 
        this.quarterH = this.h / 4; }

    draw = () => {
        stroke("white");
        fill("red"); 

        rect(this.pos.x + this.quarterW, this.pos.y, this.halfW, this.halfH);
        rect(this.pos.x, this.pos.y + this.halfH, this.halfW, this.halfH);
        rect(this.pos.x + this.halfW, this.pos.y + this.halfH, this.halfW, this.halfH); 
    }
}