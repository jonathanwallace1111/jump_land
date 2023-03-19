import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class GoalObject extends NonProtagonistGameObject {
  constructor(x, y) {
    super(x, y); 

    this.id = "GoalObject"; 

    this.w = 35; 
    this.h = 35; 

    this.colorObject = new ColorObject(); 
    this.fillColor = this.colorObject.goalObjectFillColor; 
    this.strokeColor = this.colorObject.strokeColor; 

    this.isGoalObject = true; 
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
