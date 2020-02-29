$(document).ready(function() {
    $(".load-animation").fadeIn(1500);
    $(".load-animation").css('display', 'inline-block');

    setInterval(function() {
        $(".load-animation-arrow").fadeToggle();
    }, 2000);
});

$('.navbar-toggle').on('click', function() {
    $('.icon-bar').toggleClass('.icon-bar-color-toggle');
})