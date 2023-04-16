import { NonProtagonistGameObject } from "../ObjectClasses/NonProtagonistGameObject.js";
import { Platform } from "./Platform.js";
import { DeathStake } from "./DeathStake.js";
import { ColorObject } from "../System/ColorObject.js";

export class OneSidePlatformOppositeSideKillsYou extends NonProtagonistGameObject {
  constructor(x, y, w, h, idNum) {
    super(x, y, w, h); 

    /* My plan now is in the level manager to check if objects are compound objects and, if so, add each obj in
    the objArr to the gameObjects array separately. I haven't implemented this yet, but this is my plan. */
    this.compoundObjectBool = true; 
    this.safePlatformSide = new Platform(x, y, w, h / 2); 
    this.deathSide = new DeathStake(x, y + h / 2, w, h / 2);
    this.objArr = [this.safePlatformSide, this.deathSide];

    this.id = `OSPOSKY-idNum${idNum}`; 
    this.type = "OneSidePlatformOppositeSideKillsYou"; 

    //Whether or not a the level has keys, and how many keys have been collected needs to be managed through state.

  }

  touchProtagonist = () => { 
    this.hasTouchedProtagonistBool = true; 
    this.fillColor = this.colorObject.touchedObjectFillColor; 
    //Communicate with state here 
  }

  draw = () => {
    stroke(this.safePlatformSide.strokeColor); 
    fill(this.safePlatformSide.fillColor); 
    rect(this.safePlatformSide.renderPos.x, this.safePlatformSide.renderPos.y, this.safePlatformSide.w, this.safePlatformSide.h)

    stroke(this.deathSide.strokeColor); 
    fill(this.deathSide.fillColor); 
    rect(this.deathSide.renderPos.x, this.deathSide.renderPos.y, this.deathSide.w, this.deathSide.h)
  }
}