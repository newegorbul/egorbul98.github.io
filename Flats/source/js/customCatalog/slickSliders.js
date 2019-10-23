;
(function () {
  // let catalogComplexSection = $('.catalog-complex-box').offset().top;
  // $(document).ready(function () {
  //   $(window).bind('scroll', function () {
  //     if ($(this).scrollTop() >= catalogComplexSection) {
  //       console.log('init slider');
  //       $(this).unbind('scroll');
  //     }
  //   });
  // });
  $(document).ready(function () {
    let $slider = $('.advice-slider');
    if ($($slider).length) {
      $('.advice-slider').slick({
        adaptiveHeight: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: '<button id="prev" type="button" class="advice-slider__slider-prev-btn"><img src="img/catalog-slider-prev.svg" alt="img"></button>',
        nextArrow: '<button id="next" type="button" class="advice-slider__slider-next-btn"><img src="img/catalog-slider-next.svg" alt="img"></button>',
        // centerMode: true,
        // centerPadding: '5px',
        responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              // centerMode: true,
              // centerPadding: '10px',
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              // centerMode: true,
              // centerPadding: '10px',
              // variableWidth: true
            }
          }
        ]
      });
    }
  });


})();