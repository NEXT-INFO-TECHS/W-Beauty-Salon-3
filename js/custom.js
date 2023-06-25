/*  
* Template Name: Beautyqueen - Spa & Beauty Salon HTML5 Template
* Version: 2.0
* Author: Themetrading
* Email: themetrading@gmail.com
* Developed By: Themetrading
* First Release: 30 October, 2018
* Last Update: 12 July, 2019
* Author URL: www.themetrading.com
*/
/*====================================================================
  //  01.  Layerslider js
  //  02.  Smoothscroll js
  //  03.  Navbar scrolling logo change
  //  04.  Elements Wow Animation
  //  05.  LightBox / Fancybox
  //  06.  Gallery With Filters List
  //  07.  Youtube and Vimeo video popup control
  //  08.  Testimonial
  //  09.  Smoothscroll js
  //  10.  Preloader For Hide loader
  //  11.  Scroll Top
  //  12.  Contact Form Validation
======================================================================*/

(function ($) {
    "use strict";

  var $body = $("body"),
      $window = $(window),
      $contact  = $('#contact-form'),
	  $reservation =  $('#reservation-form');

  $body.scrollspy({
    target: ".navbar-collapse",
    offset: 20

  });

//  01.  Layerslider js
//========================================================================

  $('#slider').layerSlider({
      sliderVersion: '6.0.0',
      type: 'fullsize',
      responsiveUnder: 0,
      layersContainer: 1200,
      maxRatio: 1,
      parallaxScrollReverse: true,
      hideUnder: 0,
      hideOver: 100000,
      skin: 'outline',
      showBarTimer: false,
      thumbnailNavigation: 'disabled',
      allowRestartOnResize: true,
      skinsPath: 'skins/',
      height: 800
    });
  
//  02.  Smoothscroll js
//========================================================================

$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
  
    var hash = this.hash;

    $('html, body').animate({
      scrollTop: $(hash).offset().top 
    }, 1000, function(){
 
      window.location.hash = hash;
    });
  }
});

//  03. Navbar scrolling logo change
//========================================================================

  $window.on("scroll",function () {

    var bodyScroll = $window.scrollTop(),
      navbar = $(".nav-on-top"),
      logo = $(".navbar .navbar-brand> img");

    if(bodyScroll > 100){

      navbar.addClass("fixed-header");
      logo.attr('src', 'images/logo/logo.png');

    }else{

      navbar.removeClass("fixed-header");
      logo.attr('src', 'images/logo/logo.png');
    }
  });


  
//  04. Elements Wow Animation
//========================================================================

    if($('.wow').length){
      var wow = new WOW(
        {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true       // act on asynchronously loaded content (default is true)
        }
      );
      wow.init();
    }

    
//  05. LightBox / Fancybox
//========================================================================

$('[data-fancybox="gallery"]').fancybox({
     animationEffect: "zoom-in-out",
     transitionEffect: "slide",
     transitionEffect: "slide",
});

//  06. Gallery With Filters List
//========================================================================
    if($('.filter-list').length){
       $('.filter-list').mixItUp({});
    }

//  07. Youtube and Vimeo video popup control
//========================================================================

  $(function(){
    $("a.video-icon").YouTubePopUp(); // Disable autoplay
  });



//  08. Testimonial
//========================================================================
 $('.testimonial-item').owlCarousel({
     loop: true,
     autoplay: false,
     autoplayTimeout: 3000,
     margin: 0,
     nav: false,
     dots: true,
     responsive:{

        0:{
          items:1
        },
        600:{
          items:1
        },
        1024:{
          items:1
        },
        1200:{
          items:1
        }
      }
      
     });

		
// 09. Smoothscroll js
//========================================================================

$("a").on('click', function(event) {

    if (this.hash !== "") {
      event.preventDefault();
	  
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top 
      }, 1000, function(){
   
        window.location.hash = hash;
      });
    }
  });
    

// 10. Preloader For Hide loader
//========================================================================

function handlePreloader() {
  if($('.preloader').length){
    $('.preloader').delay(500).fadeOut(500);
    $('body').removeClass('page-load');
  }
}
$window.on('load', function() {
  handlePreloader();
});

// 11.  Scroll Top
//========================================================================

  $(window).scroll(function(){ 
    if ($(this).scrollTop() > 500) { 
      $('#scroll').fadeIn(); 
    } else { 
      $('#scroll').fadeOut(); 
    } 
  }); 
  $('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 1000); 
    return false; 
  });


    $('#datetimepicker4').datetimepicker({
        format: 'L'
    });
    $('#datetimepicker3').datetimepicker({
        format: 'LT'
    });
//  12. Contact Form Validation
//========================================================================
if($contact.length){
    $contact.validate({  //#contact-form contact form id
      rules: {
        name: {
          required: true    // Field name here
        },
        email: {
          required: true, // Field name here
          email: true
        },
        subject: {
          required: true
        },
        message: {
          required: true
        }
      },
      
      messages: {
                name: "Please enter your First Name", //Write here your error message that you want to show in contact form
                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
                subject: "Please enter your Subject", //Write here your error message that you want to show in contact form
        message: "Please write your Message" //Write here your error message that you want to show in contact form
            },

            submitHandler: function (form) {
                $('#send').attr({'disabled' : 'true', 'value' : 'Sending...' });
                $.ajax({
                    type: "POST",
                    url: "email.php",
                    data: $(form).serialize(),
                    success: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 5000);
                        form.reset();
                    },
                    error: function() {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 5000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

    });
  };
  
  
  //  12. Contact Form Validation
//========================================================================
if($reservation.length){
    $reservation.validate({  //#contact-form contact form id
      rules: {
	   date: {
          required: true    // Field date here
        },
        time: {
          required: true // Field name here
        },
		guest: {
			required: true
		},
		treatment: {
			required: true
		},
        name: {
          required: true    // Field name here
        },
        email: {
          required: true, // Field name here
          email: true
        },
        phone: {
          required: true
        },
        address: {
          required: true
        }
      },
      
      messages: {
				date: "Please enter your Booking Date",
				time: "Please enter your Booking Time",
				guest: "Please Select Guest Number",
				treatment: "Please Select your Treatment",
                name: "Please enter your First Name", //Write here your error message that you want to show in contact form
                email: "Please enter valid Email", //Write here your error message that you want to show in contact form
				phone: "Please enter your phone", //Write here your error message that you want to show in contact form
                address: "Please enter your Address" //Write here your error message that you want to show in contact form
				
            },

            submitHandler: function (form) {
                $('#send').attr({'disabled' : 'true', 'value' : 'Sending...' });
                $.ajax({
                    type: "POST",
                    url: "reservation.php",
                    data: $(form).serialize(),
                    success: function () {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#success").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#success").slideUp( "slow" );
                        }, 5000);
                        form.reset();
                    },
                    error: function() {
                        $('#send').removeAttr('disabled').attr('value', 'Send');
                        $( "#error").slideDown( "slow" );
                        setTimeout(function() {
                        $( "#error").slideUp( "slow" );
                        }, 5000);
                    }
                });
                return false; // required to block normal submit since you used ajax
            }

    });
  }


})(jQuery);

