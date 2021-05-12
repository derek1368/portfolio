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


/* PORTFOLIO AREA */
filterSelection('all');
function filterSelection(id) {
    var x, i;
    x = document.getElementsByClassName('listItem');
    for(i=0; i<x.length; i++) {
        removeClass(x[i], 'active');
    }
    addClass(document.getElementById(id), 'active');

    x = document.getElementsByClassName('filterItem');
    if (id == 'all') id = '';
    for(i=0; i<x.length; i++) {
        removeClass(x[i], 'show');
        if(x[i].className.indexOf(id) > -1) {
            addClass(x[i], 'show');
        }
    }
}

function addClass(element, name) {
    if(element.className.indexOf(name) == -1) {
        element.className +=  " " + name;
    }
}

function removeClass(element, name) {
    var arr;
    arr = element.className.split(" ");
    while(arr.indexOf(name) > -1) {
        arr.splice(arr.indexOf(name), 1)
    }
    element.className = arr.join(" ");
}

document.getElementById('all').addEventListener('click', filterSelection.bind(null, 'all'));
document.getElementById('uiux').addEventListener('click', filterSelection.bind(null, 'uiux'));
document.getElementById('javascript').addEventListener('click', filterSelection.bind(null, 'javascript'));
document.getElementById('html').addEventListener('click', filterSelection.bind(null, 'html'));
document.getElementById('vue').addEventListener('click', filterSelection.bind(null, 'vue'));


function viewPortfolio(event) {
    var polyNode = event.target;
    if(polyNode.tagName.toLowerCase() == 'i') { 
        polyNode = polyNode.parentNode; 
    }
    var overlayNode =polyNode;
    var imageNode = overlayNode.nextElementSibling;
    
    var itemNode = overlayNode.parentNode;
    var mainNode = itemNode.nextElementSibling;
    var subNode = mainNode.nextElementSibling;
    var textNode = subNode.nextElementSibling;

    document.getElementById('modalImage').src = imageNode.src;
    document.getElementById('modalMain').innerHTML = mainNode.innerHTML;
    document.getElementById('modalSub').innerHTML = subNode.innerHTML;
    document.getElementById('modalText').innerHTML = textNode.innerHTML;

    document.getElementById('portfolioModal').style.display = "block";
    console.log(textNode);
}

document.getElementById('modalClose').addEventListener('click', function() {
    document.getElementById('portfolioModal').style.display = "None";

})
var filterItems = document.getElementsByClassName('overlay');

for (var i = 0; i<filterItems.length; i++) {
    filterItems[i].addEventListener('click', viewPortfolio);
}