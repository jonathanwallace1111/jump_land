import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { ColorObject } from "../System/ColorObject.js";

export class PlatformAppearsAfterTouchingPreviousPlatform extends NonProtagonistGameObject {
  constructor(x, y, w, h, idNum) {
    super(x, y, w, h); 
    /* I'm thinking that the platform appearing is actually handled in the trigger and in the gom. 
    The platform that appears is actually just a platform, and there is a create object funcion in the gom*/

    this.colorObject = new ColorObject(); 
    this.fillColor = this.colorObject.goalObjectFillColor; 
    this.strokeColor = this.colorObject.strokeColor; 

    this.id = `PAATPP-idNum${idNum}`; 
    this.type = "PlatformAppearsAfterTouchingPreviousPlatform";

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