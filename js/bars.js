$(function () {

  let hamburger = $(".hamburger");
  let divMenu = $('#div-menu')

  hamburger.click(function (e) {

    hamburger.toggleClass("is-active");

    divMenu.slideToggle('slow');

  });


  $(window).resize(function () {

    if ($(this).width() > 730) {

      divMenu.hide();
      hamburger.removeClass("is-active");

    }

  });

  window.addEventListener("orientationchange", () => {

    console.log(window.screen.orientation);

    if (window.matchMedia("(orientation: portrait)").matches) {
      swal("Oops", "Something went wrong! <br> <b>Convert your device's orientation to portrait</b>", "error");
    }

  });



});