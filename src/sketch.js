let game; 

function setup() {
  createCanvas(800, 800); 
  pixelDensity(1); 

  game = new Game(); 
  game.init();
}

function draw() {
  game.gameLoop();   
}



function keyPressed() {    
  if (keyCode === 38) { // up
    game.controller.keyPressedBool = true;
    game.controller.keyPressed.push("up");  
  } 
  
  if (keyCode === 40) { // down 
    game.controller.keyPressedBool = true;
    game.controller.keyPressed.push("down");  
  } 
  
  if (keyCode === 37) { // left 
    game.controller.keyPressedBool = true; 
    game.controller.keyPressed.push("left");  
  } 
  
  if (keyCode === 39) { // right 
    game.controller.keyPressedBool = true; 
    game.controller.keyPressed.push("right");  
  }

  //Below are keys to test gravity (wasd); 
  if (keyCode === 87) { // w - up
    game.physicsEngine.changeGravityDirection("up"); 
  } 
  
  if (keyCode === 83) { // s - down 
    game.physicsEngine.changeGravityDirection("down"); 
  } 
  
  if (keyCode ===65 ) { // a - left 
    game.physicsEngine.changeGravityDirection("left");   
  } 
  
  if (keyCode === 68) { // d - right 
    game.physicsEngine.changeGravityDirection("right");  
  }


}

function keyReleased() {
  if (keyCode === 38) { // up
    let indexOfDir = game.controller.keyPressed.indexOf("up");
    game.controller.keyPressed.splice(indexOfDir, 1); 
    
    if (game.controller.keyPressed.length === 0) {
      game.controller.keyPressedBool = false; 
    }
  } 

  if (keyCode === 40) { // down
    let indexOfDir = game.controller.keyPressed.indexOf("down");
    game.controller.keyPressed.splice(indexOfDir, 1);

    if (game.controller.keyPressed.length === 0) {
      game.controller.keyPressedBool = false; 
    }
  } 
  
  if (keyCode === 37) { // left ; 
    let indexOfDir = game.controller.keyPressed.indexOf("left");
    game.controller.keyPressed.splice(indexOfDir, 1); 

    if (game.controller.keyPressed.length === 0) {
      game.controller.keyPressedBool = false; 
    }
  } 
  
  if (keyCode === 39) { // right 
    let indexOfDir = game.controller.keyPressed.indexOf("right");
    game.controller.keyPressed.splice(indexOfDir, 1); 

    if (game.controller.keyPressed.length === 0) {
      game.controller.keyPressedBool = false; 
    }
  }
}