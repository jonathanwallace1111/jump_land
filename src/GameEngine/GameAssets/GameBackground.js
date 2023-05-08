import { GameObject } from "../ObjectClasses/GameObject.js";

export class GameBackground extends GameObject {
    constructor(ctx, color) {
        super(ctx);

        this.color = color; 
    }

    update = () => {
        
    }

    draw = () => {
        this.ctx.fillStyle = this.color; 
        this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); 
    }
}
