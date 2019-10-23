
//--------------------------AOS--------------------------
AOS.init({
  once: false,
  duration: 700,
  offset: 120
});
//--------------------------AOS--------------------------

$('.main-nav__list').removeClass('main-nav--nojs');

$('.main-nav__list').addClass('hidden');

$('.excursion__modal').on('click', function (e) { //Закрытие модального окна по клику на фон
  if ($(this).has(e.target).length === 0 && !$(e.target).hasClass('expectation__btn') && !$(e.target).hasClass('ui-icon-circle-triangle-e') && !$(e.target).hasClass('ui-icon-circle-triangle-w') && !$(e.target).hasClass('ui-corner-all')) { //Если не содержит этот target (модальное окно)
    if (!$(this).hasClass('modal--closed')) { //Если открыто окно
      $(this).addClass('modal--closed');
    }
  }
});

$('.mortgage__modal').click(function (e) {
  if ($(this).has(e.target).length === 0) { //Если не содержит этот target (модальное окно)
    if (!$(this).hasClass('modal--closed')) { //Если открыто окно
      $(this).addClass('modal--closed');
    }
  }
});

$('#consultationBtn').on('click', function () {
  $('.consultation__modal').removeClass('modal--closed');
});

$('.consultation .modal__closeBtn').on('click', function() {
  $('.consultation__modal').addClass('modal--closed');
});


$('.main-nav__toggle').on('click', function() {
  $('.main-nav__list').toggle('hidden');
});

/*(function () {
  var photoList = [
    'progress_foto.png', 'progress_foto.png','progress_foto.png','progress_foto.png','progress_foto.png','progress_foto.png','progress_foto.png',
    'progress_foto.png', 'progress_foto.png','progress_foto.png','progress_foto.png','progress_foto.png','progress_foto.png','progress_foto.png',
    'progress_foto.png', 'progress_foto.png','progress_foto.png','progress_foto.png','progress_foto.png','progress_foto.png','progress_foto.png'
  ];

  var fragment = document.createDocumentFragment();
  var galleryPhoto = document.querySelector('#progress-foto');

  var photoToShow = 4;

  $('.progress__btn').on('click', function() {
    photoToShow = photoList.length;
    fillPhotos();
    $(this).hide();
  });

  var fillPhotos = function () {
    for (var i = 0; i < photoToShow; i++) {
      var currentPhoto = galleryPhoto.content.cloneNode(true);
      fragment.appendChild(currentPhoto);
    }
    var progressGallery = document.querySelector('.progress__gallery-list');
    progressGallery.appendChild(fragment);
  }
  fillPhotos();
}());*/



(function () {
  var tableBtn = document.querySelectorAll('.description__table');

  for (var i = 0; i < tableBtn.length; i++) {

    tableBtn[i].classList.remove('table--nojs');
    tableBtn[i].addEventListener('click', function (evt) {
      evt.preventDefault();

      this.classList.toggle('active');
    })
  }
})();

// change active feedback-link

// скролл по якорю

$(document).ready(function () {
  $(".scrollLink").on("click", "a", function (evt) {
    evt.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 2000);
  });
});

// slick.init

$(document).ready(function () {

  $('.estate__slider-box').slick({
    adaptiveHeight: true,
    arrows: true,
    prevArrow: '<button id="prev" type="button" class="estate__slider-prevBtn"></button>',
    nextArrow: '<button id="next" type="button" class="estate__slider-nextBtn"></button>',
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });
});


(function () {

  var WIDTH = 1360;

  var sliderOptions = function () {
    $('.expectation__photo-box').slick({
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: false,
      arrows: false,
      mobileFirst: true,
      responsive: [{
        breakpoint: 1360,
        settings: 'unslick'
      }]
    });
  }

  var flag = false;

  var galleryType = function () {
    var windowWidth = window.innerWidth;
    if (windowWidth > WIDTH) {
      flag = true;
      window.addEventListener('resize', sliderInit);
    } else {
      sliderOptions();
      window.addEventListener('resize', sliderDestroy);
    }
  }

  var sliderInit = function () {
    var initWidth = window.innerWidth;
    if (initWidth < WIDTH) {
      if (flag) {
        sliderOptions();
        flag = false;
        window.addEventListener('resize', sliderDestroy);
      }
    }
  }

  var sliderDestroy = function () {
    destroyWidth = window.innerWidth;
    if (destroyWidth > WIDTH) {
      if (!flag) {
        galleryType();
      }
    }
  }

  galleryType();
}());


