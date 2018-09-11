$(document).ready(function() {

    console.log("here");
    $('.section_link').click(function (event) {
        event.stopPropagation();
        var idTo = $(this).attr('data-atr');
        var Position = $('[id="' + idTo + '"]').offset().top;
        jQuery('html, body').animate({ scrollTop: Position }, 'slow');
        return false;
    });

    $(".top_link").click(function () {
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false; // prevents the default action of the event being triggered
    });

});
