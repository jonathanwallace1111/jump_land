import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class GoalObject extends NonProtagonistGameObject {
  constructor(x, y, w, h, idNum) {
    super(x, y, w, h); 

    this.isGoalObject = true; 

    this.colorObject = new ColorObject(); 
    this.fillColor = this.colorObject.goalObjectFillColor; 
    this.strokeColor = this.colorObject.strokeColor; 

    this.id = `GO -idNum${idNum}`; 
    this.type = "GoalObject"; 
  }

  touchProtagonist = () => { 
    this.hasTouchedProtagonistBool = true; 
    this.fillColor = this.colorObject.touchedObjectFillColor; 
}

    draw = () => {
      stroke(this.strokeColor); 
      fill(this.fillColor); 
      rect(this.renderPos.x, this.renderPos.y, this.w, this.h)
    }
  }
