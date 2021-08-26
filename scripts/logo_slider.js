$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 9,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0.1,
        arrows: false,
        dots: false,
        infinite:true,
        speed:1000,
        // swipe:true,
        touchMove:true,
        // lazyLoad: 'ondemand',    
        cssEase:'linear',
        pauseOnHover: true,
        swipeToSlide:true,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});