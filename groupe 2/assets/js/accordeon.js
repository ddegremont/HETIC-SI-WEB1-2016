$(document).ready(function () {

  $(window).resize(function(){
    if (window.matchMedia("(min-width: 768px)").matches) {
      $('.content').show()
    } else {
      $('.content').hide()
      $('#car').delegate('span, h3','click',function(){
        var content = $(this).closest('.grid__cell').children('.content')
        var elem = $(this).closest('.grid__cell').children('div').children('span')
        if (!content.hasClass('active')) {
          elem.rotate({animateTo:180})
          content.toggleClass('active').show();
        } else {
          elem.rotate({animateTo:0})
          content.toggleClass('active').hide();
        }
      })
      $('.products li ul').hide()
      $('.products').delegate('span, h2','click', function(){
        var content = $(this).closest('li')
        content.closest('ul').children('li').not(this)
        .removeClass('large')
        .find('span')
        .rotate({animateTo: 0})

        $(this).closest('.products')
        .children('li')
        .children('ul')
        .not(this)
        .hide()

        $(this).closest('li')
        .children('ul').show().focus()
        content.toggleClass('large')
        content.find('span').rotate({animateTo:180})
      })
    }
  })


  if (window.matchMedia("(min-width: 768px)").matches) {
    $('.content').show()
    $('.plaque').css('display','flex')
    $('.carte').css('display','flex')
    $('.products li ul').hide()
  } else {
    $('.content').hide()
    $('#car').delegate('span, h3','click',function(){
      var content = $(this).closest('.grid__cell').children('.content')
      var elem = $(this).closest('.grid__cell').children('div').children('span')
      if (!content.hasClass('active')) {
        elem.rotate({animateTo:180})
        content.toggleClass('active').show();
      } else {
        elem.rotate({animateTo:0})
        content.toggleClass('active').hide();
      }
    })
    $('.products li ul').hide()
    $('.products').delegate('span, h2','click', function(){
      var content = $(this).closest('li')
      content.closest('ul').children('li').not(this)
      .removeClass('large')
      .find('span')
      .rotate({animateTo: 0})

      $(this).closest('.products')
      .children('li')
      .children('ul')
      .not(this)
      .hide()

      $(this).closest('li')
      .children('ul').show().focus()
      content.toggleClass('large')
      content.find('span').rotate({animateTo:180})
    })
  }
});
