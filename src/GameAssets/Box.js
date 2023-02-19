import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";

export class Box extends NonProtagonistGameObject {
    constructor(x, y, w, h, idNum, fillColor, strokeColor) {
      super(x, y, w, h); 

      this.fillColor = fillColor; 
      this.strokeColor = strokeColor; 

      this.id = `WF-idNum${idNum}`; 
    }
  
    draw = () => {
      stroke(this.strokeColor); 
      fill(this.fillColor); 
      rect(this.x, this.y, this.w, this.h)
    }
  }
