'use strict';

(function() {

  var estateFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
      /*answer: {
        avatar: ,
        name: ,
        feedback:
      }*/
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'на троечку'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'инфраструктура никакая'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'нет парковочных мест'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'Все круто, буду тут жить'
    }
 ];

  var developerFeedbacks = [ // temp array
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинныйочень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Самойлова Виктория',
      feedback: 'хороший комплекс'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Петрова Ирина',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Просто кто-то',
      feedback: 'фывадлорыдваифыбьварпыораифытфыв адлорыдваифыбьварпыораифытиаиа фывадлорыдваифыбьварпыораифытиа  фывадлорыдваифыбьварпыораифытиа'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Юрий Михайлович',
      feedback: 'хороший застройщик'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Семин Игорь',
      feedback: 'очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв очень длинный отзыв'
    },
    {
      avatar: 'img/feedback__avatar.png',
      name: 'Егорова Евгения',
      feedback: 'качественно и быстро'
    }
  ];

  var fillCommentsNode = function (element, commentData) {
    element.querySelector('.feedback__avatar').setAttribute('src', commentData.avatar);
    element.querySelector('.feedback__author').textContent = commentData.name;
    element.querySelector('.feedback__text').textContent = commentData.feedback;
  };

    var currentCommentsArray = estateFeedbacks;
    var commentsCount = 3;

    var fragment = document.createDocumentFragment(); // fragment
    var template = document.querySelector('#feedback-template'); // template
    var commentBox = document.querySelector('.feedback__inner'); // comment box

    var createComment = function () {

      for(var i = 0; i < commentsCount; i++) {
        var currentComment = template.content.cloneNode(true); // clone template
        var commentData = currentCommentsArray[i]; // current comments

        fillCommentsNode(currentComment, commentData); // run fill func

        fragment.appendChild(currentComment);
      };
        commentBox.appendChild(fragment);
    };

    // сворачивание комментариев

    var showFullComment = function () {

      $('.feedback__box').each(function() {
        var size = 100,
        feedbackContent = $(this).find('.feedback__text'),
        feedbackText = feedbackContent.html(),
        feedbackTextLength = feedbackText.length;

        if (feedbackText.length > size) {
          feedbackContent.html(feedbackText.slice(0, size) + '...');


          $(this).find('.feedback__btn--unfurl').removeClass('hidden');

          $(this).find('.feedback__btn').on('click', function () {
            if($(this).hasClass('feedback__btn--unfurl')) {
              feedbackContent.html(feedbackText.slice(0, feedbackTextLength));

              $(this).removeClass('feedback__btn--unfurl');
              $(this).addClass('feedback__btn--furl');
              $(this).text('свернуть');
            } else {
              feedbackContent.html(feedbackText.slice(0, size));
              $(this).removeClass('feedback__btn--furl');
              $(this).addClass('feedback__btn--unfurl');
              $(this).text('читать весь отзыв');
            }
          })
        }
      });
      addAnswer();
    }

    // выбор списка комментариев

    var toggleLinks = document.querySelectorAll('.feedback__toogle-link');
    var activeLink = document.querySelector('.feedback__toogle-link--active');

    for (var i = 0; i < toggleLinks.length; i++) {
      toggleLinks[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        activeLink.classList.remove('feedback__toogle-link--active');
        this.classList.add('feedback__toogle-link--active');
        activeLink = this;


        if (activeLink.classList.contains('feedback__toogle-link--estate')) {
          deleteComments();  // удаляю все отзывы
          currentCommentsArray = estateFeedbacks; // меняю массив с отзывами
          createComment(); // запускаю ф-ю с показом отзывов
          showFullComment();
        } else {
          deleteComments();
          currentCommentsArray = developerFeedbacks;
          createComment();
          showFullComment();
        }
      });
    }

    var deleteComments = function () { // ф-я удаления нод
     var currentComments = document.querySelectorAll('.feedback__box');
     for (var i = 0; i < currentComments.length; i++) {
          commentBox.removeChild(currentComments[i]);
        }
      };

    // показ всех комментариев

    $('.feedback__show-btn').on('click', function () {
      $(this).hide();
      $('.feedback__modalBtn').removeClass('hidden');
      $('.feedback').addClass('feedback--modal');
      $('feedback__modal').addClass('feedback--modal-wrapper');
      $('.feedback__title').hide();
      commentsCount = currentCommentsArray.length;
      createComment();
      showFullComment();
    });

    $('.feedback__modalBtn').on('click', function () {
      $(this).addClass('hidden');
      $('.feedback__show-btn').show();
      $('.feedback').removeClass('feedback--modal');
      $('.feedback__modal').removeClass('feedback--modal-wrapper');
      $('.feedback__title').show();
      commentsCount = 3;
      deleteComments();
      createComment();
      showFullComment();
    });

    // ответ на отзыв

    var addAnswer = function () {
      $('.feedback__answer-btn').on('click', function () {
        $(this).parent().children('.feedback__answer-box').toggleClass('hidden');
      })
    };

    var addComment = function () {
      $('.feedback__add-btn').on('click', function () {
        $('.feedback__modal').removeClass('modal--closed');
        $('.feedback__modal-closeBtn').on('click',function () {
          $('.feedback__modal').addClass('modal--closed');
        });
      });
    };

    addComment();
    createComment();
    showFullComment();
}());
