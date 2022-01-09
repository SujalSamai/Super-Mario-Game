//for taking inputs
let input = {
  down: {}, //if key is pressed for once
  pressed: {}, //is key is holded for eg. for space bar, if we hold space, it won't work and it will jump agin only after mario has landed back
  init() {
    //setting the event listeners
    window.addEventListener("keydown", (e) => {
      this.down[e.code] = true; //code is the nameof the key
    }); //e function describes our event. e is an object which describes which key we have pressed
    window.addEventListener("keyup", (e) => {
      delete this.down[e.code]; //deleting when the user has left the key
      delete this.pressed[e.code];
    }); //e function describes our event. e is an object which describes which key we have pressed
  },
  update(gameObj) {
    let mario = gameObj.entities.mario;
    if (this.isDown("ArrowLeft")) {
      //go left
      mario.posX -= mario.velX;
    }
    if (this.isDown("ArrowRight")) {
      //go right
      mario.posX += mario.velX;
    }
    // console.log(mario.velY);  at 1.1 velY, it reaches the ground
    if (this.isDown("Space")) {
      //jump
      if (mario.velY == 1.1) {
        mario.velY -= 14; //as it is negative acceleration or we are going upwards, y will be negative
      }
    }
  },
  isDown(key) {
    return this.down[key];
  },
  isPressed(key) {
    if (this.pressed[key]) {
      //if key is already pressed, then no use of doing anything
      return false;
    } else if (this.down[key]) {
      //if key is pressed just now
      return true;
    }
  },
};
