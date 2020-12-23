let scrolled = 0;

$(document).ready(() => {

    $(main).scroll(() => {
        if ($(main).scrollTop() >= $(main).innerHeight() * 0.94 - 100) {
            scrolled = 1;
            $("#scene").removeClass("fadeIn");
            $("#scene").addClass("fadeOut");
            $('.projects-title').text("WORK ↑");
        } else {
            scrolled = 0;
            $("#scene").removeClass("fadeOut");
            $("#scene").addClass("fadeIn");
            $('.projects-title').text("WORK ↓");
        };
    });
    
    $('.projects-title').click(() => {
        if (scrolled == 0) {
            document.getElementsByClassName('projects-bg')[0].scrollIntoView({
                behavior: "smooth"
            });
        } else if (scrolled == 1) {
            document.getElementsByClassName('gradient-bg')[0].scrollIntoView({
                behavior: "smooth"
            });
        }
    })

    let anchors = document.getElementsByTagName('a');
    for (let idx = 0; idx < anchors.length; idx += 1) {
        if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname) {
            continue;
        }
        anchors[idx].addEventListener('click', event => {
            let fader = document.getElementById('fader'),
                anchor = event.currentTarget;
            let listener = () => {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);
            event.preventDefault();
            fader.classList.add('fade-in');
        });
    }

    window.addEventListener('pageshow', event => {
        if (!event.persisted) {
            return;
        }
        var fader = document.getElementById('fader');
        fader.classList.remove('fade-in');
    });
    
    // utopia
    $(".utopia").hoverIntent(() => {
        $(".thumbnail-container.utopia").css("display", "block");
    }, () => {
        $(".thumbnail-container.utopia").css("display", "none");
    });

    // speech bubbles
    $(".speech-bubbles").hoverIntent(() => {
        $(".thumbnail-container.speech-bubbles").css("display", "block");
    }, () => {
        $(".thumbnail-container.speech-bubbles").css("display", "none");
    });

    // mars
    $(".mars").hoverIntent(() => {
        $(".thumbnail-container.mars").css("display", "block");
    }, () => {
        $(".thumbnail-container.mars").css("display", "none");
    });

    // advertising bot
    $(".advertising-bot").hoverIntent(() => {
        $(".thumbnail-container.advertising-bot").css("display", "block");
    }, () => {
        $(".thumbnail-container.advertising-bot").css("display", "none");
    });

    // sonance
    $(".sonance").hoverIntent(() => {
        $(".thumbnail-container.sonance").css("display", "block");
    }, () => {
        $(".thumbnail-container.sonance").css("display", "none");
    });

    // bbc habitat
    $(".bbc-habitat").hoverIntent(() => {
        $(".thumbnail-container.bbc-habitat").css("display", "block");
    }, () => {
        $(".thumbnail-container.bbc-habitat").css("display", "none");
    });

    // technonatural futures
    $(".technonatural-futures").hoverIntent(() => {
        $(".thumbnail-container.technonatural-futures").css("display", "block");
    }, () => {
        $(".thumbnail-container.technonatural-futures").css("display", "none");
    });

     // what i see
     $(".what-i-see").hoverIntent(() => {
        $(".thumbnail-container.what-i-see").css("display", "block");
    }, () => {
        $(".thumbnail-container.what-i-see").css("display", "none");
    });

});