$(document).ready(function() {
    $('body').fadeIn(1000); // Fades in the body content over 1 second

    $('#togglePage').click(function() {
        $('body').fadeOut(1000);
        $('body').fadeIn(1000);
    });
});

