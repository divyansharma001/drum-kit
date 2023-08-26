
function makeSound(key){
  switch (key) {
    case "w":
      var crash = new Audio("crash.mp3");
      crash.play();
      break;

    case "a":
      var tom1 = new Audio('tom-1.mp3');
      tom1.play();
      break;

    case "s":
      var tom2 = new Audio('tom-2.mp3');
      tom2.play();
      break;

    case "d":
      var tom3 = new Audio('tom-3.mp3');
      tom3.play();
      break;

    case "j":
      var tom4 = new Audio('tom-4.mp3');
      tom4.play();
      break;

    case "k":
      var kick = new Audio('kick-bass.mp3');
      kick.play();
      break;

    case "l":
      var snare = new Audio('snare.mp3');
      snare.play();
      break;

  
    default:
      break;
  }
}


//input from keyboard

document.addEventListener("keydown", function(event){
  makeSound(event.key);
  buttonAnimation(event.key)
  });

// input from click

var numberOfButtons = document.querySelectorAll(".drum").length;
for(var i=0;i<numberOfButtons;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    var buttonOfClick = this.innerHTML;
    makeSound(buttonOfClick);
    buttonAnimation(buttonOfClick);
  });
}

  
function buttonAnimation(currentKey){
var selectedButton=document.querySelector("."+currentKey);
selectedButton.classList.add("pressed");

setTimeout(function (){
selectedButton.classList.remove("pressed");
}, 100);

}