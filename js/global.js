$(function() {
    $(".slogan_slider").slick({
        infinite: true,
        dots: true,
        speed: 500,
        fade: true,
        slidesToShow: 1
    });

    $(".works_slider").slick({
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 3
    });

    $(".integration_slider").slick({
        infinite: true,
        dots: false,
        speed: 500,
        slidesToShow: 3
    });

    $("input, textarea").bind("unblur").bind("blur", function(){
        if($(this).val() != ""){
            $(this).parent().find(".float").addClass("floatAbove");
        }else{
            $(this).parent().find(".float").removeClass("floatAbove");
        }
    })
});