(function () {
  var deadlineList = document.querySelector('.flats__deadline-list');
  var title = document.querySelector('.flats__title');

  var showDeadlineList = function () {
    deadlineList.classList.toggle('flats__deadline-list--closed');
  }

  title.addEventListener('click', showDeadlineList);
}());


//
$(document).ready(function () {
  var ctx = document.getElementById('myChart').getContext('2d');
  var dataLabels = ['нояб’18', 'дек’18', 'янв’19', 'фев’19', 'март’19', 'апр’19',
    'май’19'
  ]; //  массив для изменяемыхданных
  var data = [80, 83, 75, 90, 95, 125, 110]; // массив для изменяемыхданных
  var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'line',

    // The data for our dataset
    data: {
      labels: dataLabels,
      datasets: [{
        label: '',
        backgroundColor: 'rgba(233,70,70, 0.1)',
        borderColor: 'rgb(233,70,70)',
        borderWidth: 1,
        pointHoverBackgroundColor: 'rgb(233,70,70)',
        spanGaps: true,
        data: data
      }]
    },

    // Configuration options go here
    options: {
      legend: {
        display: false
      },
      tooltips: {
        backgroundColor: '#7be37b',
        bodyFontSize: 16,
        bodyFontColor: '#fefcfc',
      },
      scales: {
        xAxes: [{
          gridLines: {
            display: false
          }
        }],
        yAxes: [{
          scaleLabel: {
            display: true
          },
          ticks: {
            min: 0,
            max: 150,
            stepSize: 25
          }
        }]
      }
    }
  });
});

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var listPlayers = [];
var readyPlayer = 0;
// --------------------------------ПАРАМЕТРЫ Для изменения--------------------------------

let countPlayers = 4; //Количество видеороликов
let videosId = ['OXuIqaeg0SI', 'G8lVXBN8ZFk', 'G8lVXBN8ZFk',
  '7qBfdcI-d1Q'
]; // Список с ID видеозаписей. Каждый элемент списка (ID) будет присваиваться по порядку видеороликам. Если Количество ID меньше, чем кол-во видеороликов, то цикл ID-шников пойдет заново.
let vars = { //Настройки yooutube плэера (https://developers.google.com/youtube/player_parameters?hl=ru)
  'autoplay': 0,
  'controls': 0,
  'showinfo': 0,
  'rel': 0,
  'iv_load_policy': 3,
  'disablekb': 1,
  'fs': 0,
}
//-----------------------------------------------------------------------
function onYouTubeIframeAPIReady() {
  //Здесь создаем список плееров
  let j = 0;
  for (let i = 0; i < countPlayers; i++) {
    if ((j > i) || (j >= videosId.length - 1)) {
      j = 0;
    }

    let player = new YT.Player('player' + i, {
      playerVars: vars,
      videoId: videosId[j],
      events: {
        'onReady': onPlayerReady
      }
    });
    listPlayers[i] = player;
    j++;
  }
}

function onPlayerReady(event) {
  readyPlayer += 1;
}

