$('.filtering').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="prev-btn"><i class="fa-solid fa-circle-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="next-btn"><i class="fa-solid fa-circle-chevron-right"></i></button>',
    responsive: [
        
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                prevArrow: false,
                nextArrow: false
            }
        }
    ]
});
var filtered = false;

$('.js-filter').on('click', function () {
    if (filtered === false) {
        $('.filtering').slick('slickFilter', ':even');
        $(this).text('Unfilter Slides');
        filtered = true;
    } else {
        $('.filtering').slick('slickUnfilter');
        $(this).text('Filter Slides');
        filtered = false;
    }
});

$('.img-parner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
        
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                // infinite: true,
                // dots: true
            }
        }
    ]
});