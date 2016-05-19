/***** CAROUSSEL - FOOTER BRANDS *****/

$(document).ready(function() {
    
    $('#slider .item').each(function(i){
        var $this = $(this),
            width = $this.width(),
            left = width * i,
            color = 0 * i;
        $this.css({ left: left })
        .find('.inset').css({ backgroundColor: 'hsl(' + color + 'none)' });
    });

    $('.trigger').on('click',function() {
        var $this = $(this),
            width = $('.item').width() * 4,
            speed = 500;
        if ( $this.hasClass('prev') ) {
            $('.frame').animate({ scrollLeft: '-=' + 235 },speed);
        } else if ( $this.hasClass('next') ) {
            $('.frame').animate({ scrollLeft: '+=' + 235 },speed);
        }
    });

    /***** MODAL *****/

    $('.toggleModal').on('click', function (event) {
        event.preventDefault();
        $('.is-active').removeClass('hidden');
        $('.modal').toggleClass('is-active');
        $('header').toggleClass('is-blurred');
        $('.content').toggleClass('is-blurred');
        $('.brands').toggleClass('is-blurred');
        $('footer').toggleClass('is-blurred');
    });

    $('.open').on('click',function(e) {
        e.preventDefault();
        $(this).addClass('hidden');
        $('.close').removeClass('hidden');
        $('wrapper').removeClass('hidden');
        $('.close').addClass('slide');
    });

    $('.close').on('click',function(e) {
        e.preventDefault();
        $(this).addClass('hidden');
        $('.open').removeClass('hidden');
        $('.open').removeClass('sliding');
        $('wrapper').addClass('hidden')    
    });

    $("wrapper a").click(function() {
        var s = $(this).attr('href');
        $('html,body').animate({scrollTop: $(s).offset().top}, 200, "swing");
        return false;
    });

    $(window).on('resize', function() {
        var win = $(this);
        if (win.width() > 770 && $('.open').hasClass('hidden')) { 
            $('wrapper').addClass('hidden');
            $('.close').removeClass('hidden') 
        }
        if (win.width() < 770 && $('.open').hasClass('hidden'))
        {
            $('wrapper').removeClass('hidden');
            $('.close').removeClass('hidden');
        }
    });

    /***** NAVIGATION RESPONSIVE MOBILE *****/

    $('.open').on('click',function(e) {
        e.preventDefault();
        $(this).addClass('hidden');
        $('.close').removeClass('hidden');
        $('wrapper').removeClass('hidden');
        $('.close').addClass('slide');
        $('nav').addClass('hidden');
    });

    $('.close').on('click',function(e) {
        e.preventDefault();
        $(this).addClass('hidden');
        $('.open').removeClass('hidden');
        $('.open').removeClass('sliding');
        $('wrapper').addClass('hidden');    
    });

    $("wrapper a").click(function() {
        var s = $(this).attr('href');
        $('html,body').animate({scrollTop: $(s).offset().top}, 200, "swing");
        return false;
    });

    $(window).on('resize', function(){
        var win = $(this);
        if (win.width() > 770 && $('.open').hasClass('hidden')) { 
            $('wrapper').addClass('hidden');
            $('.close').removeClass('hidden');
        }
        if (win.width() < 770 && $('.open').hasClass('hidden'))
        {
            $('wrapper').removeClass('hidden');
            $('.close').removeClass('hidden');
            $('nav').addClass('hidden');
        }
        if (win.width() > 770) { 
            $('nav').removeClass('hidden');
        }
    });

});