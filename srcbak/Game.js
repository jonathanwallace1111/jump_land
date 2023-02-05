class Game {
    constructor() {
        this.state = new StateObject();
        this.controller = new Controller(this.state);
        this.colorObject = new ColorObject();
        this.physicsEngine = new PhysicsEngine(this.state, this.colorObject);
        this.protagonist = new Protagonist(400, 600, 50, 50, "down", this.colorObject.returnPrimaryColor(), this.colorObject.strokeColor);
        this.currentLevel = new level_1(this.protagonist, this.physicsEngine, this.colorObject.returnSecondaryColor(), this.colorObject.strokeColor);
        this.gameBackground = new GameBackground(this.colorObject.returnTertiaryColor(), this.colorObject.strokeColor);

        this.deltaTimeAccumulator = 0;
    }

    init = () => {
        this.currentLevel.init();
    }

    updateState = () => {
        this.controller.state = this.state;
        this.physicsEngine.state = this.state;
    }

    update = () => {
        this.physicsEngine.applyGravityToObject(this.protagonist);
        this.physicsEngine.applyFrictionToObject(this.protagonist);

        let boundries = this.currentLevel.outerBoundriesArr; 
        let boxes = this.currentLevel.boxesArr; 

        this.physicsEngine.metaCollisionDetectionForProtagonist(this.protagonist, boundries, boxes);

        this.controller.update(this.physicsEngine.gravityDirection, this.physicsEngine.gravOpposite, this.protagonist);

        this.protagonist.x += this.protagonist.xv;
        this.protagonist.y += this.protagonist.yv;

        this.gameBackground.update();
        this.currentLevel.update();
        this.protagonist.update();
        this.updateState();
    }

    draw = () => {
        this.gameBackground.draw();
        this.currentLevel.draw();
        this.protagonist.draw();
    }

    gameLoop = () => {
        this.deltaTimeAccumulator += deltaTime

        this.update();
        this.draw();
    }
}

