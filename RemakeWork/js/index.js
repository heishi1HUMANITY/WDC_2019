$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    $('.button').click(function(){
        $(this).toggleClass('active');
    });
});
