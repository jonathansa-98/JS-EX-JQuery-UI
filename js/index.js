$(document).ready(function () {
    crearEx1();
    crearEx2();
});

function crearEx1() {
    $(".viatge")
    .mouseenter(function () {
        $(this).css("border", "1px solid #4775f5a6");
        $(this).css('box-shadow', '5px 5px 25px #4775f5a6');
    })
    .mouseleave(function () {
        $(this).css("border", "");
        $(this).css('box-shadow', '');
    });
}

function crearEx2() {
    $(".promo").click(calcPromo);
}

function calcPromo() {
    console.log("hi");
}