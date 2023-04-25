$(document).ready(function () {
    menuAnimate();
    imgAnimate();
    showMessageWsp();
});

function menuAnimate() { //redirecciona al contenido mediante en menú
    $('a[href^="#"]').click(function () {
        let destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 600);
        return false;
    });
}

function imgAnimate() { //maximiza la imagen al pasar el mouse encima
    $('.hover').hover(function (event) {
        id = event.target.id
        $('#' + id).animate({ padding: '0px' }, 100);
    }, function () {
        $('#' + id).animate({ padding: '20px' }, 200);
    });
}

function showMessageWsp(){
    $('.wsp-message').hide();
    $('.btn-flotante').hover(function(){
        $('.wsp-message').toggle(200);
    });
}


//***/ animaciones al hacer scroll ***//

$(window).scroll(function (event) {
    let scroll = $(document).scrollTop();
    let idElement = event.target.id;

    fixedMenu(scroll);
    showPhotoMaster(scroll);
    slideMessage(scroll);
});

function fixedMenu(scroll) { //menu fijo

    let nav = $('.navbar');
    if (scroll > 13) {
        nav.addClass('fixed');
    } else {
        nav.removeClass("fixed");
    }

    hideMenu();
}

function hideMenu() { //oculta el menu que se desspliega en resoluciones pequeñas
    let width = $(window).width();
    let hide = $('.hide');
    if (width <= 973) {
        hide.attr('data-bs-toggle', 'collapse');
        hide.attr('data-bs-target', '#menuNavegacion');
        $('.lang').css({
            margin : '0'
        })
    }
}

function showPhotoMaster(scroll) { //animaciones en las fotos de "about"
    if (scroll > 100) {
        $('.img-master').show(1000);
    } else {
        $('.img-master').hide();
    }
}

function slideMessage(scroll) { //muestrq el mensaje de relleno
    let startSlide = positionElement("class", "ultimo");
    if (scroll > startSlide) {
        $('.message').fadeIn('slow')
    } else {
        $('.message').fadeOut();
    }
}

function positionElement(type, Element) {
    let position;
    if (type == "class") {
        position = parseInt($('.' + Element).offset().top);
    } else {
        position = parseInt($('#' + Element).offset().top);
    }
    return position;
}
