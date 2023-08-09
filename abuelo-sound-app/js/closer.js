var closer = new Audio();
closer.src = "../audio/closer.mp3"; 

closer.onended = function() {
    window.location = "index.html"; 
   };
