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

//Note: to get the coordinates of the the particular element, use pixi.pomle.com
//Properties of Mario
class Mario extends Entity {
  constructor(spritesheet, posX, posY, width, height) {
    let img = new Sprite(spritesheet, 650, 3, 17, 19);
    super(img, "mario", posX, posY, width, height);
    this.velX = 1.8; //at once, it will go this much position right or left
  }
}
