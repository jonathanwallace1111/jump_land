
//THIS IS ALL JUST CODE THAT WAS IN STATE BEFORE I INCORPORATED REACT 

// this.objectIsSelected = false; 
// this.selectedObject = null; 
// this.inLevelBuilderMode = false;
// this.levelBuilderDock = undefined;

// init = () => {
//     let dock = document.createElement("div")
//     dock.setAttribute("id", "builderDock")
//     let main = document.getElementById("main");
//     main.appendChild(dock);
//     this.levelBuilderDock = dock;
//     // this.turnOffLevelBuilderMode();
//     this.turnOnLevelBuilderMode();
// }

// turnOnLevelBuilderMode = () => {
//     let gameObjArr = window.jlSystem.gameObjectManager.gameObjects;

//     while (this.levelBuilderDock.firstChild) {
//         this.levelBuilderDock.removeChild(this.levelBuilderDock.lastChild);
//     }

//     this.inLevelBuilderMode = true;
//     let btn = document.createElement('div');
//     btn.innerHTML = "TURN OFF LVL BUILDER"
//     btn.addEventListener("click", this.turnOffLevelBuilderMode);
//     this.levelBuilderDock.appendChild(btn);

//     let objectSelectContainer = document.createElement('div');
//     let select = document.createElement('select');
//     objectSelectContainer.appendChild(select);

//     //BOX OPTIONS
//     let smallBox = document.createElement('option');
//     smallBox.value = 'smallBox';
//     smallBox.text = 'small box';
//     select.appendChild(smallBox);
//     let mediumBox = document.createElement('option');
//     mediumBox.value = 'mediumBox';
//     mediumBox.text = 'medium box';
//     select.appendChild(mediumBox);
//     let largeBox = document.createElement('option');
//     largeBox.value = 'largeBox';
//     largeBox.text = 'large box';
//     select.appendChild(largeBox);

//     //PLATFORM OPTIONS
//     let smallPlatform = document.createElement('option');
//     smallPlatform.value = 'smallPlatform';
//     smallPlatform.text = 'small platform';
//     select.appendChild(smallPlatform);
//     let mediumPlatform = document.createElement('option');
//     mediumPlatform.value = 'mediumPlatform';
//     mediumPlatform.text = 'medium platform';
//     select.appendChild(mediumPlatform);
//     let largePlatform = document.createElement('option');
//     largePlatform.value = 'largePlatform';
//     largePlatform.text = 'large platform';
//     select.appendChild(largePlatform);

//     //DEATHSTAKE OPTION
//     let deathStake = document.createElement('option');
//     deathStake.value = 'deathStake';
//     deathStake.text = 'death stake';
//     select.appendChild(deathStake);

//     //button to make the option selected
//     let makeObjBtn = document.createElement("div");
//     makeObjBtn.innerHTML = "make this object";
//     objectSelectContainer.appendChild(makeObjBtn)

//     makeObjBtn.addEventListener("click", function () {
//         switch (select.value) {
//             case "smallBox":
//                 gameObjArr.push(new Box(400, 400, 50, 50, gameObjArr.length + 1));
//                 break;
//             case "mediumBox":
//                 gameObjArr.push(new Box(400, 400, 75, 75, gameObjArr.length + 1));
//                 break;
//             case "largeBox":
//                 gameObjArr.push(new Box(400, 400, 125, 125, gameObjArr.length + 1));
//                 break;
//             case "smallPlatform":
//                 gameObjArr.push(new Platform(400, 400, 20, 100, gameObjArr.length + 1));
//                 break;
//             case "mediumPlatform":
//                 gameObjArr.push(new Platform(400, 400, 20, 200, gameObjArr.length + 1));
//                 break;
//             case "largePlatform":
//                 gameObjArr.push(new Platform(400, 400, 20, 300, gameObjArr.length + 1));
//                 break;
//             case "deathStake":
//                 gameObjArr.push(new DeathStake(400, 400, 10, 40, gameObjArr.length + 1))
//             default:
//                 break;
//         }
//     });

//     this.levelBuilderDock.appendChild(objectSelectContainer);
// }

// turnOffLevelBuilderMode = () => {
//     while (this.levelBuilderDock.firstChild) {
//         this.levelBuilderDock.removeChild(this.levelBuilderDock.lastChild);
//     }

//     this.inLevelBuilderMode = false;
//     let btn = document.createElement('div');
//     btn.innerHTML = "TURN ON LVL BUILDER"
//     btn.addEventListener("click", this.turnOnLevelBuilderMode);
//     this.levelBuilderDock.appendChild(btn);
// }