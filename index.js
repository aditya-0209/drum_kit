// var button1 = document.querySelectorAll("button")[0];
// var button2 = document.querySelectorAll("button")[1];
// var button3 = document.querySelectorAll("button")[2];
// var button4 = document.querySelectorAll("button")[3];
// var button5 = document.querySelectorAll("button")[4];
// var button6 = document.querySelectorAll("button")[5];
// var button7 = document.querySelectorAll("button")[6];


/////////////////////Detecting Button Press///////////////////////

var numberofButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofButton; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    
  });
}



///////////////////////////////Detecting Keypress of Keyboard////////////////////////

document.addEventListener("keydown", function(){
    makeSound(event.key)
    buttonAnimation(event.key);
})

function makeSound(key){
    switch (key) {
        case "w":
          var tom1 = new Audio("sounds/tom-1.mp3");
          tom1.play();
  
          break;
        case "a":
          var tom2 = new Audio("sounds/tom-2.mp3");
          tom2.play();
  
          break;
  
        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
  
          break;
  
        case "d":
          var tom4 = new Audio("sounds/tom-4.mp3");
          tom4.play();
  
          break;
  
        case "j":
          var snare = new Audio("sounds/snare.mp3");
          snare.play();
  
          break;
  
        case "k":
          var crash = new Audio("sounds/crash.mp3");
          crash.play();
  
          break;
  
        case "l":
          var kick = new Audio("sounds/kick-bass.mp3");
          kick.play();
  
          break;
  
        default:
          console.log(key);
          break;
      }
}


function buttonAnimation(currentKey){

    var activeButton = document.querySelector("."+ currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
       activeButton.classList.remove("pressed");
    }, 100);
}
// button1.addEventListener("click", function(){
//     alert("I got clicked");
// });

// button2.addEventListener("click", function(){
//     alert("I got clicked");
// });

// button3.addEventListener("click", function(){
//     alert("I got clicked");
// });

// button4.addEventListener("click", function(){
//     alert("I got clicked");
// });

// button5.addEventListener("click", function(){
//     alert("I got clicked");
// });

// button6.addEventListener("click", function(){
//     alert("I got clicked");
// });

// button7.addEventListener("click", function(){
//     alert("I got clicked");
// });
