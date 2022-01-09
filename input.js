//for taking inputs
let input = {
  down: {},
  init() {
    //setting the event listeners
    window.addEventListener("keydown", (e) => {
      this.down[e.code] = true; //code is the nameof the key
    }); //e function describes our event. e is an object which describes which key we have pressed
    window.addEventListener("keyup", (e) => {
      delete this.down[e.code]; //deleting when the user has left the key
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
  },
  isDown(key) {
    return this.down[key];
  },
};
