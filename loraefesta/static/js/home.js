jQuery(document).ready(function($) {
	
//init
$('.menu').css({'opacity': 0, 'margin-top': -10});
		
//ROLLOVER
	$('.sezione').mouseenter(function() {
	var padre =	$(this).attr("ref");;
	$('.bg.'+padre).stop(true, true).animate({
		opacity: 0
		}, 500, function() {
			//
		});
	$('.menu.'+padre).stop(true, true).animate({
		opacity: 1,
		marginTop: 0
		}, 500, function() {
			//
		});
	});

//ROLLOUT
	$('.sezione').mouseleave(function() {
	var padre =	$(this).attr("ref");;
	$('.bg.'+padre).stop(true, true).animate({
		opacity: 1
		}, 400, function() {
			//
		});
	$('.menu.'+padre).stop(true, true).animate({
		opacity: 0,
		marginTop: -10
		}, 500, function() {
			//
		});
	});


});