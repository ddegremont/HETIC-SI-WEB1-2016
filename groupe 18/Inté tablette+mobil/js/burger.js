$('.menu-burger, .menu-items').on('click', function() {
    $('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
    $('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
});
$('.menu1-burger, .menu1-items').on('click', function() {
    $('.menu1-bg, .menu1-items, .menu1-burger').toggleClass('fs');
    $('.menu1-burger').text() == "☰" ? $('.menu1-burger').text('✕') : $('.menu1-burger').text('☰');
});
