export class ColorObject {
    constructor() {

        this.colorsArr = [
            "#FE2712", //RED
            "#FC600A", //RED-ORANGE
            "#FB9902", //ORANGE
            "#FCCC1A", //YELLOW-ORANGE
            "#FEFE33", //YELLOW
            "#B2D732", //YELLOW-GREEN
            "#66B032", //GREEN
            "#347C98", //BLUE-GREEN
            "#0247FE", //BLUE
            "#4424D6", //BLUE-PURPLE
            "#8601AF", //PURPLE
            "#C21460"  //RED-PURPLE 
        ];

        this.possibleCombosArr = [
            [0, 6], //COMPLEMENTARY
            [0, 4, 8], //TRIAD
            [0, 5, 7], // SPLIT COMPLEMENTARY
            [0, 3, 6, 9], // TETRAD SQUARE
            [0, 4, 6, 10] // TETRAD RECTANGLE
        ];

        this.wheelOffset = 0;

        this.currentColorPaletteIndex = 1

        this.currentColorPalette = this.possibleCombosArr[this.currentColorPaletteIndex];

        /* this is the code to make the primary, secondar, and tertiary colors to be the first, second, and third colors in the array pallete 
           i'm commenting it out to run some experiemnts*/
        // this.primaryColor = this.colorsArr[this.currentColorPalette[0]];
        // this.secondaryColor = this.colorsArr[this.currentColorPalette[1]];
        // this.tertiaryColor = this.colorsArr[this.currentColorPalette[2]]; 

        //experimental code. just quickly assigning the colors i want
        this.primaryColor = "#FE2712"; //RED
        this.secondaryColor = "#0247FE", //BLUE
        this.tertiaryColor = "black"; //BLACK
        this.quaternaryColor = "#8601AF"; //PURPLE;

        //#b956a0 light purplish pink
        //#26beb4 teal

        this.strokeColor = "white"; 

        //I haven't implemented this in any way. I just found these two cool color palettes and I put them in here. 
        this.colorPalettes = {
            pastel: ['#f38093', '#f291bc', '#e5b6d4', '#8b8ac3', '#95cbe4', '#9fd9da', '#9fd9da', '#cae189', '#cae189', '#fece79', '#fece79', '#f4806f'],
            neon: ['#ee2f45', '#ea468b', '#b956a0', '#915aa7', '#508aca', '#26beb4', '#66be6b', '#a2cd48', '#eed31b', '#f4af1b', '#ee6f24', '#f04726']
        }
    }

    getNewColorIndex = () => {
        let newColorIndex = floor(random(this.currentColorPalette.length - 1)) + 1;
        return newColorIndex;
    }

    generateRandomColorFromPaletteOtherThanPrimary = () => { 
        let newColorIndex = floor(random(this.currentColorPalette.length - 1)) + 1;
        let color = this.colorsArr[this.currentColorPalette[newColorIndex]];
        return color;
    }

    generateRandomColorFromPalette = () => { 
        let newColorIndex = floor(random(this.currentColorPalette.length));
        let color = this.colorsArr[this.currentColorPalette[newColorIndex]];
        return color;
    }

    returnPrimaryColor = () => {
        return this.primaryColor;
    }

    returnSecondaryColor = () => {
        return this.secondaryColor; 
    }

    returnTertiaryColor = () => {
        return this.tertiaryColor; 
    }

    returnQuaternaryColor = () => {
        return this.quaternaryColor; 
    }

    generateRandomColorFromAllColors = () => {
        let newRandomColor = this.colorsArr[floor(random(this.colorsArr.length))];
        return newRandomColor;
    }

    shiftColorArr = () => {
        this.colorsArr.unshift(this.colorsArr.pop());
        this.primaryColor = this.colorsArr[0];
        this.secondaryColor = this.colorsArr[1]; 
        this.tertiaryColor = this.colorsArr[2]; 
    }

    changePrimaryColor = () => {
        this.currentColorPaletteIndex += 1;

        if (this.currentColorPaletteIndex >= this.possibleCombosArr.length) {
            this.currentColorPaletteIndex = 0
        }

        this.currentColorPalette = this.possibleCombosArr[this.currentColorPaletteIndex];
    }
}
