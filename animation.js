//calls the functions of characters based on its state

let animation = {
  update(gameObj) {
    let mario = gameObj.entities.mario;
    mario.currentState(gameObj);
  },
};
