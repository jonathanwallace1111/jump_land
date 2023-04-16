import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class DisappearAfterLeavingPlatform extends NonProtagonistGameObject {
  constructor(x, y, w, h, idNum) {
    super(x, y, w, h); 

    this.colorObject = new ColorObject(); 
    this.fillColor = this.colorObject.goalObjectFillColor; 
    this.strokeColor = this.colorObject.strokeColor; 

    this.id = `DALP-idNum${idNum}`; 
    this.type = "DisappearAfterLeavingPlatform"; 



  }

  touchProtagonist = () => { 
    this.hasTouchedProtagonistBool = true; 
    this.fillColor = this.colorObject.touchedObjectFillColor; 
  }

  protagnoistNoLongerTouching() {
    let gom = window.jlSystem.gameObjectManager; 
    gom.removeObject(this); 
  }

  draw = () => {
    stroke(this.strokeColor); 
    fill(this.fillColor); 
    rect(this.renderPos.x, this.renderPos.y, this.w, this.h)
  }
}