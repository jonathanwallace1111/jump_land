
export class RenderManager {
  constructor(ctx) {
    this.ctx = ctx; 
  }

  draw = () => {
    let gom = window.jlSystem.gameObjectManager; 
    let camera = window.jlSystem.camera; 

    gom.gameObjects.forEach(obj => {
      obj.renderPos.x = obj.pos.x - camera.pos.x; 
      obj.renderPos.y = obj.pos.y - camera.pos.y;  
  


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


    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height); 
    gom.background.draw(); 
    gom.gameObjects.forEach(obj => obj.draw()); 

  }
}







