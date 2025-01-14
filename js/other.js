$(document).ready(function() {
    $("#btn_google").click(function() {
        TweenMax.to(window, 2.5, { scrollTo: { y: $('#google').offset().top }, ease: Expo.easeOut, y: -500 });
    });

    $("#btn_apple").click(function() {
        TweenMax.to(window, 2.5, { scrollTo: { y: $('#apple').offset().top }, ease: Expo.easeOut, y: -500 });
    });

    $("#btn_facebook").click(function() {
        TweenMax.to(window, 2.5, { scrollTo: { y: $('#facebook').offset().top }, ease: Expo.easeOut, y: -500 });
    });

    $(".button_up").click(function() {
        TweenMax.to(window, 2.5, { scrollTo: { y: $('.navbar').offset().top }, ease: Expo.easeOut, y: -500 });
    });
});