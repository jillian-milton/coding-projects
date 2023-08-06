var sound11 = new Audio();
sound11.src = "../audio/Ya Ya Ya.mp3" 

sound11.onended = function() {
    window.location = "sound-11.html"; 
   };

var sound12 = new Audio();
sound12.src = "../audio/Abuelo 13.mp3";

sound12.onended = function() {
    window.location = "sound-12.html"; 
   };

var sound13 = new Audio();
   sound13.src = "../audio/Calmate.mp3" ;
   
   sound13.onended = function() {
       window.location = "sound-13.html"; 
      };

let back = document.querySelector('.back');

back.addEventListener('click', function(){
    window.location = 'home.html';
}); 

let forward = document.querySelector('.forward');

forward.addEventListener('click', function(){
    window.location = 'closer.html';
}); 

