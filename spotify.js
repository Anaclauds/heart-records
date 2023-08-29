// script.js
$(document).ready(function(){
    $('.iframe-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev">Anterior</button>',
        nextArrow: '<button type="button" class="slick-next">Pr&oacute;ximo</button>' // Use o código HTML &oacute; para "ó"
    });
});

