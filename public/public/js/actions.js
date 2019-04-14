$(function () {
    var element = $("#container");
    var top = 100;
    if (element.attr('data-type') == 'service') {
        top = 160;
    }
    $("html").scrollTop($("html").scrollTop() - 100);

    scrollP(); 
    function scrollP () {
        if ($(this).scrollTop() >= 400) {
            $("header").addClass("hide");
        } else {
            $("header").removeClass("hide");
        }
        if ($(this).scrollTop() >= element.offset().top - top) {
            $("header").addClass("hf");
        } else {
            $("header").removeClass("hf");
        }
    }

    $(window).scroll(function() {
        scrollP();
    });
    
    $('a[href*="#"], #title').on('click', function (e) {
        var link = $(this).attr('href');
        link.replace(" ","");
        if (link[0] == "/") {
            window.location=link;
        } else {
            e.preventDefault();
            scl(link);
        }
    });

    $("#title").on('click', function () {
        scl("#space");
    });

    function scl (element) {
        $('html, body').animate({
            scrollTop: $(element).offset().top - 100
        }, 500, 'linear');
    }

    $("#bMenu, #cont-menu--services a[href*='#']").on('click', function () {
        var status = $("#cont-menu--services").css("display");
        if ($(window).scrollTop() < element.offset().top - top && status != "block") {
            $('header').attr('incover','true');
        } else {$('header').attr('incover','false');}
        if (
            status == "block"
        ) {
            $('body').removeClass('scroll');
            $("#space").removeClass("blur");
            $("#bMenu").removeClass("active");
            $("#cont-menu--services").removeClass("active");
        } else {
            $('body').addClass('scroll');
            $("#space").addClass("blur");
            $("#bMenu").addClass("active");
            $("#cont-menu--services").addClass("active");
        }
    });

});