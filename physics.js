let physics = {
  update(gameObj) {
    this.checkCollision(gameObj.entities.mario); //check collision;
    this.gravity(gameObj.entities.mario); //updates mario
  },
  gravity(entity) {
    entity.velY += 1.1; //acceleration
    entity.posY += entity.velY; //position change
  },
  checkCollision(entity) {
    if (entity.posY + entity.height >= 310 && entity.velY > 0) {
      entity.posY = 292;
      entity.velY = 0;
    }
  },
};
