$(function () {

    $("html").scrollTop($("html").scrollTop() - 100);

    scrollP(); 
    function scrollP () {
        if ($(this).scrollTop() >= 400) {
            $("header").addClass("hide");
        } else {
            $("header").removeClass("hide");
        }
        if ($(this).scrollTop() >= $("#seeMore").offset().top - 100) {
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

    $("#bMenu, a[href*='#']").on('click', function () {
        var status = $("#cont-menu--services").css("display"),
            bgc = $("#cont-menu--services a").css("background-color");
        if (
            status == "block" &&
            bgc != "rgba(0, 0, 0, 0)"
        ) {
            $("#space").removeClass("blur");
            $("#bMenu").removeClass("active");
            $("#cont-menu--services").removeClass("active");
        } else {
            $("#space").addClass("blur");
            $("#bMenu").addClass("active");
            $("#cont-menu--services").addClass("active");
        }
    });

});