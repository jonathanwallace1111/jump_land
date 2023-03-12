import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";
import { Vector } from "../Utilities/Vector.js";

export class MediumBox {
  constructor(x, y) {

    this.pos = new Vector(x, y); 
    this.renderPos = new Vector(x, y); 


    this.w = 75; 
    this.h = 75; 

    this.colorObject = new ColorObject(); 
    this.fillColor = this.colorObject.untouchedObjectFillColor; 
    this.strokeColor = this.colorObject.strokeColor; 
  }
  
    touchProtagonist() { 
      this.hasTouchedProtagonistBool = true; 
      this.fillColor = this.colorObject.touchedObjectFillColor; 
    }

    update = () => {
      
    }

    draw = () => {
      stroke(this.strokeColor); 
      fill(this.fillColor); 
      rect(this.renderPos.x, this.renderPos.y, this.w, this.h)
    }
  }
