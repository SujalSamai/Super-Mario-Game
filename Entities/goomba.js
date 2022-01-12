class Mario extends Entity {
  constructor(spritesheet, posX, posY, width, height) {
    let img = new Sprite(spritesheet, 115, 5, 16, 16);
    super(img, "goomba", posX, posY, width, height);
    this.velX = 3; //at once, it will go this much position right or left
    this.velY = 0;
    let self = this;
  }
}
