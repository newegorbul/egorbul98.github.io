//custom.js

//$(function(){

//	var hf = function(){
//		var h_header = $('header').height();
//		var h_footer = $('footer').height();
//		$('.content').css({
//			'paddingTop': h_header,
//			'paddingBottom': h_footer
//		});
//	}
//
//	$(window).bind('load resize', hf);

//});

function functionTabs() { //Настраивает работу табов
  // $(this).addClass('active').siblings().removeClass('active').
  // parents('.tab').find('.tab-content__item').removeClass('active').
  // eq($(this).index()).addClass('active');
  $(this).addClass('active').siblings().removeClass('active');
}

$(document).ready(function () {
  $('.tab-caption').on('click', 'li', functionTabs);

  $('#tab-caption-slider').on('afterChange', function (event, slick, currentSlide, nextSlide) {
    // $(this).parents('.tab').find('.slick-current').addClass('active').siblings().removeClass('active').
    // parents('.tab').find('.tab-content__item').removeClass('active').eq($(this).parents('.tab').find('.slick-current').index()-1).addClass('active');
    $(this).parents('.tab').find('.slick-current').trigger('click');

  });

  // mixItUp portfolio projects
  var mixer = mixitup('.projects-list', {
    selectors: {
      target: '.projects-list-item'
    },
    animation: {
      duration: 400
    }
  });

  $('.navigation-btn-toogle').on('click', function () {
    $(this).addClass('.active');
    $('.menu').slideToggle();
  });


  $(".navigation").on("click", "a", function (event) {
    //отменяем стандартную обработку нажатия по ссылке
    event.preventDefault();
    //забираем идентификатор бока с атрибута href
    var id = $(this).attr('href'),
      //узнаем высоту от начала страницы до блока на который ссылается якорь
      top = $(id).offset().top;
    //анимируем переход на расстояние - top за 1500 мс
    $('body,html').animate({
      scrollTop: top
    }, 1200);
  });

  $('.banner-slider, .comment-slider').slick({
    arrows: false,
    dots: true
  });

  $('.portfolio-slider').slick({
    dots: true,
    appendArrows: '.portfolio-slider__btns',
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
    responsive: [{
      breakpoint: 767,
      settings: {
        dots: false,
      }
    }]
  });
//lazyloading
  $(".lazy").lazyload();
  
//появлеие карты, когда пользователь докрутит до блока клиентов
  
  

});

$(window).on('resize load', function () { //При изменении размера экранов, табы меняют своё поведение
  // if ($(window).width() < 768) {
  //   $('.tab-caption').off('click');
  // } else {
  //   $('.tab-caption').on('click', 'li', functionTabs);
  // }
});


// $(document).ready(function () {

// });


var tabCaptionSlider = $('#tab-caption-slider');

$(window).on('resize load', function () {
  if ($(window).width() > 767) {
    if (tabCaptionSlider.hasClass('slick-initialized')) {
      tabCaptionSlider.slick('unslick');
    }

  } else if (!tabCaptionSlider.hasClass('slick-initialized')) {
    var index = tabCaptionSlider.find('.active').index();
    tabCaptionSlider.slick({
      initialSlide: index,
      dots: false,
      appendArrows: '.tab-caption-slider__btns',
      prevArrow: '<button type="button" class="slicks-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow: '<button type="button" class="slicks-next"><i class="fas fa-chevron-right"></i></button>',

    });
  }
});