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