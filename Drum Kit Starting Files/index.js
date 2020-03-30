


//Passing press/click button to make sound
function makeSound(key){
  switch(key){
    case "w":
      var tom1 =  new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 =  new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 =  new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 =  new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare =  new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var kick =  new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      var crash =  new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default: console.log("Something goes wrong");
  }
}

function onClickMakeSound(){
  //Taking inner html of the button
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

function buttonAnimation(currentKey){
  activeButton = document.querySelector("."+currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function(){activeButton.classList.remove("pressed");},90);
}


// Adding events to listener
drumButtons = document.querySelectorAll(".drum");
for (var i=0; i<drumButtons.length; i++){
    drumButtons[i].addEventListener('click',onClickMakeSound);

}

// On Button Pressed Make sound
document.addEventListener('keydown',function(event)
  {
    makeSound(event.key);
    buttonAnimation(event.key);
  });
