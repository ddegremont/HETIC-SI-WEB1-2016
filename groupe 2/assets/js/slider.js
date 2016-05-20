function slide (nb) {
  var src = "./assets/img/slider/"
  var img = $('.slide').children().prop('src')
  var i = img.substring(img.length - 5, img.length - 4)
  if (i == nb) i = 0;
  var text = src + (parseInt(i)+1) + '.png'
  $('.slide').fadeOut(200,function(){
    $('.slide').children().attr('src', text)
  })
  .fadeIn(200)
}

setInterval(function(){
  slide(3)
},4000)
