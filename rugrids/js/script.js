var main = function(){

	//slider
	$('#main').bxSlider({
  	  Pager: false,
	  mode: 'fade',
	  infiniteLoop: true,
	  pageSelector: '#main',
	  nextSelector: '#main-slider-next',
  	  prevSelector: '#main-slider-prev',
  	  prevText: '<',
  	  nextText: '>',
  	  autoHover: true
	});
	$('#comment').bxSlider({
  	  Pager: false,
	  mode: 'fade',
	  infiniteLoop: true,
	  nextSelector: '#comment-slider-next',
  	  prevSelector: '#comment-slider-prev',
  	  prevText: '<',
  	  nextText: '>',
  	  autoHover: true
	});

	$('#news').bxSlider({
  	  Pager: false,
	  infiniteLoop: true,
	  nextSelector: '#news-slider-next',
  	  prevSelector: '#news-slider-prev',
  	  prevText: '<',
  	  nextText: '>',
  	  autoHover: true
	});
		// helpers automate
	var speed = 4000;

	var reactive = function(){
		 $('.helpers-menu-line .active').removeClass('active');
	}
	var reactive2 = function(){
		 $('.helpers-menu-line-adapt .active').removeClass('active');
	}
	var slider = $('#helpers').bxSlider({
	  autoHover: true,
	  auto: true,
	  pause: speed,
	  infiniteLoop: true
	});

	var forInterval = function(){
		var current = slider.getCurrentSlide();
		reactive();
		if (current == 0){
			$('#org').parent('li').addClass('active');
		}
		if (current == 1){
			$('#help').parent('li').addClass('active');
		}
		if (current == 2){
			$('#partn').parent('li').addClass('active');
		}
		if (current == 3){
			$('#inf_partn').parent('li').addClass('active');
		}
	}

	var interval = setInterval(forInterval, speed/20);

	$('#org').click(function(){
	  slider.goToSlide(0);
	  reactive();
	  $('#org').parent('li').addClass('active');
	  return false;
	});
	$('#help').click(function(){
	  slider.goToSlide(1);
	  reactive();
	  $(this).parent('li').addClass('active');
	  return false;
	});
	$('#partn').click(function(){
	  slider.goToSlide(2);
	  reactive();
	  $(this).parent('li').addClass('active');
	  return false;
	});
	$('#inf_partn').click(function(){
	  slider.goToSlide(3);
	  reactive();
	  $(this).parent('li').addClass('active');
	  return false;
	});
		// helpers end

		//helpers adapt begin
	var slider2 = $('#helpers-adapt').bxSlider({
  	  autoHover: true,
	  infiniteLoop: true
	});

	$('#org_ad').click(function(){
	  slider2.goToSlide(0);
	  reactive2();
	  $(this).parent('li').addClass('active');
	  return false;
	});
	$('#help_ad').click(function(){
	  slider2.goToSlide(1);
	  reactive2();
	  $(this).parent('li').addClass('active');
	  return false;
	});
	$('#partn_ad').click(function(){
	  slider2.goToSlide(2);
	  reactive2();
	  $(this).parent('li').addClass('active');
	  return false;
	});
	$('#inf_partn_ad').click(function(){
	  slider2.goToSlide(3);
	  reactive2();
	  $(this).parent('li').addClass('active');
	  return false;
	});

	// sliders end

	// styling
	$('#main-slider-next a').addClass('white');
	$('#main-slider-prev a').addClass('white');

	// mobile menu
	var expand = false;

	$('.burger').click(function() {
		if (expand){
			$('.burger').css('opacity', '0.6');
			$('.top-line ul').hide('fast');
			expand = false;
		}else{
			$('.burger').css('opacity', '0.35');
			$('.top-line ul').show('fast');
			expand = true;
		}
	});

	var searchexpand = false;

	$('.search span').click(function() {
		if (searchexpand) {
			// $('.search').css('opacity', '0.6');
			$('.search input').css({
				top: 0,
				display: 'none'
			});
			searchexpand = false;
		}else{
			// $('.search').css('opacity', '0.35');
			$('.search input').css({
				top: '60px',
				display: 'block'
			});
			searchexpand = true;
		}
	});

}

$(document).ready(function() {
	main();
});
