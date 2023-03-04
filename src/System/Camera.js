
export class Camera {
    constructor() { 
        this.x = 0;
        this.y = 0;
        this.scale = 1; 
    }

    updatePosition = () => { 
        let game = window.jlSystem; 
        let gom = game.gameObjectManager; 
        let protagonist = gom.getProtagonist(); 
        let state = game.state; 



        this.x = protagonist.x - (width / 2); 
        this.y = protagonist.y - (height - 200); 
    }
}