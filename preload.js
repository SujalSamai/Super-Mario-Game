// let a = "sujal"; checking
//JS creates an empty image through new Image()
const castleImage = new Image();
const cloudsImage = new Image();
const mountainImage = new Image();
const spriteSheetImage = new Image();
const tileSetImage = new Image();

//providing path through a function
function preload() {
  castleImage.src = "./assets/sprites/castle.png";
  cloudsImage.src = "./assets/sprites/clouds.png";
  mountainImage.src = "./assets/sprites/mountain.png";
  spriteSheetImage.src = "./assets/sprites/spritesheet.png";
  tileSetImage.src = "./assets/sprites/tileset_gutter.png";

  //Promise makes sure that all the things happen only after we completely load the asset
  //every promise depicts the time to wait for loading of an image
  return new Promise(function (resolve, reject) {
    let p1 = new Promise(function (resolve, reject) {
      //whenever the file loads, execute this function
      castleImage.addEventListener("load", function () {
        console.log("Image loaded");
        resolve();
      });
    });
    let p2 = new Promise(function (resolve, reject) {
      //whenever the file loads, execute this function
      cloudsImage.addEventListener("load", function () {
        console.log("Image loaded");
        resolve();
      });
    });
    let p3 = new Promise(function (resolve, reject) {
      //whenever the file loads, execute this function
      mountainImage.addEventListener("load", function () {
        console.log("Image loaded");
        resolve();
      });
    });
    let p4 = new Promise(function (resolve, reject) {
      //whenever the file loads, execute this function
      spriteSheetImage.addEventListener("load", function () {
        console.log("Image loaded");
        resolve();
      });
    });
    let p5 = new Promise(function (resolve, reject) {
      //whenever the file loads, execute this function
      tileSetImage.addEventListener("load", function () {
        console.log("Image loaded");
        resolve();
      });
    });
    //this promise will resolve when all the other promises get resolved
    let BigPromise = Promise.all([(p1, p2, p3, p4, p5)]);
    BigPromise.then(function () {
      resolve();
    });
  });
}
preload();
