$('header button').click(function() {
  $('header button').toggleClass('is-active')
  $('.mobile').toggle();
})
$('.mobile').hide();
//Hide / Show Search Bar
var lastScrollTop = $(window).scrollTop()
$(window).scroll(function(event){
  var st = $(this).scrollTop();
  if (st > lastScrollTop){
    $('.search').fadeOut(400,function(){
      $('.search').hide()
    })
  } else {
    $('.search').fadeIn(400,function(){
      $('.search').show()
    })
  }
  lastScrollTop = st;
});
$('#logo').on('click', function(){
  $('html,body').animate({scrollTop: 0}, 800);
});
