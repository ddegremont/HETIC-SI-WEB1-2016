$('.responsive').slick({
    dots: true,
    useCSS: false,
    useTransform: false,
    infinite: true,
    speed: 625,
    slidesToShow: 2,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true,
    //  easing: 'none',
    autoplaySpeed: 3000,
    responsive: [{
        breakpoint: 1024,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }, {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});

$('.responsive').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
    //  console.log(currentSlide, nextSlide);
    $(".slick-slide[data-slick-index='" + (currentSlide + 1) + "']").velocity("transition.bounceLeftOut", 1250);
    //.delay(750).velocity({ opacity: 0 }, 750);
});/**
 * Created by William on 20/05/2016.
 */


