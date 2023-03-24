$(".mainvisual > ul.mainvisual-slider").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	dots: true,
	appendArrows:$('.slider-paging .paging-inner .btnset'),
	appendDots:$('.slider-paging .paging-inner div'),
	focusOnSelect: true,
	touchMove: true,
	autoplay: true,
	autoplaySpeed: 10000,
	swipe: true
});

$(".newslist > ul").slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	appendArrows: $(".newslist .btnset"),
	dots: false,
	focusOnSelect: true,
	touchMove: true,
	autoplay: true,
	autoplaySpeed: 10000,
	swipe: true
});


/* counter */
var options = {
	useEasing: true,
	useGrouping: true,
	separator: ',',
	decimal: '.',
};
var counter1 = new CountUp('todayCnt', 0, 45443, 0, 2, options),
counter2 = new CountUp('totalRecSuccess', 0, 135207, 0, 2, options);


$(window).scroll(function() {
	if ($(window).scrollTop() > ($(".educourse").innerHeight() + $(".educustom").innerHeight() + $(".mainvisual").innerHeight() - 500)){
		if (!counter1.error) 
			counter1.start() 
		else 
			console.error(counter1.error)

		if (!counter2.error) 
			counter2.start() 
		else 
			console.error(counter2.error)
	}
	
	if ($(window).scrollTop() > ($(".mainvisual").innerHeight() + $(".principal-course").innerHeight() + $(".educustom").innerHeight() - 300)){
		$(".apply-courselist > ul > li:eq(0)").addClass("active");
		$(".apply-courselist > ul > li:eq(0) > dl dd").slideDown();
	}
});

function edunewsToggle(){
	if(!$(".edu-news").is(".open")){
		$(".edu-news").addClass("open");
	}else{
		$(".edu-news").removeClass("open");	
	}
}

function toggleBoard(Idx){
	if(!$(".apply-courselist > ul > li:eq("+Idx+")").is(".active")){
		$(".apply-courselist > ul > li:eq("+Idx+")").addClass("active");
		$(".apply-courselist > ul > li:eq("+Idx+") > dl dd").slideDown();
	}else{
		$(".apply-courselist > ul > li:eq("+Idx+")").removeClass("active");
		$(".apply-courselist > ul > li:eq("+Idx+") > dl dd").slideUp();
	}
}

var mvTotal = 2;
var mvIndex = 1;
$('.mainvisual .slider-paging .slick-next').on('click', function(){
	if (mvIndex < mvTotal){
		mvIndex++;
	}else{
		mvIndex = 1;
	}
	$("#mvCnt").text(mvIndex);
});
$('.mainvisual .slider-paging .slick-prev').on('click', function(){
	if(mvIndex > 1){
		newsIndex--;
	}else{
		mvIndex = mvTotal;
	}
	$("#mvCnt").text(mvIndex);
});

var newsTotal = 5;
var newsIndex = 1;
$('.newslist .slick-next').on('click', function(){
	if (newsIndex < newsTotal){
		newsIndex++;
	}else{
		newsIndex = 1;
	}
	$("#newsCnt").text(newsIndex);
});

$('.newslist .slick-prev').on('click', function(){
	if(newsIndex > 1){
		newsIndex--;
	}else{
		newsIndex = newsTotal;
	}
	$("#newsCnt").text(newsIndex);
});


// load function
$(function(){
	setTimeout(function() {
		$('.fix-intro').addClass('bg-none');
	}, 300);    
	setTimeout(function() {
		$('.fix-intro').addClass('active');
	}, 2800); 
	setTimeout(function() {
		$('body').removeClass('hidden');
		$('.fix-intro').addClass('hidden');
		$("#wrap").removeClass('init'); 
		$('.header').removeClass('hidden');
	}, 3500);

	
	// text animation
	split = function (element) {
		words = $(element).text().split('');
		for (i in words) {
			words[i] = '<span>' + words[i] + '</span>';
		}
		text = words.join('');
		$(element).html(text);
	};

	textify = function(element, method, delay) {
		split(element);
		in_speed = 10;
		count = 0;
		setTimeout(function(){
			count = 0;
			$(element + ' span').each(function () {
				if(method == 'fadeIn'){
					$(element + ' span').css('opacity','0');
					$(element + ' span').css('position','relative');
					$(this).delay(0 + in_speed * count).animate({ 
						opacity: '1',
					}, 100);
				}else if(method == 'fadeslide'){
					$(this).delay(0 + in_speed * count).animate({ 
						opacity: '1',
						top:'0'
					}, 100);
					$(this).parent().css('opacity','1');
				}
				count++;
			});
		},delay);
	};
	textify('.intro-txt.type1','fadeIn'); // main - intro
	textify('.intro-txt.type2','fadeIn'); // main - intro
});

new AnimOnScroll(document.getElementById('grid'), {
	minDuration : 0.4,
	maxDuration : 0.7,
	viewportFactor : 0.2
});