import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class Key extends NonProtagonistGameObject {
  constructor(x, y, w, h, idNum) {
    super(x, y, w, h); 

    this.colorObject = new ColorObject(); 
    this.fillColor = this.colorObject.goalObjectFillColor; 
    this.strokeColor = this.colorObject.strokeColor; 

    this.id = `Key-idNum${idNum}`; 
    this.type = "Key"; 

    //Whether or not a the level has keys, and how many keys have been collected needs to be managed through state.
    //Perhaps it should be handled in the gom instead of state? 
  }

  touchProtagonist = () => { 
    this.hasTouchedProtagonistBool = true; 
    this.fillColor = this.colorObject.touchedObjectFillColor; 
    //Communicate with state or gom here 
  }

  draw = () => {
    stroke(this.strokeColor); 
    fill(this.fillColor); 
    rect(this.renderPos.x, this.renderPos.y, this.w, this.h)
  }
}
