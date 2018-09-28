var sectionArray = [1, 2, 3, 4, 5, 6];
$.each(sectionArray, function(index, value) {
    $(document).scroll(function() {

        var offsetSection = $('#' + 'section_' + value).offset().top;
        var docScroll = $(document).scrollTop();
        var docScroll1 = docScroll + 71;
        if (docScroll1 >= offsetSection) {
            $('li a.js-scroll-trigger').removeClass('active');
            $('li a.js-scroll-trigger:link').addClass('inactive');
            $('li a.js-scroll-trigger').eq(index).addClass('active');
            $('li a.js-scroll-trigger:link').eq(index).removeClass('inactive');
        }
    });

    $('li a.js-scroll-trigger').eq(index).click(function(e) {
        var offsetClick = $('#' + 'section_' + value).offset().top - 70;
        e.preventDefault();
        $('html, body').animate({
            'scrollTop': offsetClick
        }, 800)
    });


});

$(document).ready(function() {
    $('li a:link').addClass('inactive');
    $('li a').eq(0).addClass('active');
    $('li a:link').eq(0).removeClass('inactive');



});