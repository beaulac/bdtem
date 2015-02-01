/**
 * Created by abl on 10/12/14.
 */

$.fn.stretch_text = function () {
    var element = $(this);

    var container_width = element.parent().width();

    var element_width = element.width();

    var nb_char = element.text().length;

    var spacing = container_width / nb_char;

    if (element_width <= container_width) {
        element.removeClass('justify');

        var char_width = element_width / nb_char,
            ltr_spacing = spacing - char_width + (spacing - char_width) / nb_char;

        element.css({'letter-spacing': ltr_spacing});
    } else {
        element.addClass('justify');
    }
};

function stretchTheText() {
    var $stretched = $('.stretched');

    $stretched.each(function () {
        $(this).stretch_text();
    });
}

var positionTheVolumeBar = function () {
    var volumeToggle = $('#volumeToggle');
    var volumeBar = $('#volumeBar');

    var offset = volumeToggle.offset();

//    console.log('width');
//    console.log(volumeBar.width());
//    console.log('height');

    var height = volumeBar.outerHeight();

//    console.log(height);

    var left = offset.left - (height * 10);
    var top = -(volumeToggle.height() / 2);

//    console.log(left);

    volumeBar.css({top: top, left: left});

//    console.log($('#volumeToggle').offset());
//    console.log($('#volumeBar').css('left'));
//    console.log($('#volumeBar').css('top'));

};

$(document).ready(function () {
    stretchTheText();
    positionTheVolumeBar();

});

$(document).ready(function() {
    $('#simple-menu').sidr({
        name: 'sidr',
        speed: 200,
        side: 'left',
        source: null,
        renaming: true,
        body: 'body'

    });
});

$(document).ready(function() {
    $('.sub-menu-sidr').hide();

    $("#sidr li:has(ul)").click(function(){

        $("ul",this).toggle('fast');
    });
});


$(window).resize(function () {
    positionTheVolumeBar();
});

function AnimateRotate(selector, angle, animationDuration) {
    // caching the object for performance reasons
    var $elem = $(selector);

    // we use a pseudo object for the animation
    // (starts from `0` to `angle`), you can name it as you want
    $({deg: 0}).animate({deg: angle}, {
        duration: animationDuration,
        step: function (now) {
            // in the step-callback (that is fired each step of the animation),
            // you can use the `now` paramter which contains the current
            // animation-position (`0` up to `angle`)
            $elem.css({
                transform: 'rotate(' + now + 'deg)'
            });
        }
    });
}


