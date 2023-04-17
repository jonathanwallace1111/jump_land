import Game from './System/Game.js';

export function GameEngineInit() {
    let game;

    window.setup = () => {
        let canvas = createCanvas(1500, 800);
        pixelDensity(1);

        window.jumpLandGame = new Game();
        game = window.jumpLandGame;
        game.init();
    }
    window.draw = () => {

        game.gameLoop();

    }
}
