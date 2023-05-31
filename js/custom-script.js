// JavaScript Document

 // Smooth Anchor Scrolling
  $('a').click(function(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 300);
    return false;
  });  
  
	$(window).scroll(function(){
    if ($(this).scrollTop() > 50) {
       $('.vv').addClass('vv2 shadow-sm');
    } else {
       $('.vv').removeClass('vv2 shadow-sm');
    }
});

$('.navbar-collapse a').click(function(){
            $(".navbar-collapse").collapse('hide');
        });
		
 $(".testimonials").owlCarousel({
    items: 1,
    margin:0,
    nav: true,
    navText: ["<i class='lni lni-arrow-left'></i>", "<i class='lni lni-arrow-right'></i>"]
});