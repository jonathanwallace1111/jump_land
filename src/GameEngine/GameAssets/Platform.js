import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class Platform extends NonProtagonistGameObject {
    constructor(ctx, x, y, w, h, idNum) { 
      super(ctx, x, y, w, h); 
      
      this.colorObject = new ColorObject(); 
      this.fillColor = this.colorObject.untouchedObjectFillColor; 
      this.strokeColor = this.colorObject.strokeColor; 
    
      this.id = `Platform-idNum${idNum}`; 
      this.type = "Platform"; 
    }

    touchProtagonist() { 
      this.hasTouchedProtagonistBool = true; 
      this.fillColor = this.colorObject.touchedObjectFillColor; 
  }
  
    draw = () => {
      // stroke(this.strokeColor); 
      // fill(this.fillColor);
      // rect(this.renderPos.x, this.renderPos.y, this.renderW, this.renderH); 


      this.ctx.beginPath();
      this.ctx.strokeStyle = this.strokeColor;
      this.ctx.fillStyle = this.fillColor;
      this.ctx.rect(this.renderPos.x, this.renderPos.y, this.renderW, this.renderH);
      this.ctx.fill(); 
      this.ctx.stroke();
    }
  }
