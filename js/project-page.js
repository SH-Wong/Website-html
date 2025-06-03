
/* Add class to side nav when scrolling past div with id*/

$('.sidebar a').on('click', function(event) {
    $(this).parent().find('a').removeClass('active');
    $(this).addClass('active');
});


$(window).on("scroll", function() {
    $(".target").each(function() {
        if($(window).scrollTop() >= $(this).offset().top - 250) {
            var id = $(this).attr("id");
            $(".sidebar a").removeClass("active");
            $('.sidebar a[href="#'+ id +'"]').addClass('active');
        }
    });
});