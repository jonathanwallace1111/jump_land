import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class MediumPlatform extends NonProtagonistGameObject {
    constructor(x, y, w, h, idNum) { 
      super(x, y, w, h); 
      
      this.colorObject = new ColorObject(); 
      this.fillColor = this.colorObject.untouchedObjectFillColor; 
      this.strokeColor = this.colorObject.strokeColor; 

      this.top = y; 
      this.bottom = this.y + this.h; 
      this.leftSide = this.pos.x; 
      this.rightSide = this.pos.x + this.w;
    
      this.id = `MP-idNum${idNum}`; 
      this.type = "mediumPlatform"; 
    }

    touchProtagonist() { 
      this.hasTouchedProtagonistBool = true; 
      this.fillColor = this.colorObject.touchedObjectFillColor; 
  }
  
    draw = () => {
      stroke(this.strokeColor); 
      fill(this.fillColor);
      // rect(this.x, this.y, this.w, this.h); 
      rect(this.renderPos.x, this.renderPos.y, this.renderW, this.renderH); 
    }
  }
