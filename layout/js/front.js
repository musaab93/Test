$(function(){
	'use strict';
	$(".note .glyphicon-remove").click(function(){
		$(this).parent().slideUp(400);
	});
	var down= $(".image .glyphicon-chevron-down"),
		up= $(".image .glyphicon-chevron-up");
		up.click(function(){
		$(this).parent().animate({
			height: "60px"
		});
		$(this).hide();
		$(this).siblings(".glyphicon-chevron-down").show();
	});
	down.click(function(){
		$(this).parent().animate({
			height: "20px"
		});
		$(this).hide();
		$(this).siblings(".glyphicon-chevron-up").show();
	});
	$(window).scroll(function(){
		var view= $(".view").offset().top + $(".view").height(),
			look= $(".looking").offset().top,
			wind= $(window).scrollTop();
		if(wind>= view -"88.2833"){
			$(".call").css({
				position: "fixed",
				top: "55px"
			}, 400);	
		}else{
			$(".call").css({
				position: "absolute",
				bottom: "0",
				top: "auto"
			}, 400);	
		}
		if(wind>= look - "50"){
			$(".contact").animate({
				left: "6px"
			}, 600);
		}
	});
	var small= $(".contact .glyphicon-resize-small"),
		full= $(".contact .glyphicon-resize-full");
	small.click(function(){
		$(this).hide();
		full.show();
		$(".contact").css({
			borderRadius: "8px 8px 0 0",
			position: "relative",
			top: "auto",
			bottom: "4px",
			left: "0",
			height: "34px"
		})
	});
	full.click(function(){
		$(this).hide();
		small.show();
		$(".contact").css({
			position: "fixed",
			height: "auto"
		}).animate({
			bottom: "15%",
		});
	});
	// Show Line Under Section Title
	$(".all-sections").on("click", "li" , function(){
		$(this).find("hr").css("width", "100%").end().siblings().find("hr").css("width", "0");
	});
	// Scroll Sections
	$("#service").click(function(){
		var service= $(".service").offset().top;
		$("html, body").animate({
			scrollTop: service - 100
		}, 800);
	});
	$("#branches").click(function(){
		var branches= $(".branches").offset().top;
		$("html, body").animate({
			scrollTop: branches - 100
		}, 800);
	});
	$("#looking").click(function(){
		var look= $(".looking").offset().top;
		$("html, body").animate({
			scrollTop: look - 100
		}, 800);
	});
	$("#message").click(function(){
		var message= $(".our-message").offset().top;
		$("html, body").animate({
			scrollTop: message - 100
		}, 800);
	});
	$("#how-we").click(function(){
		var us= $(".how-we").offset().top;
		$("html, body").animate({
			scrollTop: us - 100
		}, 800);
	});
	// Just a help to change the background-image
    var changeImage = function(id, image){
		$(id).css('background-image', 'url('+image+')');
	  };
	  
	  //Auto change Background Image over time
	  $(window).ready(function(){
		var images = ['imgs/2.jpg', 'imgs/3.jpg', 'imgs/4.jpg', 'imgs/5.jpg', 'imgs/1.jpg'];
		// Your pretty counter
		var i = 0;
		
		// Init sequence, loading the first image
		$("#wrapper_bottom").css("opacity", 0);
		changeImage('#wrapper_bottom', images[i]);
		changeBackground();
		
		// Your function
		// TODO: you should declare this outside of this scope
		function changeBackground() {
		  $('#wrapper_bottom')
			.animate({"opacity": 1}, 2500, function(){
			  changeImage('#wrapper_top', images[i]);
			  if (++i >= images.length) { i = 0; } 
			  $("#wrapper_bottom").css("opacity", 0);
			  changeImage('#wrapper_bottom', images[i]);
		  });
		}
	  
		setInterval(changeBackground, 6000);
	  });
})