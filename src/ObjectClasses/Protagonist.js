import { ColorObject } from "../System/ColorObject.js";
import { PhysicalGameObject } from "./PhysicalGameObject.js";
import { NonProtagonistGameObject } from "./NonProtagonistGameObject.js";

export class Protagonist extends PhysicalGameObject {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    
    //I need to consolidate these three properties
    this.id = "Protagonist"; 
    this.isProtagonist = true;
    this.protagonistBool = true;

    this.spawnBox = new NonProtagonistGameObject(
      this.x - (this.w / 2),
      this.y - (this.h / 2),
      this.w + this.w,
      height - (this.y - (this.h / 2))
    )

    this.acceleration = .01
    this.currentVAbs = .8;
    this.maxLateralVelocity = 1;

    this.xv = 0;
    this.yv = 0;

    this.isJumping = false;
    this.maxJumpDeltaTimeAccumulator = 0;
    this.maxJumpDeltaTimeLimit = 100;

    this.onGround = false;

    this.colorObject = new ColorObject(); 
    this.strokeColor = this.colorObject.strokeColor;
    this.fillColor = this.colorObject.protagonistFillColor;
  }

  update = () => {

  }

  draw = () => {
    stroke(this.strokeColor);
    fill(this.fillColor);
    rect(this.x, this.y, this.w, this.h);
  }
}