$(document).ready(function () {
  //-----------------калькулятор модальное окно--------------------
  let valueMortgageWork = 2;
  let valueMortgageIncome = 50000;
  let valueMortgagePayment = 500000;
  let $mortgageCapital = $('#mortgage-capital');
  let $mortgageWork = $('#mortgage-work');
  let $mortgageIncome = $('#mortgage-income');
  let $mortgagePayment = $('#mortgage-payment');
  let $result = $('.mortgage__expectancy-value-wrap');
  checkExpectancy();
  $('#mortgage__income-range').on('input', function () {
    valueMortgageIncome = parseInt($(this).val());
    let str;
    if (valueMortgageIncome >= 100000) {
      str = 'больше ' + 100000;
    } else {
      str = valueMortgageIncome;
    }
    $mortgageIncome.val(str);
    checkExpectancy();
  });
  $('#mortgage__work-range').on('input', function () {
    valueMortgageWork = parseInt($(this).val());
    let str;
    let $year = $('.mortgage-work__year');
    if (valueMortgageWork >= 15) {
      str = 'больше 15';
    } else {
      str = valueMortgageWork;
    }
    $mortgageWork.val(str);
    if (valueMortgageWork == 1) {
      $year.text('год')
    } else if (valueMortgageWork >= 2 & valueMortgageWork <= 4) {
      $year.text('года')
    } else {
      $year.text('лет')
    }
    checkExpectancy();
  });
  //Открытие закрытие модальных окон
  $('#btnOpenMortgage').on('click', function () {
    $('.mortgage.mortgage__modal').removeClass('modal--closed');
  });
  $('.mortgage .modal__close-btn').on('click', function () {
    $('.mortgage.mortgage__modal').addClass('modal--closed ');
  });

  $('#btnOpenExcursionModal').on('click', function () {
    $('.excursion.excursion__modal').removeClass('modal--closed ');
  });
  $('.excursion .modal-close-btn').on('click', function () {
    $('.excursion.excursion__modal').addClass('modal--closed');
  });



  $($mortgagePayment).on('input', function () {
    valueMortgagePayment = $(this).val();
    checkExpectancy();
  });
  $($mortgageIncome).on('input', function () {
    valuemortgageIncome = $(this).val();
    $mortgageIncome.val(valuemortgageIncome);
    checkExpectancy();
  });
  $($mortgageWork).on('input', function () {
    let $year = $('.mortgage-work__year');
    let $mortgageWork__value = $('.mortgageWork__value');
    valuemortgageWork = $(this).val();
    if (valuemortgageWork == 1) {
      $year.text('год')
    } else if (valuemortgageWork >= 2 & valuemortgageWork <= 4) {
      $year.text('года')
    } else {
      $year.text('лет')
    }
    $mortgageWork__value.text(valuemortgageWork)
    if (valuemortgageWork >= 15)
      $mortgageWork__value.text('более ' + valuemortgageWork + " ");
  });
  $($mortgageCapital).on('change', function () {

    valuemortgageIncome = $(this).val();
    if (this.checked) {} else {}
    checkExpectancy();
  });

  function checkExpectancy() {
    valueMortgageWork = parseInt(valueMortgageWork);
    valueMortgageIncome = parseInt(valueMortgageIncome);
    valueMortgagePayment = parseInt(valueMortgagePayment);
    let result = 65;
    if (valueMortgageWork > 5) {
      result++;
    }
    if (valueMortgageWork > 10) {
      result++;
    }
    if (valueMortgageWork == 15) {
      result++;
    }
    result += valueMortgagePayment * 0.00001;
    result += (valueMortgageIncome - 35000) / 2950;
    result = Math.round(result);
    if (result > 93) {
      result = 93;
    }
    $result.text(result);
  }
  //-----------------калькулятор модальное окно--------------------
  //-----калькулятор
  var contributionVal = 0,
    rateVal = 0,
    timeVal = 0;
  $("#contribution, #rate, #time").keypress(function (event) {
    event = event || window.event;

    if (event.charCode && event.charCode != 0 && event.charCode != 46 && (event.charCode < 48 || event.charCode > 57))
      return false;
  });
  $("#contribution").on('input', function () {
    contributionVal = $(this).val();
    updateResultCalc();
  });
  $("#rate").on('input', function () {
    rateVal = $(this).val();
    updateResultCalc();
  });
  $("#time").on('input', function () {
    timeVal = $(this).val();
    updateResultCalc();
  });

  function toNumber(x) { //Делает пробелы, между числами
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(",");
  }

  function updateResultCalc() {
    contributionVal = parseInt(contributionVal);
    rateVal = parseInt(rateVal);
    timeVal = parseInt(timeVal);
    if (contributionVal != 0 && rateVal != 0 && timeVal != 0 && contributionVal != '' && rateVal != '' && timeVal != '' && contributionVal >= 10000) {
      let result = ((contributionVal * rateVal / 100) / 12) * timeVal;
      result = +result.toFixed(2);
      result = toNumber(result);
      if (result != NaN && result != undefined && result != 'NaN') {
        console.log(result);
        $('.calculator__result').text(result + ' руб.');
      } else {
        $('.calculator__result').text(0 + ' руб.');
      }

    }


  }
  //-----калькулятор

  //-----Videoslider
  let videoSlideClientX;
  $('.video-slider').slick({
    centerMode: true,
    centerPadding: '15%',
    slidesToShow: 1,
    arrows: false,
    dots: false,
    // variableWidth: true,
    // infinite: false,
    responsive: [{
        breakpoint: 768,
        settings: {
          centerPadding: '12%',
        }
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false
        }
      }
    ]
  });

  function videoPlay(autoplay, idSlide) {
    if (autoplay == true) {
      let $slide = $('.video-slider').find('.video-slider__item[data-slick-index="' + idSlide + '"]');
      let $btnImg = $slide.find('.btn-play img');

      let $img = $slide.find('.content.slide__img');
      $img.siblings('.btn-pause').removeClass('btn-pause--none');
      let $video = $img.siblings('.wrapper-player').children('.slide__video');
      $video.addClass('slide__video-active');
      $img.addClass('slide__img-none');
      listPlayers[+idSlide].playVideo();
      $(this).removeClass('btn-pause--none');
      return;
    }
    $(this).removeClass('btn-pause--none');
    if ($(this).hasClass('btn-play')) {
      let $btnImg = $(this).children('img');
      let $img = $(this).parent();
      $img.siblings('.btn-pause').removeClass('btn-pause--none');
      let $video = $img.siblings('.wrapper-player').children('.slide__video');
      let idVideo = $video.attr('id').replace('player', '');
      if ($btnImg.attr('src') == 'img/btn-play.svg') {
        if (readyPlayer == listPlayers.length || readyPlayer >= (1 + idVideo)) {
          $video.addClass('slide__video-active');
          $img.addClass('slide__img-none');
          listPlayers[+idVideo].playVideo();
          $(this).removeClass('btn-pause--none');
        } else {
          var idTimeout = setInterval(function () {
            if (readyPlayer >= (1 + parseInt(idVideo))) {
              $video.addClass('slide__video-active');
              $img.addClass('slide__img-none');
              listPlayers[+idVideo].playVideo();
              clearInterval(idTimeout);
              $btnImg.attr('src', 'img/btn-pause.svg');
              $($btnImg).addClass('pause');
            }
          }, 1500);
          $(this).removeClass('btn-pause--none');
        }
      } else {
        listPlayers[+idVideo].pauseVideo();
        $btnImg.attr('src', 'img/btn-play.svg');
        $btnImg.removeClass('pause');
      }
    } else {

      let $video = $(this).siblings('.wrapper-player').children('.slide__video');
      let $imgVideo = $video.parent().siblings('.slide__img');
      let idVideo = $video.attr('id').replace('player', '');
      let $btnImg = $imgVideo.children('.btn-play').children('img');
      listPlayers[+idVideo].pauseVideo();
      $(this).addClass('btn-pause--none');


      $video.removeClass('slide__video-active');
      $imgVideo.removeClass('slide__img-none');
      $btnImg.attr('src', 'img/btn-play.svg');
      $btnImg.removeClass('pause');

    }
  }
  $(document).on('click', '.btn-play, .btn-pause', videoPlay);

  $('.video-slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    if (currentSlide != nextSlide) {
      $prevSlide = $('.video-slider').find('.video-slider__item[data-slick-index="' + currentSlide + '"]');
      let $video = $($prevSlide).children('.wrapper-player').children('.slide__video');
      let idVideo = $video.attr('id').replace('player', '');
      $video.removeClass('slide__video-active');
      let $imgVideo = $video.parent().siblings('.slide__img');

      $imgVideo.removeClass('slide__img-none');
      let $btnImg = $imgVideo.children('.btn-play').children('img');

      if (readyPlayer == listPlayers.length || readyPlayer >= (1 + parseInt(idVideo))) {
        listPlayers[idVideo].pauseVideo();
        $btnImg.attr('src', 'img/btn-play.svg');
        $btnImg.removeClass('pause');
      }

    }
  });

  $('.video-slider__item').on('mouseup', function (e) {
    if (e.clientX == videoSlideClientX) { //Произошел именно клик
      let curSlideIndex = $('.video-slider').slick('slickCurrentSlide');
      let nextSlideIndex = $(this).attr('data-slick-index');
      if (nextSlideIndex > curSlideIndex) {
        $('.video-slider').slick('slickNext');
        videoPlay(true, $('.video-slider').slick('slickCurrentSlide'));
      } else if (nextSlideIndex < curSlideIndex) {
        $('.video-slider').slick('slickPrev');
        videoPlay(true, $('.video-slider').slick('slickCurrentSlide'));
      }

    }

  });
  $('.video-slider__item').on('mousedown', function (e) {
    videoSlideClientX = e.clientX;
  });
  //Календарь datapicker]
  $('#hasDatepicker').datepicker({
    inline: true,
    firstDay: 1,
    showOtherMonths: true,
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн',
      'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'
    ],
    onSelect: function (dateText, inst) {
      let day = $(this).datepicker('getDate').getDate();
      let month = $(this).datepicker('getDate').getMonth();
      $('.date-info .date').text(day + '.' + month);
    }
  });
  //Select time excursion
  $('.excursion__select-time').on('input', function () {
    $('.date-info .time').text($(this).val() + ':00');
  });
});
