;
(function () {
  $(document).ready(function () {
    $('.btn-open-nav').click(function (e) { //Открытие/Закрытие меню
      $('.catalog-nav').toggleClass('catalog-nav--active');
      $('.header-catalog').toggleClass('header-catalog--nav-active');
    });
    $('.list-type__btn-tile').click(function (e) { //Отображать плиткой
      $('.catalog-complex__list').removeClass('catalog-complex__list--display-list');
      reInitSlickFlats();
    });

    $('.list-type__btn-list').click(function (e) { //Отображать списком
      $('.catalog-complex__list').addClass('catalog-complex__list--display-list');
      reInitSlickFlats();
    });

    $('.list-character__btn').click(function (e) { //Кнопки отображения по характеристикам
      $(this).siblings().removeClass('list-character__btn--active');
      $(this).addClass('list-character__btn--active');
      reInitSlickFlats();
    });
    $('.filter__btn-reset, .map-filter__btn-reset').click(function (e) { //Кнопка сброса 
      $('.checkboxes').removeClass('checkboxes--active');
    });


    $('.list-type__btn').click(function (e) { //Кнопки отображения по виду
      if (!$(this).hasClass('list-type__btn-map')) {
        $(this).siblings().removeClass('list-type__btn--active');
        $(this).addClass('list-type__btn--active');
        reInitSlickFlats();
      }

    });



    $('.catalog-nav__item ').click(function (e) { //header buttons
      if (!$(this).hasClass('catalog-nav__item-menu')) {
        $(this).siblings().removeClass('catalog-nav__item--active');
        $(this).addClass('catalog-nav__item--active');
        
      }

    });


    $('body').on('click', function (e) {
      let $nav = $('.header-catalog__nav');
      if (!$(e.target).hasClass('header-catalog__nav')&& !$(e.target).hasClass('btn-open-nav') && !$(e.target).hasClass('img-open-nav') && !$(e.target).hasClass('catalog-nav__item')&& !$(e.target).hasClass('link') && !$(e.target).hasClass('catalog-nav__drop')) {
        $($nav).removeClass('catalog-nav--active');
        $('.header-catalog').removeClass('header-catalog--nav-active');
      }
    });

    $(window).on('resize', function () {
      if ($(this).width() <= 768) {
        $('.catalog-complex__list').removeClass('catalog-complex__list--display-list');
        reInitSlickFlats();
      }
    });

    function reInitSlickFlats() {
      let $slider = $('.catalog-complex__slider');
      $($slider).slick('unslick');
      $slider.slick({
        adaptiveHeight: true,
        arrows: true,
        prevArrow: '<button id="prev" type="button" class="catalog-complex__slider-prev-btn"><img src="img/catalog-slider-prev.svg" alt="img"></button>',
        nextArrow: '<button id="next" type="button" class="catalog-complex__slider-next-btn"><img src="img/catalog-slider-next.svg" alt="img"></button>',

      });
    }


  });
})();