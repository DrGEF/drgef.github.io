var main = function(){

	//sliders
	$('#main').bxSlider({
  	  pager: false,
	  mode: 'fade',
	  infiniteLoop: true,
	  pageSelector: '#main',
	  nextSelector: '#main-slider-next',
  	  prevSelector: '#main-slider-prev',
  	  prevText: '',
  	  nextText: '',
  	  autoHover: true
	});
	$('#comment').bxSlider({
  	  pager: false,
	  mode: 'fade',
	  infiniteLoop: true,
	  nextSelector: '#comment-slider-next',
  	  prevSelector: '#comment-slider-prev',
  	  prevText: '',
  	  nextText: '',
  	  autoHover: true
	});

	$('#news').bxSlider({
  	  pager: false,
	  infiniteLoop: true,
	  nextSelector: '#news-slider-next',
  	  prevSelector: '#news-slider-prev',
  	  prevText: '',
  	  nextText: '',
  	  autoHover: true
	});
	$('#album img').attr('width', '100%');
	$('#album').bxSlider({
  	  pager: false,
	  infiniteLoop: true,
	  nextSelector: '#album-slider-next',
  	  prevSelector: '#album-slider-prev',
  	  prevText: '',
  	  nextText: '',
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
	if($('div').hasClass('helpers-line')){
		var forInterval = function(){
			var current = slider.getCurrentSlide();
			var current2 = slider2.getCurrentSlide();
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
			if (current2 == 0){
				$('#org_ad').parent('li').addClass('active');
			}
			if (current2 == 1){
				$('#help_ad').parent('li').addClass('active');
			}
			if (current2 == 2){
				$('#partn_ad').parent('li').addClass('active');
			}
			if (current2 == 3){
				$('#inf_partn_ad').parent('li').addClass('active');
			}
		}
		setInterval(forInterval, speed/20);
	}
	

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
			$('.search input').fadeOut('fast');
			searchexpand = false;
		}else{
			$('.search input').fadeIn('fast');
			searchexpand = true;
		}
	});

	//modal

	$('#man1').click(function() {
		$('.darker').css('display', 'block');
		$('#for_man1').css('display', 'block');
	});

	$('.close').click(function() {
		$('.darker').css('display', 'none');
		$('.modal').css('display', 'none');
	});
	$('.darker').click(function() {
		$('.darker').css('display', 'none');
		$('.modal').css('display', 'none');
	});


	// news expand

	var expandNews = false;
	$('.news .more a').click(function() {
		if (expandNews) {
			$(this).text('подробнее');
			expandNews = false;
			$(this).parent('.more').parent('.case').children('.hide').fadeOut('fast');
		}else{
			$(this).text('скрыть');
			expandNews = true;
			$(this).parent('.more').parent('.case').children('.hide').fadeIn('slow');
		}
	});

	// album tabs

	$('#one').click(function() {
		$('#second').css('display', 'none');;
		$('#album').fadeIn('slow');
		$('.album .slider-arrows').fadeIn('slow').css('display', 'table');
		$(this).addClass('active');
		$('#two').removeClass('active');
	});
	$('#two').click(function() {
		$('#second').fadeIn('slow');
		$('#album').css('display', 'none');;
		$('.album .slider-arrows').css('display', 'none');;
		$(this).addClass('active');
		$('#one').removeClass('active');
	});

	$('.album .bx-viewport').css({
		height: 'auto',
		width:  'auto'
	});

	// video tabs

	$('#three').click(function() {
		$('#fourth').css('display', 'none');;
		$('#third').fadeIn('slow');
		$(this).addClass('active');
		$('#four').removeClass('active');
	});
	$('#four').click(function() {
		$('#third').css('display', 'none');;
		$('#fourth').fadeIn('slow');
		$(this).addClass('active');
		$('#three').removeClass('active');
	});

	// program
	var progExp = false;
	$('.have-exp').click(function() {
		if(progExp){
			$(this).parent('.descr').children('ul').fadeOut('slow');
			progExp = false;
		}else{
			$(this).parent('.descr').children('ul').fadeIn('slow');
			progExp = true;
		}
	});

	var program = $('#days').bxSlider({
	  controls: false,
  	  // pager: false,
	  infiniteLoop: true,
  	  autoHover: true
	});

	// reactive for program

	var reactive3 = function(){
		 $('.arrow-line .active').removeClass('active');
	}

	if($('div').hasClass('program')){
		$('.bx-viewport').css('height', '100%');
		var program_tabs = function(id, slide){
	  		  $(id).click(function() {
				  program.goToSlide(slide);
				  reactive3();
				  $(id).addClass('active');
				  return false;
	  		});
		}
		program.goToSlide(0);
		program_tabs('#first_prog',  0);
		program_tabs('#second_prog', 1);
		program_tabs('#third_prog',  2);
		program_tabs('#fourth_prog', 3);
		var forInterval = function(){
			var current = program.getCurrentSlide();

			reactive3();

			if (current == 0){
				$('#first_prog').addClass('active');
			}
			if (current == 1){
				$('#second_prog').addClass('active');
			}
			if (current == 2){
				$('#third_prog').addClass('active');
			}
			if (current == 3){
				$('#fourth_prog').addClass('active');
			}
		}
		setInterval(forInterval, speed/10);
	}

	// program end

	// vistavka

	var vistavka = function(link, tab){
		var clearAll = function(){
			$('.arrow-line .active').removeClass('active');
			$('#first_v').css('display', 'none');
			$('#second_v').css('display', 'none');
		}
		$(link).click(function() {
			clearAll();
			$(link).addClass('active');
			$(tab).fadeIn('fast');
		});
	}

	vistavka('#one_v', '#first_v');
	vistavka('#two_v', '#second_v');

	// vistavka end

}

$(document).ready(function() {
	$("body").queryLoader2({
        barColor: "#fff",
        backgroundColor: "#ff9933",
        percentage: true,
        barHeight: 1,
        completeAnimation: "grow",
        minimumTime: 500
    });
	main();
});
