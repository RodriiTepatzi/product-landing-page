$(function() {
    var winheight = $(window).innerHeight()
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 0 && ($(this).scrollTop() < winheight)) {
            $('header').removeClass('header-color-changer')
         }
       if (($(this).scrollTop() > winheight+40) && ($(this).scrollTop() < winheight*2)) {
          $('header').addClass('header-color-changer')
       }
       if (($(this).scrollTop() > (winheight*2) && ($(this).scrollTop() < (winheight*3)))) {
        $('header').removeClass('header-color-changer')
       } 
       if ($(this).scrollTop() > (winheight*3)) {
        $('header').add('header-color-changer')
       } 
    });
    });