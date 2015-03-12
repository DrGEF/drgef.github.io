var openMenu = function() {
    $('.menu-2').css({
        right: '0px'
    });
}
var closeMenu = function(){
	$('.menu-2').css('right', '-270px');
}
var main = function() {
	openMenu();
	setTimeout(function(){
		closeMenu();
	}, 1000);
	// плавная прокрутка begin
	$(function() {
	  $('a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 300);
	        return false;
	      }
	    }
	  });
	});
	// плавная прокрутка end
	//scroll init
	window.sr = new scrollReveal();
}

$(document).ready(main);