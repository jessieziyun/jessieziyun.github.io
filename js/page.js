let mobile;
let scaleForMobile = false;

function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isMobile() {
    return isAndroid() || isiOS();
}

$(document).ready(() => {

    mobile = isMobile();

    if (window.innerWidth <= 900 && mobile) {
        scaleForMobile = true;
    }

    if (scaleForMobile) {
        console.log("mobile site")
        $('h2, h1').css("font-size", "24px");
        $('p').css("font-size", "14px");
        $('.flex').css('flex-direction', 'column').removeClass('padded').children().css({
            'width': '100%',
            'margin-bottom': '20px'
        });
        $('.blank').css("display", "none");
        $('.info').css({
            'margin-top': '20px',
            'margin-bottom': '20px'
        });
        $('.project-basic, .project-about').css({
            'width': '100%',
            'min-width': '300px'
        });
        $('.project-basic p').css({
            'line-height': '2em',
            'text-align': 'right'
        });
        $('.project-about').css({
            'margin-top': '1.5em',
            'margin-bottom': '1.5em'
        });
        $('project-text-container').css("padding", "0px 10px");
        $('.project-type').parent().css("display", "none");
        $('.project-name').css('margin-left', '20px').parent().css({
            'min-width': '250px',
            'padding-left': '1em',
            'text-indent': '-1em'
        });
        $('.go').parent().css("min-width", "20px");
        $('.flex.footer').css({'margin-top': '20px', 'flex-wrap' : 'wrap'}).children().css("width", "50%");
        $('.left a').text('←');
        $('.right a').text('→');
    
    }

    let anchors = document.getElementsByTagName('a');
    for (let idx = 0; idx < anchors.length; idx += 1) {
        if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname) {
            continue;
        }
        if (anchors[idx].id == 'blank') continue;

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
});