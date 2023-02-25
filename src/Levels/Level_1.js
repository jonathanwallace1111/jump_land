import { Level } from "../ObjectClasses/Level.js";
import { WallFloor } from "../GameAssets/WallFloor.js";
import { Box } from "../GameAssets/Box.js"; 

export class Level_1 extends Level {
    constructor(protagonist, physicsEngine, fillColor, strokeColor) {
      super();
      this.wallFloorFillColor = fillColor; 
      this.wallFloorStrokeColor = strokeColor; 
      this.boxFillColor = fillColor; 
      this.boxStrokeColor = strokeColor; 
      this.physicsEngine = physicsEngine;
      this.protagonist = protagonist;
      this.outerBoundriesArr = undefined;
      this.boxesArr = undefined;
      this.wallFloorThickness = 20;
      this.roomHeightAndWidth = 800 - this.wallFloorThickness;
      this.outerBoundryBufferForBoxes = 50;
    }
    createOuterBoundries = () => {
      return [
        //hard coding WallFloor idnum for now (fifth argument)
        new WallFloor(0, 0, this.roomHeightAndWidth, this.wallFloorThickness, 1, this.wallFloorFillColor, this.wallFloorStrokeColor), // ceiling
        new WallFloor(this.roomHeightAndWidth, 0, this.wallFloorThickness, this.roomHeightAndWidth, 2, this.wallFloorFillColor, this.wallFloorStrokeColor), // right wall
        new WallFloor(this.wallFloorThickness, this.roomHeightAndWidth, this.roomHeightAndWidth, this.wallFloorThickness, 3, this.wallFloorFillColor, this.wallFloorStrokeColor), // floor
        new WallFloor(0, this.wallFloorThickness, this.wallFloorThickness, this.roomHeightAndWidth, 4, this.wallFloorFillColor, this.wallFloorStrokeColor) // left wall
      ]
    }
  
    createRandomBoxes = () => {
      let randomBoxArr = [];
      let numOfBoxes = random(4, 8);
  
      for (let i = 0; i < numOfBoxes; i++) {
        let box = new Box (
          random(this.wallFloorThickness + this.outerBoundryBufferForBoxes, this.roomHeightAndWidth - this.outerBoundryBufferForBoxes),
          random(this.wallFloorThickness + this.outerBoundryBufferForBoxes, this.roomHeightAndWidth - this.outerBoundryBufferForBoxes),
          50,
          50, 
          i,
          this.boxFillColor,
          this.boxStrokeColor
        )
  
        while (!!randomBoxArr.find(b => this.physicsEngine.collisionDetection(b, box)) || !!this.physicsEngine.collisionDetection(this.protagonist.spawnBox, box)) {
          box = new Box (
            random(this.wallFloorThickness + this.outerBoundryBufferForBoxes, this.roomHeightAndWidth - this.outerBoundryBufferForBoxes),
            random(this.wallFloorThickness + this.outerBoundryBufferForBoxes, this.roomHeightAndWidth - this.outerBoundryBufferForBoxes),
            50,
            50, 
            i, 
            this.boxFillColor,
            this.boxStrokeColor
          )      
        }
  
        randomBoxArr.push(box);
      }
  
      return randomBoxArr;
    }
  
    init = () => {
      this.outerBoundriesArr = this.createOuterBoundries();
      this.boxesArr = this.createRandomBoxes();

      this.outerBoundriesArr.forEach(b => console.log(b));
      this.boxesArr.forEach(b => console.log(b));
    }
  
    update = () => {
  
    }
  
    draw = () => {
      for (let i = 0; i < this.outerBoundriesArr.length; i++) {
        this.outerBoundriesArr[i].draw();
      }
      for (let i = 0; i < this.boxesArr.length; i++) {
        this.boxesArr[i].draw();
      }
    }
  } 