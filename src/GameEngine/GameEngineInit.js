import Game from './System/Game.js';

export function GameEngineInit() {
    let game;

    window.setup = () => {
        let canvas = createCanvas(1500, 800);

        // const canvas = document.createElement('canvas');
        // canvas.width = 800;
        // canvas.height = 600;
        // document.body.appendChild(canvas);
        // const ctx = canvas.getContext('2d');

        pixelDensity(1);

        window.jumpLandGame = new Game();
        game = window.jumpLandGame;
        game.init();
    }
    window.draw = () => {

        game.gameLoop();

    }
}
