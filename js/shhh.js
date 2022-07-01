let access = sessionStorage.getItem('access');

if (access == 1) {
    $("#msg").css("display", "none");
    $("#msgtext").css("color", "#fafafa");
} else if (!access) {
    $("#msg").css("display", "block");
    $("#msgtext").css("color", "#000000");
}

$(document).ready(() => {
    if (mobile == false) showThumbnails();
});

function showThumbnails() {

    // waste age
    $(".waste-age").hoverIntent(() => {
        $(".thumbnail-container.waste-age").css("display", "block");
    }, () => {
        $(".thumbnail-container.waste-age").css("display", "none");
    });

    // anyone
    $(".anyone").hoverIntent(() => {
        $(".thumbnail-container.anyone").css("display", "block");
    }, () => {
        $(".thumbnail-container.anyone").css("display", "none");
    });

    // spin unreleased
    $(".spin-unreleased").hoverIntent(() => {
        $(".thumbnail-container.spin-unreleased").css("display", "block");
    }, () => {
        $(".thumbnail-container.spin-unreleased").css("display", "none");
    });

    // salt & stone
    $(".saltandstone").hoverIntent(() => {
        $(".thumbnail-container.saltandstone").css("display", "block");
    }, () => {
        $(".thumbnail-container.saltandstone").css("display", "none");
    });

}