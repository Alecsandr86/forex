jQuery(document).ready(function($) {
	function validateEmail(form_id) {
        var email = $("#" + form_id + " input[name=email]").val(),
            emailPattern = /^[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(email)) {
            $("#" + form_id + " input[name=email]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " input[name=email]").addClass('error_input');
        return false;
    }

    function validateName(form_id) {
        var name = $("#" + form_id + " input[name=name]").val(),
            patt =  /^[а-яА-Яa-zA-Z\s\.]{3,30}$/;
        if (patt.test(name)) {
            $("#" + form_id + " input[name=name]").removeClass('error_input');
            return true;
        }
        $("#" + form_id + " input[name=name]").addClass('error_input');
        return false;
    }
    function validateForm(form_id) {
        var a = validateEmail(form_id),
            c = validateName(form_id);
        return a && c;
    }

    function ajaxFormRequest(result_id, form_id, url) {
        if (validateForm(form_id)) {
            $.ajax({
                url:    url,
                type:     "POST",
                dataType: "html",
                data: $("#" + form_id).serialize(),
                beforeSend: function () {
                    $("#" + result_id).html("Идет отправка...");
                },
                success: function (response) {
                    $("#" + result_id).html(response);
                    $("#" + form_id).trigger("reset");
                },
                error: function () {
                    $("#" + result_id).html("ERROR");
                }
            });
        } else {return false; }
    }

    $('#feedback_form').submit(function (e) {
        e.preventDefault();
        ajaxFormRequest('sendresult1', 'feedback_form', 'processform.php');
    });
	
	 $('#feedback_form2').submit(function (e) {
        e.preventDefault();
        ajaxFormRequest('sent_result', 'feedback_form2', 'processform.php');
    });
	
	 var sudoSlider = $("#slider").sudoSlider({
      numeric: true,
	  effect: "fadeZoomIn, fadeZoomOut, unzip, unzipDown, unzipLeft, unzipRight, unzipUp",
	  touch: true,
	  prevNext:true,
	  insertAfter: true,
	  continuous: true,
	  prevHtml:'<a href="#" class="prevBtn"></a>',
	  nextHtml:'<a href="#" class="nextBtn"></a>',
	  auto:true,
	  pause: '5000'
   });
   
   $("#reviews").owlCarousel({
        margin: 50,
        autoplay: false,
        smartSpeed: 400,
        loop: true,
        navRewind: true,
        nav: true,
        items: 3,
        dots: false,
        responsiveClass: true,
        navText: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    });
	
	$("#logo_carousel").owlCarousel({
        margin: 0,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 400,
        loop: true,
        navRewind: true,
        nav: true,
        items: 5,
        dots: false,
        responsiveClass: true,
        navText: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            800: {
                items: 4
            },
			1000: {
                items: 5
            }
        }
    });
	
	$("#news_carousel").owlCarousel({
        margin: 34,
        autoplay: false,
        smartSpeed: 400,
        loop: false,
        navRewind: false,
        nav: true,
        items: 3,
        dots: false,
        responsiveClass: true,
        navText: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    });
	
	$('a.button_down').click( function(){
		var scroll_el = $(this).attr('href');
		if ( $(scroll_el).length != 0 ) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 1000);
			return false;
		}
					
	});
   
   $('.controls').appendTo( $('#bg_controls') );
   
   if ($(".tabs").length) {
		$(".tabs").tabslet({
		});
	}
   
	function imgAlign(){
		var highestBox = 0;
		var paddingImg = 0;
		$('.adv_img').each(function(){  
			if($(this).height() > highestBox){  
				highestBox = $(this).height();  
			}
		});    
		$('.adv_img').each(function(){
			paddingImg = highestBox - $(this).height();
			$(this).css('padding-top', paddingImg + 'px');  
		});
	}
	
	function equalHeight(elementToCheck) {
        var highestBox = 0;
		$(elementToCheck).css('height', 'auto');
        $(elementToCheck).each(function () {
            if ($(this).innerHeight() > highestBox) {
                highestBox = $(this).innerHeight();
            }
        });
        $(elementToCheck).height(highestBox);
    }
	equalHeight('.review_text');
	equalHeight('.trader p');
	
	$('#toggle_menu').click(function () {
        $('#toggle_ul').slideToggle('slow', function() {
			if ($(this).is(':visible'))
				$(this).css('display','inline-block');
		});
    });
	
	$('table').wrap('<div class="table_wrap"></div>');
	
	
	
	if ($(window).width()<961){
		$("#crp img").attr("src", "images/crp_mobile.png");
	}
	
	$(window).resize(function(){
		if ($(window).width()<961){
			$("#crp img").attr("src", "images/crp_mobile.png");
		} else {
			$("#crp img").attr("src", "images/crp.png");	
		}
		
		equalHeight('.review_text');
		equalHeight('.trader p');
		
		$('.bg_image').css('min-height', $('.img_info').innerHeight() + 'px');
	})
	
	$(window).load(function () {
		imgAlign();
		$('.bg_image').css('min-height', $('.img_info').innerHeight() + 'px');
	});
	
	
	
});