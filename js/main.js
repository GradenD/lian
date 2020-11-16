$(document).ready(function(){
	
	$('.slider').css('height',($(window).height() - 415) + 'px');

 	$("#range_01").ionRangeSlider({
		min: 1,
		max: 100,
		from: 90,
		disable: true
	});

	$("#range_02").ionRangeSlider({
		min: 1,
		max: 100,
		from: 95,
		disable: true
	});

	$("#range_03").ionRangeSlider({
		min: 1,
		max: 100,
		from: 50,
		disable: true
	});

	$("#range_04").ionRangeSlider({
		min: 1,
		max: 100,
		from: 85,
		disable: true
	});

})