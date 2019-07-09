jQuery(document).ready(function($) {

	/* Profile/menu open and close */
	$('.profile-btn').click(function() {
		$('.profile').css('display','block');
	});

	$('.exit-menu').click(function() {
		$('.profile').css('display','none');
	});

});

