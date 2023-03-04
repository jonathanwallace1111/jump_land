
export class RenderManager {
  constructor() {
    
  }

  draw = () => {
    let gom = window.jlSystem.gameObjectManager; 
    let camera = window.jlSystem.camera; 

    gom.gameObjects.forEach(obj => {
      obj.renderX = obj.x - camera.x; 
      obj.renderY = obj.y - camera.y;  
  


      // let distFromObjToCamX = obj.x - camera.x; 
      // let distFromObjToCamY = obj.y - camera.y; 
      // let distFromObjToCam = Math.sqrt(Math.pow(distFromObjToCamX, 2) + Math.pow(distFromObjToCamY, 2)); 

      // let scaledDistance = distFromObjToCam * camera.scale; 

      // let angle = Math.atan2(distFromObjToCamY, distFromObjToCamX); 

      // obj.renderX = camera.x + Math.cos(angle) * scaledDistance; 
      // obj.renderY = camera.y + Math.sin(angle) * scaledDistance; 
    
      // // obj.renderX = Math.cos(angle) * scaledDistance - camera.x; 
      // // obj.renderY = Math.sin(angle) * scaledDistance - camera.y; 


      obj.renderW = obj.w  * camera.scale; 
      obj.renderH = obj.h * camera.scale; 
    })


    // gom.draw(); 

    gom.background.draw(); 
    gom.gameObjects.forEach(obj => obj.draw()); 

  }
}







