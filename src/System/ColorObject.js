export class ColorObject {
    constructor() {
        
        this.colorPalette = {
            red: "#FE2712", 
            redOrange: "#FC600A", 
            orange: "#FB9902", 
            yellowOrange: "#FCCC1A", 
            yellow: "#FEFE33", 
            yellowGreen: "#B2D732", 
            green: "#66B032", 
            blueGreen: "#347C98", 
            blue: "#0247FE", 
            bluePurple: "#4424D6", 
            purple: "#8601AF", 
            redPurple: "#C21460",
            black: "#000000",
            white: "#FFFFFF"
        };

        this.protagonistFillColor = this.colorPalette.blue; 
        this.backgroundColor = this.colorPalette.black; 
        this.untouchedObjectFillColor = this.colorPalette.red;
        this.touchedObjectFillColor = this.colorPalette.purple;
        this.strokeColor = this.colorPalette.white; 
    }
}
