window.addEventListener("load", function(){
    var load_screen = document.getElementById("load_screen");
    load_screen.style = 'opacity: 0;';
    function removePreloader() {
        document.body.removeChild(load_screen);
    }
    var transitionTime = parseFloat(window.getComputedStyle(load_screen,null).getPropertyValue("transition-duration")) * 1000;
    setTimeout(removePreloader, transitionTime);
});

$(document).ready(function() {
    $('.drawer').drawer();
});

$('.single-item').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    cssEase: 'linear'
});

$('.single-item-no-autoplay').slick({
    dots: true,
    autoplay: false,
    fade: true,
    cssEase: 'linear'
});

