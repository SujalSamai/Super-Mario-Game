// console.log("Hello Moto");

//we will print only those methods which are present inside render
const render = {
  //this will render at the beginning to draw the sky
  init(gameObj) {
    //note: by default the tool color is black so we can change that by fill Style
    gameObj.tool.fillStyle = "#62acff";
    gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight); //fill rectangle is a funtion of canvas which takes starting x,y, width and height
    // gameObj.tool.drawImage(castleImage, 40, 40, 200, 150);
    let mario = gameObj.entities.mario;
    gameObj.levelBuilder.stock(gameObj);
    gameObj.tool.drawImage(
      mario.sprite.img,
      mario.sprite.srcX,
      mario.sprite.srcY,
      mario.sprite.srcW,
      mario.sprite.srcH,
      mario.posX,
      mario.posY,
      mario.width,
      mario.height
    );
  },
  update(gameObj) {
    //note: by default the tool color is black so we can change that by fill Style
    this.updateFrame(gameObj); //updates screen frame
    //everything in canvas is paint, so we clear the back step and redraw at front whenever we are moving
    //for sky
    gameObj.tool.clearRect(0, 0, window.innerWidth, window.innerHeight); //clear at each step
    gameObj.tool.fillStyle = "#62acff";
    gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight);
    //for ground
    gameObj.levelBuilder.render(gameObj);
    let mario = gameObj.entities.mario;
    let camera = gameObj.camera;
    this.drawEntity(camera, mario, gameObj);
    gameObj.entities.goombas.forEach((goomba) => {
      this.drawEntity(camera, goomba, gameObj);
    });
    gameObj.entities.koopas.forEach((koopa) => {
      this.drawEntity(camera, koopa, gameObj);
    });
  },
  drawEntity(camera, entity, gameObj) {
    let entityEnd = entity.posX + entity.width; //if any entity is going outside of the rendered scene then make sure only the part that should be available on screen is rendered
    let frameWidth = camera.start + camera.width;
    if (entity.posX >= camera.start && entityEnd <= frameWidth) {
      gameObj.tool.drawImage(
        entity.sprite.img,
        entity.sprite.srcX,
        entity.sprite.srcY,
        entity.sprite.srcW,
        entity.sprite.srcH,
        entity.posX - camera.start,
        entity.posY,
        entity.width,
        entity.height
      );
    }
  },
  updateFrame(gameObj) {
    //distance
    let center = gameObj.entities.mario.posX + gameObj.entities.mario.width / 2;
    let dist = window.innerWidth / 8.5;
    // console.log(dist);
    // console.log(center);
    // console.log(gameObj.camera.start);
    if (center < gameObj.camera.start + 2 * dist) {
      //always true conditionx
      gameObj.camera.start = Math.max(center - dist, 0); //math.max ensures the frame doesn't gets negative
    }
  },
};

//everthing will be done by the object of class Game
class Game {
  //init will create the basic setup of the game
  init() {
    //Preloading the game first
    preload().then(() => {
      const canvas = document.querySelector(".board"); //taking the canvas element from html file
      //canvas has default size of 300x150px
      canvas.height = window.innerHeight;
      canvas.width = window.innerWidth;

      const tool = canvas.getContext("2d"); //a tool to draw 2d objects

      let entities = {};
      //central object which represents the current state of the game
      let camera = {
        start: 0,
        width: window.innerWidth,
      };
      let gameObj = {
        tool,
        canvas,
        entities,
        animFrame: 0, //for delaying the frame rate of game as it is moving too fast
        levelBuilder: new LevelBuilder(levelOne),
        camera,
        reset: this.reset,
        userControl: true, //user can not control the game once he is dead
      };
      tool.scale(3.5, 3.5); //zooming the canvas 2times
      //mario object
      let mario = new Mario(spriteSheetImage, 175, 0, 18, 18);
      gameObj.entities.mario = mario; //adding mario to the game
      gameObj.entities.goombas = [];
      gameObj.entities.koopas = [];
      levelOne.goombas.forEach((gCord) => {
        gameObj.entities.goombas.push(
          new Goomba(spriteSheetImage, gCord[0], gCord[1], gCord[2], gCord[3])
        );
      });
      levelOne.koopas.forEach((kCord) => {
        gameObj.entities.koopas.push(
          new Koopa(spriteSheetImage, kCord[0], kCord[1], kCord[2], kCord[3])
        );
      });
      gameObj.entities.scenery = [];
      render.init(gameObj); //renders the gameObj
      input.init(); //registering the event listener
      this.update(gameObj); //calling update
    });
  }

  //game execution
  update(gameObj) {
    function gameloop() {
      // console.log("Hello", Math.random());
      input.update(gameObj);
      animation.update(gameObj); //executes animation updation
      movement.update(gameObj);
      physics.update(gameObj); //executes physics updation
      render.update(gameObj);
      gameObj.animFrame++;
      requestAnimationFrame(gameloop); //syncing with every frame- infinite loop
    }
    gameloop();
  }

  //resets the game everytime the page reloads
  reset() {
    location.reload();
  }
}

const game = new Game();
game.init();
//after preloading, we will start the game
// preload().then(function () {
//   console.log(castleImage);
//   console.log(cloudsImage);
//   console.log(mountainImage);
//   console.log(spriteSheetImage);
//   console.log(tileSetImage);
//   console.log("now game will start");
// });
