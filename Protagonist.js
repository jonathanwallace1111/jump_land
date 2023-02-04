class Protagonist extends PhysicalGameObject {
    constructor(x, y, w, h, gravityDirection, fillColor, strokeColor) {
      super(x, y, w, h); 
      
      this.top = this.y; 
      this.bottom = this.y + this.h; 
      this.leftSide = this.x; 
      this.rightSide = this.x + this.w; 
      this.fillColor = fillColor; 
      this.strokeColor = strokeColor; 
      
      this.isProtagonist = true; 

      this.spawnBox = new NonProtagonistGameObject(
        this.x - (this.w / 2), 
        this.y - (this.h / 2),
        this.w + this.w, 
        height - (this.y - (this.h / 2))
      )

      this.gravityDirection = gravityDirection; 
      this.xv = 0;
      this.yv = 0;

      this.isJumping = false; 
      this.maxJumpDeltaTimeAccumulator = 0; 
      this.maxJumpDeltaTimeLimit = 100; 

      this.onGround = false; 

      this.protagonistBool = true; 
      this.touchingProtagonistBool = undefined; 
    }
  
    applyGravity = () => { 
  
    }
  
    applyPhysics = () => { 
  
    }
  
    setPhysicsVariables = () => {
      this.top = this.y; 
      this.bottom = this.y + this.h; 
      this.leftSide = this.x; 
      this.rightSide = this.x + this.w; 
    }
  
    applyControllerInput = (controllerInput) => {
  
    }
  
    moveProtagonist = (controllerInput) => { 
      this.applyControllerInput(controllerInput); 
       
    }
  
    update = () => {
      this.moveProtagonist();
      this.setPhysicsVariables();
    }
  
    //eventually I want to move the jump function here
    moveLaterally = () => {
        
    }

    draw = () => { 
      stroke(this.strokeColor); 
      fill(this.fillColor); 
      rect(this.x, this.y, this.w, this.h); 
    }
  }
  
