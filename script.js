/*const $ = document.querySelector.bind(document);*/

function swap(x, image) {
    if(x == 1) {
        image.src = 'images/audi-logo.jpg';
        image.width = '280px';
    }
    if(x == 11) {
        image.src = 'images/audi.jpg'
        image.width = '280px'
    }
    if(x == 2) {
        image.src = 'images/bmw-logo.jpg';
        image.width = '280px';
    }
    if(x == 22) {
        image.src = 'images/bmw.jpg'
        image.width = '280px'
    }
    if(x == 3) {
        image.src = 'images/merc-logo.jpg';
        image.width = '280px';
    }
    if(x == 33) {
        image.src = 'images/merc.jpg'
        image.width = '280px'
    }
}

function message() {
    alert('There is so much in this World that you can ACHIEVE!!');
}

function changeColor(){
    let newColor = document.getElementById('container');
    newColor.style.background = '#DD6E0F';
    newColor.style.transition = "0s";
}

function oldColor(){
    let oldColor = document.getElementById('container');
    oldColor.style.background = 'rgb(51,167,181)';
    oldColor.style.transition = "1s";
}