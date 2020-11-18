;(function ($) {
    $('.partners').owlCarousel({
        loop: false,
        dots: false,
        smartSpeed: 500,
        nav: true,
        responsiveClass: true,
        responsive: {
            // 0: {
            //     item: 1,
            //
            // },
            // 768: {
            //     item: 2
            // },
            // 992: {
            //     item: 3
            // },
            // 1200: {
            //     item: 4
            //
            // }
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
})(jQuery);

