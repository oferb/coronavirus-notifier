

$(document).ready(function () {

  // don't hide pop up when click on this items
  $(".hamburger").click(function (e) {
    e.stopPropagation();
  });

  // on body click anywhere - hide side bar pop-up
  $("body").click(function () {
    $('.side-bar').fadeOut('fast');
    $('#overlay').removeClass('overlay');
    $( '.hamburger' ).removeClass( "is-active" );

  });

  // side-bar menu open
  $('.hamburger').click(function () {
    $('.side-bar').fadeToggle(50);
    $( this ).toggleClass( "is-active" );
    $('#overlay').toggleClass('overlay');
  });

  // terms-close-x icon
  $('#terms-close-x').click(function () {
    $('#terms-of-use-pop-up').fadeOut('fast');
  });


  // open terms of use pop-up
  $('.terms-of-use-pop-up-click').click(function () {
    $('#terms-of-use-pop-up').fadeIn("fast");
  });


  // open embed pop-up
  $('.code-embed-pop-up-click').click(function () {

    $('#embedCoronaMap').modal('show');
    $('#hamburgerOnMainScreen').modal('hide');

  });

  // open map reader pop-up
  $('.map-reader-pop-up-click').click(function () {

    $('#map-reader-pop-up').fadeIn("fast");

  });

  // map-reader-close-x icon
  $('#map-reader-close-x').click(function () {
    $('#map-reader-pop-up').fadeOut('fast');
  });



});

/*! track-focus v 1.0.0 | Author: Jeremy Fields [jeremy.fields@vget.com], 2015 | License: MIT */
// inspired by: http://irama.org/pkg/keyboard-focus-0.3/jquery.keyboard-focus.js

(function(body) {

  let usingMouse;

  let preFocus = function(event) {
    usingMouse = (event.type === 'mousedown');
  };

  let addFocus = function(event) {
    if (usingMouse)
      event.target.classList.add('focus--mouse');
  };

  let removeFocus = function(event) {
    event.target.classList.remove('focus--mouse');
  };

  let bindEvents = function() {
    body.addEventListener('keydown', preFocus);
    body.addEventListener('mousedown', preFocus);
    body.addEventListener('focusin', addFocus);
    body.addEventListener('focusout', removeFocus);
  };

  bindEvents();

})(document.body);
