$(function () {
	//轮播自动播放
	$('#myCarousel').carousel({
		//自动4秒播放
		interval : 5000,
	});

	// //设置垂直居中
	// $('.carousel-control').css('line-height', $('.carousel-inner img').height() + 'px');
	// $(window).resize(function () {
	// 	var $height = $('.carousel-inner img').eq(0).height() || 
	// 				  $('.carousel-inner img').eq(1).height() || 
	// 				  $('.carousel-inner img').eq(2).height();
	// 	$('.carousel-control').css('line-height', $height + 'px');
	// });
    
   $(window).load(function () {//等待图片加载好，才开始执行
	  $('.text').eq(0).css("margin-top", ($(".auto").eq(0).height()-$(".text").eq(0).height())/2+ "px" );
	  $('.text').eq(1).css("margin-top", ($(".auto").eq(1).height()-$(".text").eq(1).height())/2+ "px" );
	});
	
	$(window).resize(function () {
	  $('.text').eq(0).css("margin-top", ($(".auto").eq(0).height()-$(".text").eq(0).height())/2+ "px" );
	  $('.text').eq(1).css("margin-top", ($(".auto").eq(1).height()-$(".text").eq(1).height())/2+ "px" );
	});
	});