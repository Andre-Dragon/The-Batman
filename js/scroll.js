$(document).ready(function(){
    $(".more-scroll").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
        top = $(id).offset().top;
        $('body,html').animate({scrollTop: top-60}, 1200);

    });

});