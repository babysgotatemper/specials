$( document ).ready(function() {
    $(".scroll__wrapper").onepage_scroll({
        sectionContainer: ".scroll__slide",
        easing: "ease", // Easing options accepts the CSS3 easing animation such "ease", "linear", "ease-in",
        // "ease-out", "ease-in-out", or even cubic bezier value such as "cubic-bezier(0.175, 0.885, 0.420, 1.310)"
        animationTime: 700,
        pagination: false,
        updateURL: false,
        beforeMove: function (index) {},
        afterMove: function (index) {},
        loop: false,
        keyboard: true,
        responsiveFallback: false,
        direction: "vertical"
    });
});
