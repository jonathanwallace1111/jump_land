import Game from './System/Game';

window.setup = () => {
    createCanvas(800, 800);
    pixelDensity(1);

    window.jumpLandGame = new Game();
}

window.draw = () => {
    window.jumpLandGame.gameLoop();
}