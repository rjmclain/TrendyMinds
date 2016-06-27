function navMenuInit() {
    $('#main-nav #menu-btn').on('click', function () {
        $('#main-nav').toggleClass('open');
        /*
        Also considered making sure all expandable items within the menu would close
        upon closing the menu itself, but left out in case of accidental
        menu close so user wouldn't need to restart the process
        */
    });

    $('#main-nav .expandable').on('click', function () {
        if ($(this).hasClass('open')) {
            $('#main-nav .expandable').removeClass('open');
        } else {
            $('#main-nav .expandable').removeClass('open');
            $(this).addClass('open');
        }
    });

    $(window).resize(function () {
        if ($(window).width() < 781) {
            $('#main-nav .expandable').removeClass('open');
            $('#main-nav').removeClass('open');
        }
    })

}


function searchInit() {
    $('#top-nav .search-btn').on('click', function () {
        $('.search-overlay').fadeIn();

    });
    $('.search-overlay .close-btn').on('click', function () {
        $('.search-overlay').fadeOut();
    })
}



$(document).ready(function () {
    navMenuInit();
    searchInit();
})