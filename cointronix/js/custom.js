(function($) {
    "use strict";


    /* ------------- START PRELOADER ------------- */
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow', function() { $(this).remove(); });
    });
    /* ------------- END PRELOADER ------------- */

    /* ------------- START NAVBAR STICKEY------------- */
    var $navbar = $(".navbar"),
        y_pos = $navbar.offset().top,
        height = $navbar.height();


    $(document).scroll(function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 0) {
            $navbar.addClass("sticky");
        } else {
            $navbar.removeClass("sticky");
        }
    });
    /* ------------- END NAVBAR STICKEY------------- */
    $(".navbar-avtar").click(function() {
        $("#mySidenav").toggleClass('sidenav_open');
    })
    $(".closebtn").click(function() {
        $("#mySidenav").removeClass('sidenav_open');
    })


    /* ------------- START HUMBERGER MENU AND DROPDOWN MENU ------------- */
    $(".menu").click(function() {
        $("#nav").toggleClass("open");
    });

    $(".drop-down .selected a").click(function() {
        $(".drop-down .options ul").toggleClass("drop");
        $('#nav-icon2').toggleClass('open');
        return false;
    });

    $(".drop-down .options ul li a").click(function() {
        $(".drop-down .options ul").removeClass("drop");
        $('#nav-icon2').removeClass('open');
        return false;
    });
    // CLOSE MENU CLICK ON ANY WHERE IN SCREEN
    $(document).bind('click', function(e) {
        var $clicked = $(e.target);
        if (!$clicked.parents().hasClass("drop-down")) {
            $('#nav-icon2').removeClass('open');
            $(".drop-down .options ul").removeClass("drop");
        }
    });

    /* ------------- END HUMBERGER MENU DROPDOWN MENU ------------- */

    /* ------------- START SEARCH BAR ------------- */
    $('.s-btn').click(function() {
        $(this).parents().toggleClass('active');
        var sval = $('.s-box').val();
        if (sval !== "")
            $('.search-box').addClass('active');
    });
    /* ------------- END SEARCH BAR ------------- */

    /* ------------- START TOP TO ------------- */
    var scrollTop = $(".scrollTop");
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 100) {
            $(scrollTop).css("opacity", "1");
        } else {
            $(scrollTop).css("opacity", "0");
        }
    });
    $(scrollTop).click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 700);
        return false;
    });
    /* ------------- END TOP TO ------------- */

    /* ------------- END SIDEBAR ------------- */
    $('.login-link').click(function() {
        $(".sidenav").toggleClass('sidenav_open');
    });
    $('.closebtn').click(function() {
        $(".sidenav").removeClass('sidenav_open');
    });
    /* ------------- END SIDEBAR ------------- */


    /* ------------- REGISTER HIDE SHOW ------------- */
    $(document).ready(function() {
        //$(".container-inner.lgs").show();
        $('input[type="radio"]').click(function() {
            var inputValue = $(this).attr("value");
            var targetBox = $("." + inputValue);
            $(".container-inner ").not(targetBox).slideUp('slow');
            $(targetBox).slideDown('slow');
        });
        $('.register-link').click(function() {
            $(".container-inner.rgs").slideDown('slow');
            $(".container-inner.lgs").slideUp('slow');
            $('.lgn-radio').attr('checked', false);
            $('.rgs-radio').attr('checked', true).trigger('click');
        });
        $('.lgs-link').click(function() {
            $(".container-inner.lgs").slideDown('slow');
            $(".container-inner.rgs").slideUp('slow');
            $('.rgs-radio').attr('checked', false);
            $('.lgn-radio').attr('checked', true).trigger('click');
        });
        $('.fgp-link').click(function() {
            $(".container-inner.fgp").slideDown('slow');
            $(".container-inner.lgs").slideUp('slow');
            $(".container-inner.rgs").slideUp('slow');
        });

    });
    /* ------------- REGISTER HIDE SHOW ------------- */

    /* ------------- START TELEPHONE CODE AND COUNTRY ------------- */
    if ($('#phone').length) {
        $("#phone").intlTelInput({
            utilsScript: "plugins/teliphoneCode/js/utils.js"
        });
    }
    /* ------------- END TELEPHONE CODE AND COUNTRY ------------- */

})(jQuery, undefined);

