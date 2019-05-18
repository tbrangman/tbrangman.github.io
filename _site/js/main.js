jQuery(document).ready(function($) {

	$('.menu').hide();

    $('.menu-btn').click(function(){
    	$('.menu-btn').css("background-color: #fff");
		$('.menu').toggle();
    });

});

