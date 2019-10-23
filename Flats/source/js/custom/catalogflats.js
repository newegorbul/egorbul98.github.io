function toNumber(x) { //Делает пробелы, между числами
  var parts = x.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  return parts.join(",");
}

$(document).ready(function () {
  //Списки квартир (1 массив = 1 группа квартир одной планировки)
  let flats1 = [];
  flats1[0] = {'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '2400000'
  };
  flats1[1] = {'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2700000'
  };
  flats1[2] = {'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2500000'
  };
  flats1[3] = {'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000'
  };
  flats1[4] = {'square': 33,'floor': 6,'totalFloor': 20,'type': 'С отделкой','cost': '5700000'
  };
  flats1[5] = {'square': 40,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '5700000'
  };
  let flats2 = [];
  flats2[0] = {'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '3700000'
  };
  flats2[1] = {'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '2400000'
  };
  flats2[2] = {'square': 28,'floor': 3,'totalFloor': 12,'type': 'С отделкой','cost': '2400000'
  };
  flats2[3] = {'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '2700000'
  };
  flats2[4] = {'square': 33,'floor': 8,'totalFloor': 12,'type': 'С отделкой','cost': '2700000'
  };
  let flats3 = [];

  flats3[0] = {'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '3700000'
  };
  flats3[1] = {'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '1000000'
  };
  flats3[2] = {'square': 29,'floor': 5,'totalFloor': 12,'type': 'Без отделки','cost': '100000'
  };
  flats3[3] = {'square': 48,'floor': 5,'totalFloor': 15,'type': 'С отделкой','cost': '1500000'
  };
  flats3[4] = {'square': 48,'floor': 5,'totalFloor': 15,'type': 'С отделкой','cost': '1500000'
  };

  let flats4 = [];

  flats4[0] = {'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '3700000'
  };
  flats4[1] = {'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '1000000'
  };
  flats4[2] = {'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '3700000'
  };
  flats4[3] = {'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '1000000'
  };
  flats4[4] = {'square': 18,'floor': 3,'totalFloor': 3,'type': 'Без отделки','cost': '3700000'
  };
  flats4[5] = {'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '1000000'
  };
  flats4[6] = {'square': 29,'floor': 4,'totalFloor': 12,'type': 'Без отделки','cost': '1000000'
  };

//Группы квартир
  let flatOneRoom = [ flats1, flats2 ]; //1-конматные
  let flatTwoRoom = [ flats2, flats1 ];//2-конматные
  let flatThreeRoom = [ flats3 ];//3-конматные
  let flatStudio = [ flats4 ];//студии


  let countFlatOneRoom = countFlat(flatOneRoom);
  let countFlatTwoRoom= countFlat(flatTwoRoom);
  let countFlatThreeRoom= countFlat(flatThreeRoom);
  let countFlatStudio = countFlat(flatStudio);

  $('.flats__modalBtn[data-flats="1"]').find('.flat-count').text(countFlatOneRoom);
  $('.flats__modalBtn[data-flats="2"]').find('.flat-count').text(countFlatTwoRoom);
  $('.flats__modalBtn[data-flats="3"]').find('.flat-count').text(countFlatThreeRoom);
  $('.flats__modalBtn[data-flats="4"]').find('.flat-count').text(countFlatStudio);

  let $tableList = $('#catalog-list-table');
  let img = 'img/layout.png'; //изображение планировки для одной группы квартир

  $('.flats__modalBtn').on('click', function (e) {
    e.preventDefault();
    let countRoomFlats = $(this).attr('data-flats');
    let $modalWindow = $('.catalog__modal');
    let currentRoomFlats = $modalWindow.attr('data-flats'); //Текущий контент модального окна
    clearListTable();
    if (!$modalWindow.has('modal--closed')) { //Если окно открыто
      $modalWindow.addClass('modal--closed');
    }
    if (countRoomFlats == currentRoomFlats) { //если текущий контент мод. окна соответсвует тому контенту, который появляется при нажатии на текущюю кнопку
      $modalWindow.addClass('modal--closed');
      $modalWindow.attr('data-flats', '0');
      clearListTable();
      return;
    }

    let flatsCount;
    if (countRoomFlats == '1') { //если 1-к квартиры
      $modalWindow.removeClass('modal--closed');
      $modalWindow.attr('data-flats', '1');
      flatsOut(flats1, img, countRoomFlats, countFlatOneRoom);
    } else if (countRoomFlats == '2') { //если 2-к квартиры
      $modalWindow.removeClass('modal--closed');
      $modalWindow.attr('data-flats', '2');
      flatsOut(flats2, img, countRoomFlats, countFlatTwoRoom);
      flatsOut(flats2, img, countRoomFlats, countFlatTwoRoom);
    } else if (countRoomFlats == '3') { //если 3-к квартиры
      $modalWindow.removeClass('modal--closed');
      $modalWindow.attr('data-flats', '3');
      flatsOut(flats3, img, countRoomFlats, countFlatThreeRoom);
      flatsOut(flats3, img, countRoomFlats, countFlatThreeRoom);
    } else if (countRoomFlats == '4') { //если 4-к квартиры
      $modalWindow.removeClass('modal--closed');
      $modalWindow.attr('data-flats', '4');
      flatsOut(flats4, img, countRoomFlats, countFlatStudio);
    }

  });
  $('body').on('click', function (e) { //Закрытие модального окна по клику на фон
    if ($('.catalog__modal').has(e.target).length === 0 && $('.flats__link').has(e.target).length === 0) { //Если не содержит этот target
      if (!$('.catalog__modal').hasClass('modal--closed')&&!$(e.target).hasClass('flats__link')) {
        $('.catalog__modal').addClass('modal--closed');
        $('.catalog__modal').attr('data-flats', '0');
        clearListTable();
      }
    }
  });
  function clearListTable() { //Очищает список таблиц
    catalogSliderDestroy();
    $tableList.empty();
  };

  function flatsOut(flats, img, countRoom, countFlats) { //Выводит квартиры в модальное окно. Создает одну таблицу, с одной планировкой
    catalogSliderDestroy(); //Отключить слайдеры
    if (countRoom == '4') {
      $('.catalog-title-box').html('<span class="name-flats">Студии</span><span class="count-flats">'+countFlats+' квартир</span>');
    } else {
      $('.catalog-title-box').html('<span class="name-flats">'+countRoom+'-к квартиры</span><span class="count-flats">'+countFlats+' квартир</span>');
    }

    let str = '<table class="catalog-table "><thead><th class="icon-flats"></th><th class="square">Площадь, м2</th><th class="floor">Этаж</th><th class="type">Тип отделки</th><th class="cost">Стоимость кв, руб</th><th class="plan">Планировка</th></thead><tbody><tr class="tr-empty"><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td class="empty"></td><td rowspan="0" class="catalog-img-flat"><img src="' + img + '" alt=""></td></tr>';
    for (let i = 0; i < flats.length; i++) {
      str += '<tr class="tr-catalog-item">';
      str += '<td class="icon-flats"><img src="img/icon-flats.png" alt=""></td>';
      str += '<td><div>' + flats[i].square + ' м2</div></td>';
      str += '<td><div>' + flats[i].floor + '</div></td>';
      str += '<td><div>' + flats[i].type + '</div></td>';
      str += '<td><div>' + toNumber(flats[i].cost) + '</div></td>';
      str += '</tr>';
      str += '<div class="catalog-item"><div class="catalog-item__num">' + countRoom + '-к квартира № 115</div><div class="catalog__slide-wrap"><div class="catalog__slider"><div class="catalog__slider-item"><img src="img/layout.png" alt=""></div><div class="catalog__slider-item"><img src="img/layout.png" alt=""></div></div></div><div class="catalog-item__cost">' + toNumber(flats[i].cost) + '</div><div class="catalog-item__inner-flats"><div class="left-block"><span class="catalog-item__square">' + flats[i].square + ' м2</span><span class="catalog-item__floor">' + flats[i].floor + '/' + flats[i].totalFloor + ' этаж</span></div><span class="more">Подробнее</span></div><button type="button" class="catalog-item__btn pink__btn">Записаться на просмотр</button></div>';
    }
    str += '</tbody></table>';
    $tableList.append(str);

    catalogSliderInit(); //Включить слайдеры
  }

  function catalogSliderInit() {
    $('.catalog__slider').slick({
      arrows: true,
      prevArrow: '<button id="prev" type="button" class="catalog__slider-prevBtn"></button>',
      nextArrow: '<button id="next" type="button" class="catalog__slider-nextBtn"></button>',
      slidesToShow: 1,
      mobileFirst: true,
    });
  }

  function catalogSliderDestroy() {
    $('.catalog__slider').slick('unslick');
  }

  function countFlat(flats) {
    let count = 0;
    for (let i = 0; i < flats.length; i++) {
      count += flats[i].length;
    }
    return count;
  }
});
