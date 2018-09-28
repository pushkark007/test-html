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

    /*==========================================================
            particles dot on background
  ======================================================================*/
    $(window).on("load", function() {
        $("#section_2").length && particlesJS("section_2", {
            particles: {
                number: {
                    value: 28
                },
                color: {
                    value: ["#0182cc", "#00befa", "#0182cc"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 1,
                    random: !1,
                    anim: {
                        enable: !1
                    }
                },
                size: {
                    value: 3,
                    random: !0,
                    anim: {
                        enable: !1
                    }
                },
                line_linked: {
                    enable: !1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "none",
                    random: !0,
                    straight: !1,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !1
                    },
                    onclick: {
                        enable: !1
                    },
                    resize: !0
                }
            },
            retina_detect: !0
        })
    });
    $(window).on("load", function() {
        $("#particles-js-fund").length && particlesJS("particles-js-fund", {
            particles: {
                number: {
                    value: 28
                },
                color: {
                    value: ["#0182cc", "#00befa", "#0182cc"]
                },
                shape: {
                    type: "circle"
                },
                opacity: {
                    value: 1,
                    random: !1,
                    anim: {
                        enable: !1
                    }
                },
                size: {
                    value: 3,
                    random: !0,
                    anim: {
                        enable: !1
                    }
                },
                line_linked: {
                    enable: !1
                },
                move: {
                    enable: !0,
                    speed: 2,
                    direction: "none",
                    random: !0,
                    straight: !1,
                    out_mode: "out"
                }
            },
            interactivity: {
                detect_on: "canvas",
                events: {
                    onhover: {
                        enable: !1
                    },
                    onclick: {
                        enable: !1
                    },
                    resize: !0
                }
            },
            retina_detect: !0
        })
    });

    /* ======================================================================
                          Chart 
    ======================================================================*/

    if ($('#myChart').length > 0) {
        var ctx = document.getElementById("myChart").getContext('2d');

        var myChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ["Biz Expansion", "Biz Operations", "R&D", "Tech Development", "Legal/Advisory", "Marketing"],
                datasets: [{
                    data: [17, 7, 1, 5, 37, 33],
                    backgroundColor: [
                        '#f600ff',
                        '#c600ff',
                        '#9c00ff',
                        '#8a00ff',
                        '#0000ff',
                        '#00f6ff'

                    ],
                    borderColor: [
                        '#02014c',
                        '#02014c',
                        '#56a7f9',
                        '#56a7f9'
                    ],
                    borderWidth: 0,
                }]
            },
            options: {
                legend: {
                    display: false,
                }
            }
        });
    }

    //jQuery countdown plugin
    $('#clock').countdown('2018/08/29').on('update.countdown', function(event) {
        var _DateInput = '' +
            '<div><span>%-d</span> Day%!d</div>' +
            '<div><span>%H</span> Hours</div>' +
            '<div><span>%M</span> Minutes</div>' +
            '<div><span>%S</span> Seconds</div>';
        var $this = $(this).html(event.strftime(_DateInput));
    });

    //progress bar
    $(".progress").each(function() {
        $(this).waypoint(function() {
            $('.progress-bar').progressbar({
                transition_delay: 100
            });
        }, {
            triggerOnce: true,
            offset: 'bottom-in-view'
        });
    });


    if ($('.adv').length) {
        $('.adv li').hover(
            function() { $(this).addClass('team__hover') },
            function() { $(this).removeClass('team__hover') }
        )
    }



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
})(jQuery, undefined);