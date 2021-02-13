$(document).ready(function () {
    $('#mycarousel').carousel({ interval: 2000 });

    // Carousel pause/resume buttons
    $('#carouselButton').click(function () {
        if ($('#carouselButton').children('span').hasClass('fa-pause')) {
            $('#mycarousel').carousel('pause');
            $('#carouselButton').children('span').removeClass('fa-pause')
            $('#carouselButton').children('span').addClass('fa-play')
        } else {
            $('#mycarousel').carousel('cycle');
            $('#carouselButton').children('span').removeClass('fa-play')
            $('#carouselButton').children('span').addClass('fa-pause')
        }
    });

    // Open reservation modal
    $('#reservationButton').click(function () {
        $('#reservationModal').modal('show')
    });

    // Open login modal
    $('#loginLink').click(function () {
        $('#loginModal').modal('show')
    });
});