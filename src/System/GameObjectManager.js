  
export class GameObjectManager {
    constructor() {
        this.gameObjects = [];
    }

    loadObjects(objs) {
        this.gameObjects = [...this.gameObjects, ...objs];
    }

    draw() {
        this.gameObjects.forEach(gameObject => gameObject.draw());
    }

    loadObject(obj) {
        this.gameObjects.push(obj);
    }

    update(dt) {
        this.gameObjects.forEach(gameObject => gameObject.update(dt));
    }

    clearObjects = () => {
        this.gameObjects = [];
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

    getBoundriesArr() {
        // console.log("getBoudnriesArr()")
        // console.log(this.gameObjects.filter(obj => obj.type === "wallFloor"));
        // console.log(this.gameObjects);


        return this.gameObjects.filter(obj => obj.type === "wallFloor"); 
    }
}