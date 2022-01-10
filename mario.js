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
    this.velY = 0;
    let self = this;
    //States-> standing, walking or jumping- every state has frame and it can be either towards right or left
    this.animFrame = {
      walkRight: {
        frames: [
          new Sprite(spritesheet, 667, 5, 16, 16),
          new Sprite(spritesheet, 683, 5, 16, 16),
          new Sprite(spritesheet, 699, 5, 16, 16),
        ],
        counter: 0,
      },
      walkLeft: {
        frames: [
          new Sprite(spritesheet, 844, 21, 16, 16),
          new Sprite(spritesheet, 828, 21, 16, 16),
          new Sprite(spritesheet, 812, 21, 16, 16),
        ],
        counter: 0,
      },
      standRight: new Sprite(spritesheet, 651, 5, 16, 16),
      standLeft: new Sprite(spritesheet, 860, 21, 16, 16),
      jumpRight: new Sprite(spritesheet, 731, 5, 16, 16),
      jumpLeft: new Sprite(spritesheet, 778, 22, 16, 16),
    };
    //function of animation for every state
    this.states = {
      walkingAnim(gameObj) {
        if (self.currentDirection == "left") {
          if (gameObj.animFrame % 6 == 0) {
            self.sprite =
              self.animFrame.walkLeft.frames[self.animFrame.walkLeft.counter];
            self.animFrame.walkLeft.counter++;
            if (self.animFrame.walkLeft.counter > 2) {
              self.animFrame.walkLeft.counter = 0;
            }
          }
        } else {
          if (gameObj.animFrame % 6 == 0) {
            self.sprite =
              self.animFrame.walkRight.frames[self.animFrame.walkRight.counter];
            self.animFrame.walkRight.counter++;
            if (self.animFrame.walkRight.counter > 2) {
              self.animFrame.walkRight.counter = 0;
            }
          }
        }
      },
      standingAnim() {
        if (self.currentDirection == "left") {
          self.sprite = self.animFrame.standLeft;
        } else {
          self.sprite = self.animFrame.standRight;
        }
      },
      jumpingAnim() {
        if (self.currentDirection == "left") {
          self.sprite = self.animFrame.jumpLeft;
        } else {
          self.sprite = self.animFrame.jumpRight;
        }
      },
    };
    this.currentDirection = "right"; //current direction of mario, by default right
    this.currentState = this.states.standingAnim;
  }
}
