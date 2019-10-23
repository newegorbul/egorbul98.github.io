;(function() {
  var descriptionTopY = $('#description').offset().top;

  $(window).bind('scroll', function () {
    if ($(this).scrollTop() >= descriptionTopY) {
      $(this).unbind('scroll');
      ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
            center: [59.996421, 30.214709],
            zoom: 14
          }, {
            searchControlProvider: 'yandex#search'
          }),
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
          ),
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: 'img/map_pin.png',
            iconImageSize: [79, 87],
            iconImageOffset: [-40, -87]
          })
        myMap.geoObjects
          .add(myPlacemark)
        myMap.behaviors
          .disable(['scrollZoom', 'rightMouseButtonMagnifier'])
          .enable('ruler');
      });
      
    }
  });
}) ();


