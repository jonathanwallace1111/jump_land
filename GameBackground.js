class GameBackground extends GameObject {
    constructor(color) {
        super(); 
        this.color = color; 
    }

    update = () => {
        
    }

    draw = () => {
        background(this.color); 
    }
}
