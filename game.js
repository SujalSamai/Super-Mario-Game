// console.log("Hello Moto");

//we will print only those methods which are present inside render
const render = {
  //this will render at the beginning to draw the sky
  init(gameObj) {
    //note: by default the tool color is black so we can change that by fill Style
    gameObj.tool.fillStyle = "#3498db";
    gameObj.tool.fillRect(0, 0, window.innerWidth, window.innerHeight); //fill rectangle is a funtion of canvas which takes starting x,y, width and height
    gameObj.tool.drawImage(castleImage, 40, 40, 200, 150);
  },
};

//everthing will be done by the object of class Game
class Game {
  //init will create the basic setup of the game
  init() {
    const canvas = document.querySelector(".board"); //taking the canvas element from html file
    //canvas has default size of 300x150px
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    const tool = canvas.getContext("2d"); //a tool to draw 2d objects

    //central object which represents the current state of the game
    let gameObj = {
      tool,
      canvas,
    };

    render.init(gameObj); //renders the gameObj
  }

  //game execution
  run() {}

  //resets the game everytime the page reloads
  reset() {
    location.reload();
  }
}

//after preloading, we will start the game
preload().then(function () {
  console.log(castleImage);
  console.log(cloudsImage);
  console.log(mountainImage);
  console.log(spriteSheetImage);
  console.log(tileSetImage);
  console.log("now game will start");
  const game = new Game();

  game.init();
});

// console.log(a);
