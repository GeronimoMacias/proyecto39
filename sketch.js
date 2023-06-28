var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allContestants;
var answer;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("yellow");
  if(contestantCount === 2){
    // Actualiza quiz
    // Llama al método update que está dentro de la clase quiz
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    // Actualiza play
    // Llama al método play que está dentro de la clase quiz
    quiz.play();
  }
}
