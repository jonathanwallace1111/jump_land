import Game from './System/Game.js';

let game; 

//THIS IS JP'S CODE. THIS IS WHAT I SHOULD MIGRATE TO EVENTUALLY
window.setup = () => {
  createCanvas(800, 800);
  pixelDensity(1);
  window.jumpLandGame = new Game();
  game = window.jumpLandGame; 
  window.jumpLandGame.init(); 
}
window.draw = () => {

  window.jumpLandGame.gameLoop();

}



window.keyPressed = () => {    
    if (keyCode === 38) { // up
      game.controls.keyPressedBool = true;
      game.controls.keyPressed.push("up");  
    } 
    if (keyCode === 40) { // down 
      game.controls.keyPressedBool = true;
      game.controls.keyPressed.push("down");  
    } 
    if (keyCode === 37) { // left 
      game.controls.keyPressedBool = true; 
      game.controls.keyPressed.push("left");  
    } 
    if (keyCode === 39) { // right 
      game.controls.keyPressedBool = true; 
      game.controls.keyPressed.push("right");  
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
  
  window.keyReleased = () => {
    if (keyCode === 38) { // up
      let indexOfDir = game.controls.keyPressed.indexOf("up");
      game.controls.keyPressed.splice(indexOfDir, 1);  
      if (game.controls.keyPressed.length === 0) {
        game.controls.keyPressedBool = false; 
      }
    }   
    if (keyCode === 40) { // down
      let indexOfDir = game.controls.keyPressed.indexOf("down");
      game.controls.keyPressed.splice(indexOfDir, 1);
      if (game.controls.keyPressed.length === 0) {
        game.controls.keyPressedBool = false; 
      }
    }     
    if (keyCode === 37) { // left ; 
      let indexOfDir = game.controls.keyPressed.indexOf("left");
      game.controls.keyPressed.splice(indexOfDir, 1); 
      if (game.controls.keyPressed.length === 0) {
        game.controls.keyPressedBool = false; 
      }
    } 
    if (keyCode === 39) { // right 
      let indexOfDir = game.controls.keyPressed.indexOf("right");
      game.controls.keyPressed.splice(indexOfDir, 1); 
      if (game.controls.keyPressed.length === 0) {
        game.controls.keyPressedBool = false; 
      }
    }
  }