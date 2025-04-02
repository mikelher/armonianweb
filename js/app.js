$(document).ready(function() {

    console.log( "ready!" );

    $('#responsive-menu-button').sidr({
        name: 'sidr-main',
        source: '#navigation'
    });

    $('body').on('click', function() {
        $.sidr('close', 'sidr-main');
    });

    $('#sidr-main a').on('click', function() {
        $.sidr('close', 'sidr-main');
    });

    $('.owl-carousel').owlCarousel({
        margin:18,
        loop:true,
        dots:false,
        nav:false,
        items: 2,
        autoHeight: true,
        responsive:{
            768:{
                items:2
            },
            1200:{
                items:2
            }
        }
    });
    $( ".owl-prev").html('<i class="fa-solid fa-arrow-left"></i>');
    $( ".owl-next").html('<i class="fa-solid fa-arrow-right"></i>');

});

$(window).scroll(function () {
    // Código al hacer scroll.
});

$(window).resize(function () {
    // Código al redimensionar la ventana.
});