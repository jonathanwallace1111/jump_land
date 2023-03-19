import { DeathObject } from "../ObjectClasses/DeathObject.js"; 
import { Spike } from "./Spike.js"; 

export class SmallSpikePlatform extends DeathObject {
    constructor(x, y) {
        super(x, y); 

        this.numOfSpikes = 3; 
        this.spikesArr = []; 
        this.w = 0; 
        this.h = 0; 

        this.init(); 
    }

    init = () => {
        let exampleSpike = new Spike(this.pos.x, this.pos.y); 

        for (let i = 0; i < this.numOfSpikes; i++) {
            this.spikesArr.push(new Spike(this.pos.x + exampleSpike.w * i, this.pos.y)); 
        }

        this.w = exampleSpike.w * this.numOfSpikes; 
        this.h = exampleSpike.h; 


    }

    touchProtagonist() { 
        this.hasTouchedProtagonistBool = true; 
    }

    draw = () => {
        
        for (let i = 0; i < this.spikesArr.length; i++) {
            let s = this.spikesArr[i]
            
            s.pos.x = this.pos.x + s.w * i; 
            s.pos.y = this.pos.y; 
        }

        // console.log(this.pos); 
        
        
        this.spikesArr.forEach(s => s.draw()); 
    }
}