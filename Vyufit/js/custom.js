$(document).ready(function () {
    new WOW().init();
}); 

$(document).ready(function () {
    if ($(window).width() > 991)
        var scrollOverflow = true;
    else
        var scrollOverflow = false;

    $('#fullpage').fullpage({        
        anchors: ['home', 'login', 'services'],
        menu: '#menu',
        verticalCentered: true,
        navigation: true,
        navigationPosition: 'right',


        scrollOverflow: scrollOverflow,
        css3: false,
        controlArrows: true,
        keyboardScrolling: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        responsiveWidth: 992,

        /* whatever config you have...*/
        afterRender: function () {
            $('#menu').hide();          
        },
        afterLoad: function (anchor, index) {
            if (index == 1) {
                $('#menu').fadeOut();
                $('#fp-nav').hide();

            } else {
                $('#menu').fadeIn();
                $('#fp-nav').show();
            }
        }

    });

   

    //$('#fullpage').fullpage({
    //    scrollOverflow: scrollOverflow,
    //    css3: false,
    //    controlArrows: true,
    //    keyboardScrolling: true,
    //    scrollingSpeed: 700,
    //    autoScrolling: true,
    //    fitToSection: true,
    //    fitToSectionDelay: 1000,
    //    scrollBar: false,
    //    easing: 'easeInOutCubic',
    //    easingcss3: 'ease',
    //    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    //    menu: '#nav',
    //    navigation: false,
    //    navigationPosition: 'right',
    //    responsiveWidth: 992,
    //});


});

function testAnim(x) {
    $('#myModal .modal-dialog').attr('class', 'modal-dialog  ' + 'pulse ' + '  animated ' + 'sm');
    $('#regModal .modal-dialog').attr('class', 'modal-dialog  ' + 'pulse ' + '  animated ' + 'modal-lg ' + ' lg');

};
$('#myModal').on('show.bs.modal', function (e) {
    showLogin();
    var anim = $('#entrance').val();
    testAnim(anim);
})
$('#myModal').on('hide.bs.modal', function (e) {

    var anim = $('#exit').val();
    testAnim(anim);
})
$('#regModal').on('show.bs.modal', function (e) {
    $('#myModal').modal('hide');
    var anim = $('#entrance').val();
    testAnim(anim);
})
$('#regModal').on('hide.bs.modal', function (e) {
    $('#myModal').modal('hide');
    var anim = $('#exit').val();
    testAnim(anim);
})



$("#elogin").click(function () {
    hideall();
    document.getElementById("Slogin").style.display = "block";
})
$("#forgot").click(function () {
    hideall();
    document.getElementById("Tlogin").style.display = "block";
})

function hideall() {
    document.getElementById("Slogin").style.display = "none";
    document.getElementById("Flogin").style.display = "none";
    document.getElementById("Tlogin").style.display = "none";
}
function showLogin() {
    document.getElementById("Slogin").style.display = "none";
    document.getElementById("Flogin").style.display = "block";
    document.getElementById("Tlogin").style.display = "none";
}


