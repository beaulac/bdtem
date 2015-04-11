/**
 * Created by abl on 10/12/14.
 */


var positionTheVolumeBar = function () {
    var volumeToggle = $('#volumeToggle');
    var volumeBar = $('#volumeBar');

    var offset = volumeToggle.position();
    
    var volumeToggle_width= volumeToggle.find(".buttonz-small").width()/2
    // minus left&right paddings
    var paddings = volumeToggle.find(".buttonz-small").innerWidth()- volumeToggle.find(".buttonz-small").width()
    var left = offset.left+volumeToggle_width-paddings;

    var top = -(volumeToggle.height()/1.2);

    volumeBar.css({top: top, left: left});

};

const ROTATE_CLASS = "fa-flip-horizontal";

$(document).ready(function   () {

    positionTheVolumeBar();

    var tracksMenuToggle = $('#tracks-menu-toggle');
    var leftWords = $('#left-menu-words');

    function animateIn (selector) {
        selector.animate(
            {
                'top': '88vh',
                'letter-spacing': '0.01vw',
                'padding-right': 0,
                'width': '3.25vw',
                'line-height': '1.5vh'
            },
            300, 0, 0);
    }

    function animateOut (selector) {
        selector.animate(
            {
                'top': '40vh',
                'letter-spacing': '1.5vw',
                'line-height': "2vh"
            },
            500, 0, 0);
    }

    tracksMenuToggle.sidr({
        name: 'tracks-menu',
        speed: 200,
        side: 'left',
        source: null,
        displace: true,
        onOpen: function () {
            animateIn(tracksMenuToggle);
            tracksMenuToggle.addClass(ROTATE_CLASS);
            leftWords.removeClass('left-menu-words');
            leftWords.css({display: 'none'});
        },
        onClose: function () {
            tracksMenuToggle.removeClass(ROTATE_CLASS);
            animateOut(tracksMenuToggle);
            leftWords.addClass('left-menu-words');
            leftWords.css({display: 'inline' });
        },
        renaming: true,
        body: 'left'
    });

    var storyMenuToggle = $('#story-menu-toggle');
    var rightWords = $('.right-menu-words');


    storyMenuToggle.sidr({
        name: 'story-menu',
        speed: 200,
        side: 'right',
        source: null,
        displace: true,
        onOpen: function () {
            storyMenuToggle.addClass(ROTATE_CLASS);
            animateIn(storyMenuToggle);
            rightWords.removeClass('right-menu-words');
            rightWords.css({display: 'none'});
        },
        onClose: function () {
            storyMenuToggle.removeClass(ROTATE_CLASS);

            animateOut(storyMenuToggle);

            rightWords.addClass('right-menu-words');
            rightWords.css({display: 'inline'});
        },
        renaming: true,
        body: 'right'
    });


    animateOut(storyMenuToggle);
    animateOut(tracksMenuToggle);
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


