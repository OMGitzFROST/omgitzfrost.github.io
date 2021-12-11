(function ($) {

    const $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $banner = $('#banner');

    // Breakpoints.
    breakpoints({
        xlarge: '(max-width: 1680px)',
        large: '(max-width: 1280px)',
        medium: '(max-width: 980px)',
        small: '(max-width: 736px)',
        xsmall: '(max-width: 480px)'
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Header.
    if ($banner.length > 0
        && $header.hasClass('alt')) {

        $window.on('resize', function () {
            $window.trigger('scroll');
        });

        $banner.scrollex({
            bottom: $header.outerHeight(),
            terminate: function () {
                $header.removeClass('alt');
            },
            enter: function () {
                $header.addClass('alt');
            },
            leave: function () {
                $header.removeClass('alt');
            }
        });

    }

    // Menu.
    const $menu = $('#menu');

    $menu._locked = false;

    $menu._lock = function () {

        if ($menu._locked)
            return false;

        $menu._locked = true;

        window.setTimeout(function () {
            $menu._locked = false;
        }, 350);

        return true;

    };

    $menu._show = function () {

        if ($menu._lock())
            $body.addClass('is-menu-visible');

    };

    $menu._hide = function () {

        if ($menu._lock())
            $body.removeClass('is-menu-visible');

    };

    $menu._toggle = function () {

        if ($menu._lock())
            $body.toggleClass('is-menu-visible');

    };

    $menu
        .appendTo($body)
        .on('click', function (event) {

            event.stopPropagation();

            // Hide.
            $menu._hide();

        })
        .find('.inner')
        .on('click', '.close', function (event) {

            event.preventDefault();
            event.stopPropagation();
            event.stopImmediatePropagation();

            // Hide.
            $menu._hide();

        })
        .on('click', function (event) {
            event.stopPropagation();
        })
        .on('click', 'a', function (event) {

            const href = $(this).attr('href');

            event.preventDefault();
            event.stopPropagation();

            // Hide.
            $menu._hide();

            // Redirect.
            window.setTimeout(function () {
                window.location.href = href;
            }, 350);

        });

    $body
        .on('click', 'a[href="#menu"]', function (event) {

            event.stopPropagation();
            event.preventDefault();

            // Toggle.
            $menu._toggle();

        })
        .on('keydown', function (event) {

            // Hide on escape.
            if (event.keyCode === 27)
                $menu._hide();

        });
})(jQuery);

function copyDiscordID() {
    navigator.clipboard.writeText("OMGitzFROST#8911").then(r => r.toString());
    const tooltip = document.getElementById("discordToolTip");

    setTimeout(function () {
        tooltip.innerHTML = "Opening Discord...";
    }, 1000);

    setTimeout(function () {
        window.open("https://discord.com/channels/@me");
        tooltip.innerHTML = "Copy username";
        alert("We copied our username, paste it into Discord");
    }, 3000);
}

window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName('form')) {
        form.reset();
    }
}

$(document).ready(function () {
    /* Check width on page load*/
    if ($(window).width() < 600) {
        $('.button').addClass('fit');
        $('.featured').addClass('fit');
    } else {
        $('.button').removeClass('fit');
        $('.featured').removeClass('fit');
    }
});

$(window).resize(function () {
    /*If browser resized, check width again */
    if ($(window).width() < 600) {
        $('.button').addClass('fit');
        $('.featured').addClass('fit');
    } else {
        $('.button').removeClass('fit');
        $('.featured').removeClass('fit');
    }
});