/* ------------- START COIN SLIDER ------------- */
jQuery(document).ready(function($) {
    "use strict";
    $.fn.andSelf = function() { return this.addBack.apply(this, arguments); }
    if ($('.coins-slider').length) {
        $('.coins-slider').owlCarousel({
            loop: true,
            center: true,
            items: 3,
            margin: 30,
            autoplay: true,
            dots: true,
            nav: false,
            autoplayTimeout: 8500,
            smartSpeed: 450,

            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1170: {
                    items: 3
                }
            }
        });
    }


    //open popup
    $('.cd-popup-trigger').on('click', function(event) {
        event.preventDefault();
        $('.cd-popup').addClass('is-visible');
    });

    //close popup
    $('.cd-popup').on('click', function(event) {
        if ($(event.target).is('.cd-popup-close') || $(event.target).is('.cd-popup')) {
            event.preventDefault();
            $(this).removeClass('is-visible');
        }
    });
    //close popup when clicking the esc keyboard button
    $(document).keyup(function(event) {
        if (event.which == '27') {
            $('.cd-popup').removeClass('is-visible');
        }
    });



});
/* ------------- END COIN SLIDER ------------- */

/* ------------- START INPUT CONTROL ------------- */
$(document).ready(function() {
    $('.login-form').login_form();
    if ($('.select-country').length) {
        $(".select-country").select2({
            templateResult: formatState
        });
    }
    if ($('.myselect').length) {
        $(".myselect").select2();
    }
    if ($('input[name="dob"]').length) {
        $('input[name="dob"]').daterangepicker({
            singleDatePicker: true,
        });
    }
    if ($('input[name="pdob"]').length) {
        $('input[name="pdob"]').daterangepicker({
            singleDatePicker: true,
        });
    }
    if ($('#file-upload').length) {
        $('#file-upload').change(function() {
            var i = $(this).prev('label').clone();
            var file = $('#file-upload')[0].files[0].name;
            $(this).prev('label').text(file);
        });
    }

    if ($('input[name="dates"]').length) {
        $('input[name="dates"]').daterangepicker({
            opens: 'left'
        });
    }
    if ($('.form-switch input[type="checkbox"]').length) {
        $('.form-switch input[type="checkbox"]').click(function() {
            var inputValue = $(this).attr("value");
            $("." + inputValue).toggle();
        });
    }

    function formatState(state) {
        if (!state.id) {
            return state.text;
        }
        var baseUrl = "images/flags";
        var $state = $(
            '<span><img src="' + baseUrl + '/' + state.element.value.toLowerCase() + '.svg" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    if ($('.add-cp').length) {
        $('.add-cp').click(function() {
            var copyText = document.getElementById("cpadd");
            copyText.select();
            document.execCommand("copy");

            var tooltip = document.getElementById("myTooltip");
            tooltip.innerHTML = "Copied";
            tooltip.classList.add("ad")
        });
    }

});

(function($) {
    $.fn.login_form = function() {
        var self, formField, formInput;

        self = $(this);
        formField = self.find('.form-field');
        formInput = self.find('.field-input');

        formInput.on('focus', function() {
            $(this).parent().addClass('focused has-label');
        });
        formInput.on('blur', function() {
            if ($(this).val() == '') {
                $(this).parent().removeClass('has-label');
            }
            $(this).parent().removeClass('focused');
        });
        formInput.each(function() {
            self = $(this);
            if (self.val().length > 0) {
                self.parent().addClass('has-label');
            }
        });
    };
}(jQuery));
/* ------------- END INPUT CONTROL ------------- */