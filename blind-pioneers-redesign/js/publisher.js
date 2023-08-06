let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

let none = document.querySelector('.none');

window.addEventListener('load', function(){
    if(this.window.innerWidth > 600){
        none.classList.remove('none');
    } else {
        none.classList.add('none');
    }
})

window.addEventListener('resize', function(){
    if(this.window.innerWidth > 600){
        none.classList.remove('none');
    } else {
        none.classList.add('none');
    }
})

