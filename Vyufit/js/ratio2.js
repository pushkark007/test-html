$(document).ready(function () {
    new WOW().init();
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


