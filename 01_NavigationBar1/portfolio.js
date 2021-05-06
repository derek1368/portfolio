/* HEADER */
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var header = document.getElementById('header');

    if(document.documentElement.scrollTop > 70) {
        if(!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function(){
                header.style.display = 'block';
            }, 40);
        }
    } else {
        if(header.classList.contains('navbar-fixed')) {
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);

/* Welcome Area */

var imageSlidIndex = 1;

showImageSlide(imageSlidIndex);

function imageSlideTimer() {
    plusImageSlide(1);
}

var imageTimer = setInterval(imageSlideTimer, 5000);

function plusImageSlide(n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 5000);

    showImageSlide(imageSlidIndex += n);
}

function currentImageSlide(n) {
    clearInterval(imageTimer);
    imageTimer = setInterval(imageSlideTimer, 5000);

    showImageSlide(imageSlidIndex = n);
}

function showImageSlide(n) {
    var i;
    var slides = document.getElementsByClassName('image-slide');
    var dots = document.getElementsByClassName('dot');

    if(n > slides.length) { imageSlidIndex = 1}
    if(n < 1) {imageSlidIndex =slides.length}
    for( i=0; i < slides.length ; i++) { 
        slides[i].style.display = 'none';
    }
    for( i=0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
    }
    slides[imageSlidIndex -1].style.display = 'block';
    dots[imageSlidIndex -1].className += ' active';
}

document.getElementById('imagePrev').addEventListener('click', plusImageSlide.bind(null, -1));
document.getElementById('imageNext').addEventListener('click', plusImageSlide.bind(null, 1));

document.getElementById('firstDot').addEventListener('click', currentImageSlide.bind(null, 1));
document.getElementById('secondDot').addEventListener('click', currentImageSlide.bind(null, 2));
document.getElementById('thirdDot').addEventListener('click', currentImageSlide.bind(null, 3));
document.getElementById('forthDot').addEventListener('click', currentImageSlide.bind(null, 4));
