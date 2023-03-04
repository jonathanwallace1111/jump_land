import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class WallFloor extends NonProtagonistGameObject {
    constructor(x, y, w, h, idNum) { 
      super(x, y, w, h); 
      
      this.colorObject = new ColorObject(); 
      this.fillColor = this.colorObject.untouchedObjectFillColor; 
      this.strokeColor = this.colorObject.strokeColor; 

      this.top = y; 
      this.bottom = this.y + this.h; 
      this.leftSide = this.x; 
      this.rightSide = this.x + this.w;
    
      this.id = `WF-idNum${idNum}`; 
      this.type = "wallFloor"; 
    }

    touchProtagonist() { 
      this.hasTouchedProtagonistBool = true; 
      this.fillColor = this.colorObject.touchedObjectFillColor; 
  }
  
    draw = () => {
      stroke(this.strokeColor); 
      fill(this.fillColor);
      // rect(this.x, this.y, this.w, this.h); 
      rect(this.renderX, this.renderY, this.renderW, this.renderH); 
    }
  }
