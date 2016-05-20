$('.vehicle').click(function(){
    if (!$(this).hasClass('active-banner')) {
        $('.vehicle').each(function(){
            $(this).toggleClass('active-banner');
        });
    }
});

$('.typeSearch').each(function(index, element){
    $(element).click(function(){
        $('.typeSearch').each(function(){
            $(this).removeClass('active-nav');
        })
        $(this).toggleClass('active-nav');
        $('.search-car1').each(function(place){
            $(this).removeClass('selectSearch');
            if (index == place) {
                $(this).addClass('selectSearch');
            }
        });
    });
});

$('.showLink').each(function(index, element){
    $(element).click(function(){
        $('.showLink').each(function(){
            $(this).removeClass('footer-nav-active');
        });
        $(this).toggleClass('footer-nav-active');
        $('.footer-contents').each(function(place){
            $(this).removeClass('active-footer');
            if (index == place) {
                $(this).addClass('active-footer');
            }
        });
    });
});

$(window).resize(function() {
    if ($(window).width() <= 768) {
        $('.roue-deco').attr("src" , "./assets/img/roue2.png");
    }
});

$('.burger').click(function(){
    if($('.burger').attr('src') == './assets/img/burger.svg'){
        $('.burger').attr('src', './assets/img/cross.png');
    } else {
        $('.burger').attr('src', './assets/img/burger.svg');
    }
    $('main').toggleClass('hideMain');
    $('.mobileMenu').toggleClass('showMenu');
});

function animateBanner(){
    $( ".promo" ).animate({
        opacity: 0,
      }, 5000, function() {
          if ($('.promo img').attr('src') == './assets/img/Pub_Huile.jpg') {
              $('.promo img').attr('src', './assets/img/banner.png');
          } else {
              $('.promo img').attr('src', './assets/img/Pub_Huile.jpg');
          }
          $('.promo').animate({
              opacity: 1,
          }, 5000)
      });
}

setInterval(animateFooter, 60000);

function animateFooter(){
    $('.tele').toggleClass('hideTele');
    $('.brand').toggleClass('hideBrand');
}
