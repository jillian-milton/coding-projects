let back = document.querySelector('.back');

back.addEventListener('click', function(){
    window.location = "next.html"; 
})

function playSound(){
    var sample = document.getElementById("audio");
    sample.play();
}
