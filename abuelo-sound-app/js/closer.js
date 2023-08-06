var sample = document.getElementById("audio");

function playSound(){
    sample.play();
}


let home = document.querySelector('.home');

home.addEventListener('click', playSound());

sample.onended = function() {
   window.location = "index.html"; 
  };