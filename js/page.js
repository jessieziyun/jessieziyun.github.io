let mobile = false;

function isAndroid() {
    return /Android/i.test(navigator.userAgent);
}

function isiOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function isMobile() {
    return isAndroid() || isiOS();
}

checkMobile = () => {
    mobile = isMobile();
    if (window.innerWidth <= 900 && mobile) {
        $('.left a').text('←');
        $('.right a').text('→');
    }
}

checkMobile();

$(document).ready(() => {

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