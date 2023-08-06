let hamburger = document.querySelector('.hamburger');
let open = document.querySelector('.open');
let closed = document.querySelector('.closed');

hamburger.addEventListener('click', function(){
    open.classList.toggle('closed');
})

var row1 = document.querySelector('#one');
var row2 = document.querySelector('#two');
var article1 = document.querySelector('.tool');
var article2 = document.querySelector('.over');
var article3 = document.querySelector('.blindness');
var article4 = document.querySelector('.maria');
let none = document.querySelector('.none');

window.addEventListener('load', function(){
    if(this.window.innerWidth > 600){
        row1.classList.remove("row1");
        row2.classList.remove("row2");
        article1.classList.remove('col');
        article2.classList.remove('col');
        article3.classList.remove('col');
        article4.classList.remove('col');
        none.classList.remove('none');
    } else {
        row1.classList.add("row1");
        row2.classList.add("row2");
        article1.classList.add('col');
        article2.classList.add('col');
        article3.classList.add('col');
        article4.classList.add('col');
        none.classList.add('none');
    }
})

window.addEventListener('resize', function(){
    if(this.window.innerWidth > 600){
        row1.classList.remove("row1");
        row2.classList.remove("row2");
        article1.classList.remove('col');
        article2.classList.remove('col');
        article3.classList.remove('col');
        article4.classList.remove('col');
        none.classList.remove('none');
    } else {
        row1.classList.add("row1");
        row2.classList.add("row2");
        article1.classList.add('col');
        article2.classList.add('col');
        article3.classList.add('col');
        article4.classList.add('col');
        none.classList.add('none');
    }
})

