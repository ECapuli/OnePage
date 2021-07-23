$(document).ready(function() {
    $("nav").mouseover(function() {
        $(".nav-itens").addClass("nav-show");
    });
    $("nav").mouseout(function(){
        $(".nav-itens").removeClass("nav-show");
    });



    $(document).scroll(function(){
        var topWindow = $(window).scrollTop();
        if (topWindow >60){
            $("header").addClass('header_fixed');
        }else {
            $("header").removeClass('header_fixed');

        };
    });
});