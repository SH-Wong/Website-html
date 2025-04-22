$(document).ready(function(){
    
    /* fading in login form 
    $('#displayLoginForm').hide();
    $('.buttonGreenLarge').click(function(){
        $('.displayAreaText').hide();
        $('#displayLoginForm').fadeIn();
        $('#username').focus();
    });
    */
    /*hit scroll toggle*/
    $('#displayAreaLearnMore > p').hide();
    $('#learnMoreHitArea').mouseover(function(){
        $('#learnMoreHitArea').hide();
        $('#displayAreaLearnMore > p').fadeIn('slow');
    });
    $('#displayAreaLearnMore > p').mouseleave(function(){
        $('#displayAreaLearnMore > p').hide();
        $('#learnMoreHitArea').fadeIn('slow');
    });
    
    /* Scroll animation*/
    $('#displayAreaLearnMore > p').click(function() {
        $('html,body').animate({
            scrollTop: $("#newsroll").offset().top
        });
    });
    
    /* features toggle */
    $('#ebooks').hide();
    $('#ebooksButton').click(function(){
        $('#activities').hide();
        $('#ebooks').fadeIn('slow');
        $('#activitesButton').addClass("inactiveButton");
        $('#ebooksButton').removeClass("inactiveButton");
    });
    $('#activitesButton').click(function(){
        $('#activities').fadeIn('slow');
        $('#ebooks').hide();
        $('#activitesButton').removeClass("inactiveButton");
        $('#ebooksButton').addClass("inactiveButton");
    });
    
    //trianglify pattern
    var trianglify = function(a, b, c, d){
        var t = new Trianglify({
            cellsize: 500, 
            bleed: 150, 
            cellpadding: 50, 
            noiseIntensity: 0, 
            x_gradient: [a, b, c],
            y_gradient: [a, b, c],
            fillOpacity: 1,
            strokeOpacity: 1});
        var pattern = t.generate(document.body.clientWidth, document.body.clientHeight);
        var area = document.getElementsByClassName(d);
        i = area.length;
        while (i--) {
            area[i].setAttribute('style', 'background-image: '+pattern.dataUrl);
        };
    };
    trianglify("#EBEBEB", "#E6E6E6", "#EEEEEE", "tri_light");
    trianglify("#454F54", "#414B4F", "#4A555A", "tri_dark");
    
    /* Fade in images*/
    $('.fadeIn').css('opacity','0');
    $(window).scroll(function(){
        $('.fadeIn').each(function(){
            var excuted = false;
            var bottomPos = $(this).position().top + $(this).outerHeight() / 2;
            var winBottomPos = $(window).scrollTop() + $(window).height();
            if( winBottomPos > bottomPos){
                $(this).animate({'opacity':'1'}, 1000);
            };
        });
        /* Staggered fadeIn*/
        $('.fadeContainer').each(function(){
            var bottomPos = $(this).position().top + $(this).outerHeight() / 2;
            var winBottomPos = $(window).scrollTop() + $(window).height();
            if( winBottomPos > bottomPos){
                $(this).children('.fade1').animate({'opacity':'1'}, 1000);
                $(this).children('.fade2').delay(800).animate({'opacity':'1'}, 1000);
                $(this).children('.fade3').delay(1600).animate({'opacity':'1'}, 1000);
            };
        });
    });/* fade in images end */
});