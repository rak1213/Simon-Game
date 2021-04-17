$("h1").textContent="sdcfdjn";
var gamePattern=[];
var buttonColors=["red", "blue", "green", "yellow"];
var userClickedPattern=[];
var level=0;
var started=false;
$(document).keypress(function() {
    if (!started) {

        
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
      
});
$(document).click(function(){
  if (!started) {

        
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
  
});
window.addEventListener("touchstart", update);
      function update(){
        if (!started) {

        
          $("#level-title").text("Level " + level);
          nextSequence();
          started = true;
        }
      }

function nextSequence(){
    userClickedPattern = [];

    level++;
    $("#level-title").text("Level " + level);
    var randomNumber= Math.floor(Math.random()*4);
    var randomChosenColour=buttonColors[randomNumber];
    gamePattern.push(randomChosenColour);
 
  $("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
 playSound(randomChosenColour)
}


$(".btn").click(function(){
    var userChosenColor=this.id;
     userClickedPattern.push(userChosenColor);
     console.log(userClickedPattern);
     playSound(userChosenColor);
     animatePress(userChosenColor);
     checkAnswer(userClickedPattern.length-1);
  
});

function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length===userClickedPattern.length){
          setTimeout(function () {
            nextSequence();
          }, 1000);}
    }
    else {

        console.log("wrong");
  
       
        playSound("wrong");
  
      
        $("body").addClass("game-over");
        setTimeout(function () {
          $("body").removeClass("game-over");
        }, 200);
  
        
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();
      }
  

}

function startOver(){
 level=0;
 started=false;
 gamePattern=[];

}


function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed")
    setTimeout(function (){
        $("#"+currentColor).removeClass("pressed")
    },100)
}
