/**
 * Created by Bourgoin on 17/05/2016.
 */

$(document).ready(function() {

    $("#brand-carousel").owlCarousel({

        autoPlay: 6000, //Set AutoPlay to 6 seconds
        pagination:false,

        items : 6,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [979,3]

    });

});


$(window).on('scroll', function (e) {
    let scrollPos = $(window).scrollTop();
    let navbar = $('nav.nav');
    let limitElem = $('.recherche');
    let limit = limitElem.offset().top + limitElem.outerHeight();
    let position = Math.round($(window).scrollTop());
    if(position < limit - 65)
    {
        $('.testeuh').css({
            'position': 'relative',
            'left': 0,
            'top': (scrollPos * 0.55) + "px",
            "opacity": 1 - (scrollPos * 0.0025)
        });
    }
});

$('.categories ul li').on('hover', function(){
    var $li = $('.categories ul li');
    $li.css({
        'border-top' : "solid 1px #FF6600",
        'border-bottom' : "solid 1px #FF6600"
});

});

   $(document).ready(function() {
       $('.moto').hide();
       $('.desc').hide();

       $('.categ-moto').on('click', function(){
            var moto = $('.moto');
           var voiture = $('.voiture');
            if($(voiture).is(":visible")){
                $(voiture).hide();
                $(moto).show();
                $('.recherche h1').text('Trouvez toutes vos pièces moto/scooter !')
            }
       });
       $('.categ-car').on('click', function(){
           var moto = $('.moto');
           var voiture = $('.voiture');
           if($(moto).is(":visible")){
               $(moto).hide();
               $(voiture).show();
               $('.recherche h1').text('Toutes les pièces pour voiture en 3 clics !');
           }
       });

       $("[rel='tooltip']").tooltip();

       $('.thumbnail').hover(
           function(){
               $(this).find('.caption').slideDown(250); //.fadeIn(250)
           },
           function(){
               $(this).find('.caption').slideUp(250); //.fadeOut(205)
           }
       );


   });






