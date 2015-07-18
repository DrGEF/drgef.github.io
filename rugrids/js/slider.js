var slideWidth=300;
var sliderTimer;
var autoRotation;
$(function(){
	$('.main').width($('.main').children().size()*slideWidth);
	if (autoRotation){
		sliderTimer=setInterval(nextSlide,1000);
	}else{
		sliderTimer = false;
	}
    $('.viewport,.dot').hover(function(){
        clearInterval(sliderTimer);
    },function(){
        sliderTimer;
    });
    $('#next_slide').click(function(){
        clearInterval(sliderTimer);
        nextSlide();
        sliderTimer;
    });
    $('#prev_slide').click(function(){
        clearInterval(sliderTimer);
        prevSlide();
        sliderTimer;
    });
    $('.dot').click(function(){
        $('.dot.active').removeClass('active');
        $(this).addClass('active');
        var n=$('.dot').index(this);
        certainSlide(n);
    });
});

function nextSlide(){
    var currentSlide=parseInt($('.main').data('current'));
    currentSlide++;
    if(currentSlide>=$('.main').children().size())
    {
        currentSlide=0;   
    }
    $('.dot.active').removeClass('active');
    $('.dot').eq(currentSlide).addClass('active');
    $('.main').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}

function prevSlide(){
    var currentSlide=parseInt($('.main').data('current'));
    currentSlide--;
    if(currentSlide<0)
    {
        currentSlide=$('.main').children().size()-1;   
    }
    $('.dot.active').removeClass('active');
    $('.dot').eq(currentSlide).addClass('active');
    $('.main').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}

function certainSlide(n){
    var currentSlide=n;
    $('.main').animate({left: -currentSlide*slideWidth},300).data('current',currentSlide);
}