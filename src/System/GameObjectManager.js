import { GameBackground } from "../GameAssets/GameBackground.js";
import { ColorObject } from "./ColorObject.js";

export class GameObjectManager {
    constructor() {

        this.colorObject = new ColorObject(); 
        this.background = new GameBackground(this.colorObject.backgroundColor); 
        this.gameObjects = [];
    }

    loadObjects(objs) {
        this.gameObjects = [...this.gameObjects, ...objs];
    }

    loadObject(obj) {
        this.gameObjects.push(obj);
    }

    clearObjects = () => {
        this.gameObjects = [];
    }

    resetLevel = () => {
        this.clearObjects(); 

    }

    removeObject(obj) {
        this.gameObjects.splice(this.gameObjects.indexOf(obj), 1);
    }

    removeObjectById(id) {
        this.gameObjects = this.gameObjects.filter(obj => obj.id !== id);
    }

    getProtagonist() {
        return this.gameObjects.find(obj => obj.id === 'Protagonist');
    }

    getAllObjectsExceptProtagonist = () => {
        return this.gameObjects.filter(obj => obj.id != "Protagonist"); 
    }

    getBoundriesArr() {
        // console.log("getBoudnriesArr()")
        // console.log(this.gameObjects.filter(obj => obj.type === "wallFloor"));
        // console.log(this.gameObjects);


        return this.gameObjects.filter(obj => obj.type === "wallFloor"); 
    }

    update(dt) {
        this.background.update(); 
        this.gameObjects.forEach(gameObject => gameObject.update(dt));
    }

    draw() {
        // this.background.draw(); 
        // this.gameObjects.forEach(gameObject => gameObject.draw());
    }
}