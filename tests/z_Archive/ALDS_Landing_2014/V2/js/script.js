$(document).ready(function(){
    
	/* Responsive mobile dropdown toggle */
	$('#nav_dropdown').click(function(){
		$('#nav_dropdown > ul').toggle();
	});
	
    /* fading in login form */
    $('#displayLoginForm').hide();
    $('.buttonGreenLarge').click(function(){
        $('.displayAreaText').hide();
        $('#displayLoginForm').fadeIn();
        $('#username').focus();
    });
    
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
    
    /* Scroll button*/
    $('#displayAreaLearnMore > p').click(function() {
        $('html,body').animate({
            scrollTop: $("#newsroll").offset().top
        });
    });

    /* features toggle */
    $('#activities').hide();
    $('#activitesButton').click(function(){
        $('#ebooks').hide();
        $('#activities').fadeIn('slow');
        $('#ebooksButton').addClass("inactiveButton");
        $('#activitesButton').removeClass("inactiveButton");
    });
    $('#ebooksButton').click(function(){
        $('#ebooks').fadeIn('slow');
        $('#activities').hide();
        $('#ebooksButton').removeClass("inactiveButton");
        $('#activitesButton').addClass("inactiveButton");
    });
    
	//trianglify pattern
    var trianglify = function(a, b, c, d){
        var t = new Trianglify({
            cellsize: 600, 
            bleed: 150, 
            cellpadding: 15, 
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
    trianglify("#E9E9E9", "#DDDDDD", "#EEEEEE", "tri_light");
    trianglify("#454F54", "#414B4F", "#4A555A", "tri_dark");
    
    /* Fade in images*/
    $(window).scroll(function(){
        $('.fadeIn').each(function(){
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
    });
    
})