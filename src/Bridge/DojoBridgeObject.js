import Game from "../GameEngine/System/Game"; 

export default class DojoBridgeObject {
    constructor() {
        this.game = null; 

        this.canvas = null; 
        this.ctx = null; 
        
    }

    createNewCanvas = () => {
        this.canvas = document.createElement('canvas');
        this.canvas.width = 1500; 
        this.canvas.height = 800; 
        document.body.appendChild(this.canvas); 
        this.ctx = this.canvas.getContext('2d');
    }

    destroyCanvas = () => {
        this.canvas.remove(); 
        this.canvas = null; 
    }


    startDojo = () => {
        this.createNewCanvas(); 
        this.game = new Game(this.ctx); 
        this.game.init(); 

        this.game.gameLoop(); 
    }

    stopDojo = () => {


        this.destroyCanvas(); 

    }

    pauseGame = () => {
        //The dojoManager function this relates to is also called pauseGame
        //Needs to switch from game.controlsManager to the react side controls 
    }

    unpauseGame = () => {
        //The dojoManager function this relates to is also called unpauseGame
        //Needs to switch from react side controls, back to game.controlsManager 
    }
}