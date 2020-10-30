var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var cars, car1, car2, car3, car4;

function preload() {
  bg123 = loadImage("../images/bg123.jpg")
  track = loadImage("../images/track.jpg");
  b1Img = loadImage("../images/b1.png");
  b2Img = loadImage("../images/b2.png");
  b3Img = loadImage("../images/b3.png");
  b4Img = loadImage("../images/b4.png");
  groundImg = loadImage("../images/ground.png");
}
function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState===2){
    game.end();
  }
}
