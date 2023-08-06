var sound1 = new Audio();
sound1.src = "../audio/Abuelo Jingle.mp3";

sound1.onended = function() {
    window.location = "sound-1.html"; 
   };

var sound2 = new Audio();
sound2.src = "../audio/Very Stupid Idea.mp3";

sound2.onended = function() {
    window.location = "sound-2.html"; 
   };

var sound3 = new Audio();
   sound3.src = "../audio/Why do I need the WiFi.mp3";
   
   sound3.onended = function() {
       window.location = "sound-3.html"; 
      };

var sound4 = new Audio();
      sound4.src = "../audio/BINGO!.mp3";
      
      sound4.onended = function() {
          window.location = "sound-4.html"; 
         };

var sound5 = new Audio();
         sound5.src = "../audio/Ok, you the boss.mp3";
         
         sound5.onended = function() {
             window.location = "sound-5.html"; 
            };

var sound6 = new Audio();
        sound6.src = "../audio/Bird Whistle.mp3";
            
        sound6.onended = function() {
            window.location = "sound-6.html"; 
        };

var sound7 = new Audio();
        sound7.src = "../audio/Abuelo Song.mp3";
            
        sound7.onended = function() {
            window.location = "sound-7.html"; 
        };

var sound8 = new Audio();
        sound8.src = "../audio/I REPEAT!.mp3";
            
        sound8.onended = function() {
            window.location = "sound-8.html"; 
        };

var sound9 = new Audio();
        sound9.src = "../audio/BO Menendez.mp3";
            
        sound9.onended = function() {
            window.location = "sound-9.html"; 
        };

    var sound10 = new Audio();
        sound10.src = "../audio/Hacking Noise.mp3";
            
        sound10.onended = function() {
            window.location = "sound-10.html"; 
        };





let back = document.querySelector('.back');

back.addEventListener('click', function(){
    window.location = 'index.html';
}); 

let forward = document.querySelector('.forward');

forward.addEventListener('click', function(){
    window.location = 'next.html';
}); 

