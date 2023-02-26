import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class Box extends NonProtagonistGameObject {
    constructor(x, y, w, h, idNum, fillColor, strokeColor) {
      super(x, y, w, h); 
      this.colorObject = new ColorObject(); 


      this.fillColor = this.colorObject.untouchedObjectFillColor; 
      this.strokeColor = this.colorObject.strokeColor; 

      this.id = `WF-idNum${idNum}`; 
    }
  
    touchProtagonist() { 
      this.hasTouchedProtagonistBool = true; 
      this.fillColor = this.colorObject.touchedObjectFillColor; 
    }

    draw = () => {
      stroke(this.strokeColor); 
      fill(this.fillColor); 
      rect(this.x, this.y, this.w, this.h)
    }
  }
