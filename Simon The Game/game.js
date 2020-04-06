/*Initial Data*/
var buttonColors = ["red","blue","green","yellow"];
var gamePattern = [];
var userGamePattern = [];
var level = 0;
var gameStarted = false;



//waiting for keyperss to start he game
$(document).keypress(function(){

  if(!gameStarted){
    console.log("hello");
    gameStarted = true;
    nextSequence();
  }

});

//Taking user clicked pattern
$("div.btn").click(function(){
  var userChosenColor = ($(this).attr("id"));

  userGamePattern.push(userChosenColor);

  console.log(userGamePattern);
  soundPath = `sounds/${userChosenColor}.mp3`;
  playSound(soundPath);
  animatePress(userChosenColor);


  //Checking User Clicked Pattern
  checkAnswer(userGamePattern.length-1);

});







function checkAnswer(currentLevel){

    //Comparing user's answer with gamePattern element
    if (userGamePattern[currentLevel]===gamePattern[currentLevel]){
      console.log("succes");

    //If the user had exact pattern
    if(userGamePattern.length===gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }

    }else{console.log("loss");}

}


function playSound(name){
  var audio = new Audio(name);
  audio.play();
}

//Adding and removing pressed css class to element
function animatePress(currentColor){
  $("#"+currentColor).addClass("pressed");

  setTimeout(function(){
      $("#"+currentColor).removeClass("pressed");
  },100);

}

//Generating new Sequence
function nextSequence(){
  userGamePattern = [];

  //Changing h1 title
  $("h1").text("Level "+level);

  randomNum =  Math.floor(Math.random()*4) ;

  /*Choosing random color from array */
  randomChosenColor = buttonColors[randomNum];

  /*Adding to gamePattern*/
  gamePattern.push(randomChosenColor);

  $("#"+randomChosenColor).fadeOut(100).fadeIn(100);
  soundPath = `sounds/${randomChosenColor}.mp3`;
  playSound(soundPath);

  level++;

}
