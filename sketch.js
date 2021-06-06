var canva;
var quiz;
var contestantCount;
var contestant;
var gameState = 0;
var question;
var allcontestants;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if (contestantCount===2){
    quiz.update(1);
  }
  if (gameState===1){
    clear();
    quiz.play();
  }
}
