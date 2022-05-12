var myBtn = document.querySelector('.header-btn');
var myImg =  document.querySelectorAll('.img-picture');
var myBar = document.querySelector('.header-bar');
var myMenu = document.querySelector('.menu');
var myExit = document.querySelector('.exit');
myBtn.onclick = function() {
    for (var i = 0; i < myImg.length; i++) {
        myImg[i].classList.toggle('img-padd');
    }
}

myBar.onclick = function() {
    myMenu.classList.remove('close')
}

myExit.onclick = function() {
    myMenu.classList.add('close')
}