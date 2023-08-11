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

var sound14 = new Audio();
      sound14.src = "../audio/Chila final.m4a" ;
      
      sound14.onended = function() {
          window.location = "sound-14.html"; 
         };

var sound15 = new Audio();
         sound15.src = "../audio/Arriba.m4a" ;
         
         sound15.onended = function() {
             window.location = "sound-15.html"; 
            };

var sound16 = new Audio();
            sound16.src = "../audio/De nada.m4a" ;
            
            sound16.onended = function() {
                window.location = "sound-16.html"; 
               };

var sound17  = new Audio();
               sound17.src = "../audio/Stupid Question.m4a" ;
               
               sound17.onended = function() {
                   window.location = "sound-17.html"; 
                  };

var sound18 = new Audio();
         sound18.src = "../audio/Yes sir.m4a" ;
         
         sound18.onended = function() {
             window.location = "sound-18.html"; 
            };

      
   

let back = document.querySelector('.back');

back.addEventListener('click', function(){
    window.location = 'home.html';
}); 

let forward = document.querySelector('.forward');

forward.addEventListener('click', function(){
    window.location = 'closer.html';
}); 

