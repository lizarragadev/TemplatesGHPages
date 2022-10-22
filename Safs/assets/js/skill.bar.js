(function ($) {
    "use strict";

    /*==========================
        About Area
    ============================*/

    var offsetTop = $('#skills').offset().top;
    $(window).on('scroll', function () {
        var height = $(window).height();
        if ($(window).scrollTop() + height > offsetTop) {
            jQuery('.skillbar').each(function () {
                jQuery(this).find('.skillbar-bar').animate({
                    width: jQuery(this).attr('data-percent')
                }, 1000);
            });
        }
    });

}(jQuery));
