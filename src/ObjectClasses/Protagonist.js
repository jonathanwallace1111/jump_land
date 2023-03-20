import { ColorObject } from "../System/ColorObject.js";
import { PhysicalGameObject } from "./PhysicalGameObject.js";
import { NonProtagonistGameObject } from "./NonProtagonistGameObject.js";
import { Vector } from "../Utilities/Vector.js"; 

export class Protagonist extends PhysicalGameObject {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    
    //I need to consolidate these three properties
    this.id = "Protagonist"; 
    this.isProtagonist = true;
    this.protagonistBool = true;

    //This was only useful in the 
    this.spawnBox = new NonProtagonistGameObject(
      this.pos.x - (this.w / 2),
      this.pos.y - (this.h / 2),
      this.w + this.w,
      height - (this.y - (this.h / 2))
    )

    this.jumpVelocity = 3.5; 
    this.lateralMovementVelocity = 1;
    this.acceleration = .01
    this.maxLateralVelocity = 1;

    this.velocity = new Vector(0, 0)

    this.isJumping = false;
    this.maxJumpDeltaTimeAccumulator = 0;
    this.maxJumpDeltaTimeLimit = 100;

    this.onGround = false;

    this.dtObject = {

    }

    this.colorObject = new ColorObject(); 
    this.strokeColor = this.colorObject.strokeColor;
    this.fillColor = this.colorObject.protagonistFillColor;
  }

  update = () => {

  }

  draw = () => {
    stroke(this.strokeColor);
    fill(this.fillColor);
    rect(this.renderPos.x, this.renderPos.y, this.renderW, this.renderH);
  }
}

