let back = document.querySelector('.back');

back.addEventListener('click', function(){
    window.location = "home.html"; 
})

function playSound(){
    var sample = document.getElementById("audio");
    sample.play();
}

window.addEventListener('load', playSound());