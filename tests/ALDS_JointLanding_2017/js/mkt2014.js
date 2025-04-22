$(document).ready(function () {


	/* Responsive mobile dropdown toggle. */
	$('#mbl-nav-toggle').click(function () {
		$('#site_nav,#nav-account-menu').toggleClass('show');
		$('#mbl-nav-toggle').toggleClass('open');
	});


	/* Scroll from display to news ticker. Kept as html anchor smooth scoll breaks display layout*/
	$('#display-scroll-btn').click(function () {
		$('html,body').animate({
			scrollTop: $("#display-ticker").offset().top
		});
	});


	/* Smooth scoll for inpage anchors.*/
	$(function () {
		$('a[href*=#]:not([href=#])').click(function () {
			if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
				var target = $(this.hash);
				target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
				if (target.length) {
					$('html,body').animate({
						scrollTop: target.offset().top
					}, 250);
					return false;
				}
			}
		});
	});

	/* features toggle */
	$('#activitesButton').removeClass("hide");
	$('#ebooksButton').removeClass("hide");

	$('#ebooks').hide();
	$('#ebooksButton').click(function () {
		$('#activities').hide();
		$('#ebooks').fadeIn('slow');
		$('#ebooksButton').addClass("btn-toggle-active");
		$('#activitesButton').removeClass("btn-toggle-active");
	});
	$('#activitesButton').click(function () {
		$('#activities').fadeIn('slow');
		$('#ebooks').hide();
		$('#ebooksButton').removeClass("btn-toggle-active");
		$('#activitesButton').addClass("btn-toggle-active");
	});


	//trianglify patterns
	var trianglify = function (a, b, c, d) {
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
			area[i].setAttribute('style', 'background-image: ' + pattern.dataUrl);
		}
		;
	};
	trianglify("#EEEEEE", "#EAEAEA", "#F5F5F5", "tri-light");
	trianglify("#454F54", "#414B4F", "#4A555A", "tri-dark");
	trianglify("#64CBE0", "#72D2E5", "#7FD6E8", "tri-AT");
	trianglify("#a0c54e", "#a5cc51", "#aad154", "tri-AL");
	trianglify("#ef5540", "#f95744", "#fb5f4d", "tri-AB");


	/* Fade in images*/
	$('.fadeIn').css('opacity', '0');
	$(window).scroll(function () {
		$('.fadeIn').each(function () {
			var excuted = false;
			var bottomPos = $(this).position().top + $(this).outerHeight() / 2;
			var winBottomPos = $(window).scrollTop() + $(window).height();
			if (winBottomPos > bottomPos) {
				$(this).animate({'opacity': '1'}, 1000);
			}
			;
		});
		/* Staggered fadeIn*/
		$('.fadeContainer').each(function () {
			var bottomPos = $(this).position().top + $(this).outerHeight() / 2;
			var winBottomPos = $(window).scrollTop() + $(window).height();
			if (winBottomPos > bottomPos) {
				$(this).children('.fade1').animate({'opacity': '1'}, 1000);
				$(this).children('.fade2').delay(800).animate({'opacity': '1'}, 1000);
				$(this).children('.fade3').delay(1600).animate({'opacity': '1'}, 1000);
			}
			;
		});
	});/* fade in images end */

	/* Responsive blurb block, and images, move image-wrapper position */
	if (matchMedia) {
		var mq = window.matchMedia("(max-width: 768px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	function WidthChange(mq) {
		if (mq.matches) {
			$(".blurb .text-wrap+.image-wrap").each(function () {
				$(this).insertBefore($(this).prev()).addClass("blurb-img-moved");
			});
			$("#mkt-questions-imgs").each(function () {
				$(this).insertBefore($(this).prev()).addClass("blurb-img-moved");
			});
			$("#mkt-progress-tracking .image-wrap").each(function () {
				$(this).insertBefore($(this).prev()).addClass("blurb-img-moved");
			});
		} else {
			$(".blurb-img-moved").each(function () {
				$(this).insertAfter($(this).next()).removeClass("blurb-img-moved");
			});
		}
	}

	/* Mockup show/hide nav login menu*/
    $("#menu_login a").click(function (){
        $(".mkt-nav-loginForm").toggleClass("hide");
        $(".mkt-nav-loginForm-user").focus();
    });
    
    $(".mkt-nav-loginForm button.left").click(function (){
        $(".mkt-nav-loginForm").toggleClass("hide");
    });
});