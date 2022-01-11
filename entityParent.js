//for getting the coordinates of all the sprites required
class Sprite {
  constructor(img, srcX, srcY, srcW, srcH) {
    this.img = img;
    this.srcX = srcX;
    this.srcY = srcY;
    this.srcW = srcW;
    this.srcH = srcH;
  }
}

//for placing in the canvas
class Entity {
  constructor(sprite, type, posX, posY, width, height) {
    this.sprite = sprite;
    this.type = type;
    //game coordinates
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
  }
}
