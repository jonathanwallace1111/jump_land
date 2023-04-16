import { ColorObject } from "../System/ColorObject.js";
import { PhysicalGameObject } from "./PhysicalGameObject.js";
import { NonProtagonistGameObject } from "./NonProtagonistGameObject.js";
import { Vector } from "../Utilities/Vector.js"; 

export class Protagonist extends PhysicalGameObject {
  constructor(x, y, w, h) {
    super(x, y, w, h);
  
    this.id = "Protagonist"; 

    //This only seems to be useful in the dojo
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
    this.maxJumpDeltaTimeLimit = 175;

    this.onGround = false;

    this.dtObject = {

    }

    this.inCorner = false; 

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

