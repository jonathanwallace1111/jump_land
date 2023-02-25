import Game from './System/Game.js';

let game; 

window.setup = () => {
  createCanvas(800, 800);
  pixelDensity(1);

  window.jumpLandGame = new Game();
  game = window.jumpLandGame; 
  game.init(); 
}
window.draw = () => {

  game.gameLoop();

}
