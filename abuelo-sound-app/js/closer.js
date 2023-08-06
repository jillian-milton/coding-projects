function playSound(){
    var sample = document.getElementById("audio");
    sample.play();
}

window.addEventListener('load', playSound());


let home = document.querySelector('.home');

home.addEventListener('click', function(){
    window.location = 'index.html';
}); 