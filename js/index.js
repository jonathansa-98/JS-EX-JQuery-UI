$(document).ready(function () {
    crearEx1();
    crearEx2();
    crearEx3();
    crearEx4();
    crearEx5();
    //crearEx6();
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
    $(".promo").click(function (event) {
        event.preventDefault();
        calcPromo($(this));
    });
}

function calcPromo(promo) {
    // selecciona el texto del precio
    var preu = promo.closest('div').prev('.preu');
    // viatge
    var viatge = preu.closest('.viatge');
    viatge.addClass("promocio");
    // calc descuento
    var preu_viatge = parseInt(viatge.attr("data-preu"));
    var dte_viatge = parseInt(viatge.attr("data-dte"));
    var preu_final = Math.ceil(preu_viatge - (preu_viatge * (dte_viatge / 100)));
    // poner precio con dte
    preu.after(`<p class="preu_dte">Promoció ${dte_viatge}%: ${preu_final}€ per setmana</p>`);
    // cambiar boton
    var fin_promo = $('<a href="#" class="fin-promo btn btn-info btn-sm"><span class="glyphicon glyphicon-erase"'+
                        'aria-hidden="true"></span> Finalitzar promoció</a>');
    //promo.replaceWith(fin_promo);
    promo.after(fin_promo);
    promo.hide();
}

function crearEx3() {
    $('body').on('click', '.fin-promo', function (event) {
        event.preventDefault();
        revertPromo($(this));
    });
}

function revertPromo(fin_promo) {
    // borrar texto del precio
    var preu_dte = fin_promo.closest('div').prev('.preu_dte');
    preu_dte.remove();
    // quita classe promocio
    var preu = fin_promo.closest('div').prev('.preu');
    var viatge = preu.closest('.viatge');
    viatge.removeClass("promocio");
    // replace btn
    fin_promo.prev(".promo").show();
    fin_promo.remove();
}

function crearEx4() {
    $(".mesinfo").each(function () {
        var desc = $(this).closest('.panel-body').find('.desc');
        desc.slideToggle();
    });
    $('.mesinfo').click(function (event) {
        event.preventDefault();
        toogleInfo($(this));
    });
}

function toogleInfo(mesinfo) {
    var desc = mesinfo.closest('.panel-body').find('.desc');
    if (desc.css("display")=="none") {
        //mesinfo.find("span").addClass('glyphicon-minus').removeClass('glyphicon-plus');
        mesinfo.find("span").switchClass("glyphicon-plus", "glyphicon-minus");
    } else {
        //mesinfo.find("span").addClass('glyphicon-plus').removeClass('glyphicon-minus');
        mesinfo.find("span").switchClass("glyphicon-minus", "glyphicon-plus");
    }
    desc.slideToggle();
}

function crearEx5() {
    $('.eliminar').click(function (event) {
        event.preventDefault();
        eliminarViatge($(this));
    });
}

function eliminarViatge(eliminar) {
    console.log("hi");
    var viatge = eliminar.closest('.viatge');
    viatge.slideUp(500, function () {
        $(this).remove();
    });
}
/*
function crearEx6() {
    $('.reservar').click(function (event) {
        event.preventDefault();
        reservaViatge($(this));
    });
}

function reservaViatge(reserva) {
    console.log("hi");
}*/
