
export class GameObjectManager {
    constructor() {
        this.gameObjects = [];
    }

    update(dt) {
        this.gameObjects.forEach(gameObject => gameObject.update(dt));
    }

    draw() {
        this.gameObjects.forEach(gameObject => gameObject.draw());
    }

    clearObjects = () => {
        this.gameObjects = [];
    }

    loadObjects(objs) {
        this.gameObjects = [...this.gameObjects, ...objs];
    }

    loadObject(obj) {
        this.gameObjects.push(obj);
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
}