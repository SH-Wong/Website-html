$(document).ready(function(){

	
	/* Responsive mobile dropdown toggle and hover states. */
	$('#mbl-nav-toggle').click(function(){
		$('#site_nav,#nav-account-menu').toggleClass('show');
		$('#mbl-nav-toggle').toggleClass('open');
	});
	
	$('#mbl-nav-toggle').mouseenter(function(){
		$('#mbl-nav-toggle').addClass('hover');
	});
	
	$('#mbl-nav-toggle').mouseleave(function(){
		$('#mbl-nav-toggle').removeClass('hover');
	});
	
	
    /* Scroll from display to news ticker.*/
    $('#display-scroll-btn').click(function() {
        $('html,body').animate({
            scrollTop: $("#display-ticker").offset().top
        });
    });
    
	
    /* features toggle */
	$('#activitesButton').removeClass("hide");
	$('#ebooksButton').removeClass("hide");
	
    $('#ebooks').hide();
    $('#ebooksButton').click(function(){
        $('#activities').hide();
        $('#ebooks').fadeIn('slow');
        $('#ebooksButton').addClass("btn-toggle-active");
        $('#activitesButton').removeClass("btn-toggle-active");
    });
    $('#activitesButton').click(function(){
        $('#activities').fadeIn('slow');
        $('#ebooks').hide();
        $('#ebooksButton').removeClass("btn-toggle-active");
        $('#activitesButton').addClass("btn-toggle-active");
    });
    

  	//trianglify patterns
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
    trianglify("#EEEEEE", "#EAEAEA", "#F5F5F5", "tri-light");
    trianglify("#454F54", "#414B4F", "#4A555A", "tri-dark");
	trianglify("#64CBE0", "#72D2E5", "#7FD6E8", "tri-AT");
	trianglify("#a0c54e", "#a5cc51", "#aad154", "tri-AL");
	trianglify("#ef5540", "#f95744", "#fb5f4d", "tri-AB");
	
	
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
	
	

	
	//Support accordion
	if (matchMedia) {
        var mq = window.matchMedia("(max-width: 768px)");
        mq.addListener(WidthChange);
        WidthChange(mq);
    }
    
	function WidthChange(mq) {
    	if (mq.matches) {
			$("#support-help").addClass("accordion");
			$(".accordion ul").slideUp();
			$(".accordion h3").addClass("expandable").on("click", function(){
				$(this).toggleClass("expanded").next().slideToggle();
			});
		} else {
			$(".accordion ul").slideDown();
			$(".accordion h3").removeClass().off("click");
			$("#support-help").removeClass("accordion");
		}
    }
	
});