$(document).ready(function(){
    
    // slick slider
    $('.testimonial').slick({
        slidesToShow: 2,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000,

        responsive: [{
            breakpoint: 992,
            settings: {
              slidesToShow: 1,
            }
          }]
    });
});