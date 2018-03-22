// add your code here



$( document ).ready(function() {
    $(".regiBtn").on("click",function(e){
        e.preventDefault();
        $(".thankMsg").show();
        $(".overlay").show();
    });

    var closeForm = function (event) {
        event.preventDefault();
        $("thankMsg, .overlay").hide();
//        window.location.hash = '';
    }; 

    $(".overlay, .close" ).on("click touchstart", function (e) {
        //loaderFlag = false;
        $(".thankMsg, .overlay").hide();
    //        window.location.hash = '';
    });


    $('.carousel').carousel({
        interval: false
    }); 

  


});  


  // Page Scroll
  $(document).ready(function ($) {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
			|| location.hostname == this.hostname) {

			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
					scrollTop: target.offset().top - 32
				}, 1000);
				return false;
			}
		}
	});
});

// Fixed Nav
$(document).ready(function ($) {
	$(window).scroll(function(){
		var scrollTop = 96;
		if($(window).scrollTop() >= scrollTop){
			$('nav').css({
				position : 'fixed',
                top : '0',
            });
		}
		if($(window).scrollTop() < scrollTop){
			$('nav').removeAttr('style');	
		}
	})
  
  // Active Nav Link
  $('nav ul li a').click(function(){
         $('nav ul li a').removeClass('active');
         $(this).addClass('active');
    });

    $('.owl-carousel').owlCarousel({
        loop:false,
        nav:false,
        pagination: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

});
    

