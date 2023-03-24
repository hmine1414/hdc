$(document).ready(function(){
    
}); 

// menu resize 
$(window).on('resize',function(){
    windowWidth = $(window).width();
}); 

function goTop(){
	$("html, body").animate({scrollTop:"0"}, 500)
}