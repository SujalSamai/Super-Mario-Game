class Goomba extends Entity {
  constructor(spritesheet, posX, posY, width, height) {
    let img = new Sprite(spritesheet, 115, 5, 16, 16);
    super(img, "goomba", posX, posY, width, height);
    this.velX = 1.1; //at once, it will go this much position right or left
    this.velY = 0;
    let self = this;
    //frames
    this.animFrame = {
      walking: {
        frames: [
          new Sprite(spritesheet, 115, 5, 16, 16),
          new Sprite(spritesheet, 131, 5, 16, 16),
        ],
        counter: 0,
      },
      squashed: new Sprite(spritesheet, 147.5, 5, 16, 16),
    };
    //animation
    this.states = {
      walkingAnim: {
        animation(gameObj) {
          if (gameObj.animFrame % 6 == 0) {
            self.sprite =
              self.animFrame.walking.frames[self.animFrame.walking.counter];
            self.animFrame.walking.counter++;
            if (self.animFrame.walking.counter > 1) {
              self.animFrame.walking.counter = 0;
            }
          }
        },
        movement(gameObj) {
          if (self.currentDirection == "left") {
            self.posX -= self.velX;
          } else {
            self.posX += self.velX;
          }
        },
      },
    };
    this.currentDirection = "left"; //current direction of mario, by default right
    this.currentState = this.states.walkingAnim;
  }
}
