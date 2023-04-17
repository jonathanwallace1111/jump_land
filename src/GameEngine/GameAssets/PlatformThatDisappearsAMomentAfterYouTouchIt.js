import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class PlatformThatDisappearsAMomentAfterYouTouchIt extends NonProtagonistGameObject {
  constructor(x, y, w, h, idNum) {
    super(x, y, w, h); 

    this.colorObject = new ColorObject(); 
    this.fillColor = this.colorObject.goalObjectFillColor; 
    this.strokeColor = this.colorObject.strokeColor; 

    this.id = `PTDAMAYTI-idNum${idNum}`; 
    this.type = "PlatformThatDisappearsAMomentAfterYouTouchIt. ";

    this.dtObject = {
        timeSensetiveBool: true,
        accumulator: 0,
        dtMax: 3000,
    };

  }

  touchProtagonist = () => { 
    this.hasTouchedProtagonistBool = true; 
    this.fillColor = this.colorObject.touchedObjectFillColor; 

  }

  update = (dt) => {
    let gom = window.jlSystem.gameObjectManager; 

    if (this.hasTouchedProtagonistBool) {
        this.dtObject.accumulator += dt; 
    }

    if (this.dtObject.accumulator > this.dtObject.dtMax) {
        gom.removeObject(this); 
    }
  }

  draw = () => {
    stroke(this.strokeColor); 
    fill(this.fillColor); 
    rect(this.renderPos.x, this.renderPos.y, this.w, this.h)
  }
}