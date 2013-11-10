jQuery(document).ready(function($) {
	
//init
$('.menu').css('opacity', 0);

		
//ROLLOVER

	$('.sezione').mouseenter(function() {
	var padre =	$(this).attr("ref");;
	$('.bg.'+padre).animate({
		height: '110%',
		width: '110%',
		marginLeft: '-5%',
		marginTop: '-5%',
		opacity: 0
		}, 400, function() {
			
		});
	$('.menu.'+padre).animate({
		opacity: 1
		}, 500, function() {
			
		});
		
		
	});



});