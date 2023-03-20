import { DeathObject } from "../ObjectClasses/DeathObject.js"; 
import { ColorObject } from "../System/ColorObject.js";

export class DeathStake extends DeathObject {
  constructor(x, y, w, h, idNum) {
    super(x, y, w, h); 

    this.colorObject = new ColorObject();
    this.fillColor = this.colorObject.deathObjectFillColor;
    this.strokeColor = this.colorObject.strokeColor;

    this.id = `DS-idNum${idNum}`; 
    this.type = "DeathStake"; 
  }

  touchProtagonist = () => { 
    this.hasTouchedProtagonistBool = true; 

}

  draw = () => {
    stroke(this.strokeColor);
    fill(this.fillColor);
    // rect(this.x, this.y, this.w, this.h); 
    rect(this.renderPos.x, this.renderPos.y, this.renderW, this.renderH);
  }
}
