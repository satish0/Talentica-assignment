$(".header .nav-item .nav-link").on("click", function () {
    $(".header .nav-item").removeClass("active");
    $(this).parent().addClass("active");
});



$('.header a[href^="#"]').on('click',function (e) {
    // e.preventDefault();
    var window_width = $( window ).width();
    if (window_width > 767) {
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-63
        }, 400, 'swing', function () {
            window.location.hash = target;
        });
        $('.navbar-toggler').click();
    }
    else {
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top-54
        }, 400, 'swing', function () {
            window.location.hash = target;
        });
        $('.navbar-toggler').click();
    }
});