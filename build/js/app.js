"use strict";

$(document).ready(function () {
  //burger
  if (document.querySelector('.js-burger')) {
    $('.js-burger').click(function () {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $('.js-nav').removeClass('active');
        $('.main').removeClass('opacity');
        $('body').removeClass('overflow');
        $('html').removeClass('overflow');
      } else {
        $(this).addClass('active');
        $('.js-nav').addClass('active');
        $('.main').addClass('opacity');
        $('body').addClass('overflow');
        $('html').addClass('overflow');
      }
    });
  } //lang


  $(".lang__wrap a").click(function () {
    var clicked = $(this).html();
    $('.lang__current').html(clicked);
    $('.lang__wrap').removeClass('active');
  });
  $('.lang__current').click(function () {
    $('.lang__wrap').toggleClass('active');
  });
});
$(document).ready(function () {});
$(document).ready(function () {}); // particlesJS("particles-js", {
//     "particles": {
//       "number": {
//         "value": 18,
//         "density": {
//           "enable": true,
//           "value_area": 700
//         }
//       },
//       "color": {
//         "value": ["#aa73ff", "#f8c210", "#83d238", "#33b1f8"]
//       },
//       "shape": {
//         "type": "circle",
//         "stroke": {
//           "width": 0,
//           "color": "#000000"
//         },
//         "polygon": {
//           "nb_sides": 15
//         }
//       },
//       "opacity": {
//         "value": 0.5,
//         "random": false,
//         "anim": {
//           "enable": false,
//           "speed": 1.5,
//           "opacity_min": 0.15,
//           "sync": false
//         }
//       },
//       "size": {
//         "value": 2.5,
//         "random": false,
//         "anim": {
//           "enable": true,
//           "speed": 2,
//           "size_min": 0.15,
//           "sync": false
//         }
//       },
//       "line_linked": {
//         "enable": true,
//         "distance": 110,
//         "color": "#33b1f8",
//         "opacity": 0.25,
//         "width": 1
//       },
//       "move": {
//         "enable": true,
//         "speed": 1.6,
//         "direction": "none",
//         "random": false,
//         "straight": false,
//         "out_mode": "out",
//         "bounce": false,
//         "attract": {
//           "enable": false,
//           "rotateX": 600,
//           "rotateY": 1200
//         }
//       }
//     },
//     "interactivity": {
//       "detect_on": "canvas",
//       "events": {
//         "onhover": {
//           "enable": false,
//           "mode": "repulse"
//         },
//         "onclick": {
//           "enable": false,
//           "mode": "push"
//         },
//         "resize": true
//       },
//       "modes": {
//         "grab": {
//           "distance": 400,
//           "line_linked": {
//             "opacity": 1
//           }
//         },
//         "bubble": {
//           "distance": 400,
//           "size": 40,
//           "duration": 2,
//           "opacity": 8,
//           "speed": 3
//         },
//         "repulse": {
//           "distance": 200,
//           "duration": 0.4
//         },
//         "push": {
//           "particles_nb": 4
//         },
//         "remove": {
//           "particles_nb": 2
//         }
//       }
//     },
//     "retina_detect": true
//   });

$(document).ready(function () {
  //select 
  $('.js-select').click(function () {
    $(this).toggleClass('active');
    $('.js-select-list').slideToggle();
  }); //close custom select

  $(function ($) {
    $(document).mouseup(function (e) {
      var div = $(".js-select");

      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.removeClass('active');
        $('.js-select-list').slideUp();
      }
    });
  });
  $('.select__list li').click(function () {
    var selected = $(this).text();
    $('.select__text').text(selected);
  });
});
$(document).ready(function () {});
$(document).ready(function () {
  var svgWidth = 1049;
  var regions = {
    1: "Автономная Республика Крым",
    2: "Черкасская область",
    3: "Черниговская область",
    4: "Черновицкая область",
    5: "Днепропетровская область",
    6: "Донецкая область",
    7: "Ивано-Франковская область",
    8: "Харьковская область",
    9: "Херсонская область",
    10: "Хмельницкая область",
    12: "Киевская область",
    13: "Кировоградская область",
    14: "Луганская область",
    15: "Львовская область",
    16: "Николаевская область",
    17: "Одесская область",
    18: "Полтавская область",
    19: "Ровенская область",
    20: "Сумская область",
    21: "Тернопольская область",
    22: "Закарпатская область",
    23: "Винницкая область",
    24: "Волынская область",
    25: "Запорожская область",
    26: "Житомирская область"
  }; //tabs

  $(".cart").on("click", "path:not(.active)", function () {
    var region = $(this).attr('data-region');

    var _this$getBBox = this.getBBox(),
        width = _this$getBBox.width,
        height = _this$getBBox.height;

    var _$$position = $(this).position(),
        top = _$$position.top,
        left = _$$position.left;

    var currentWidth = $('.cart').width();
    var k = svgWidth / currentWidth;
    $(this).addClass("active").siblings().removeClass("active");
    $('svg ellipse, svg circle').show();
    $("svg ellipse[data-region=\"".concat(region, "\"], svg circle[data-region=\"").concat(region, "\"]")).hide();
    $('.cart-label').show().css('left', left).css('top', top).css('width', width / k).css('height', height / k);
    $('.cart-label p').text(regions[region]);
  });
});
$(document).ready(function () {
  var rellax = new Rellax('.rellax');
  new WOW().init();
});

window.onload = function () {
  var videoLink = document.getElementById('video-link');
  var video = document.querySelector('.video');
  var btnCloseVideo = this.document.querySelector('.fa-times');
  videoLink.addEventListener('click', function (e) {
    e.preventDefault();
    video.style.display = 'block';
  });
  btnCloseVideo.addEventListener('click', function () {
    video.style.display = 'none';
  });
  this.console.log(video);
};