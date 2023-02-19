// import LevelManifest from '../Levels';

export class LevelManager {
    constructor() {

        this.loadLevel(1);
    }

    loadLevel(levelNumber) {
        let gom = jlSystem.gameObjectManager;

        let level = LevelManifest[levelNumber];

        gom.clearObjects();

        let newLevelObjects = [
            ...level.boxes.map(box => new Box(box.x, box.y, box.width, box.height, box.id, box.fillColor, box.strokeColor)),
            ...level.wallFloors.map(wall => new WallFloor(wall.x, wall.y, wall.width, wall.height, wall.id, wall.fillColor, wall.strokeColor)),
            new Protagonist(level.player.x, level.player.y, level.player.width, level.player.height, level.player.gravityDirection, level.player.fillColor, level.player.strokeColor)
        ];

        gom.loadObjects(newLevelObjects)
    }
} 