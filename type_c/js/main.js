
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
