$(document).ready(function() {

	/* Menu open/close */
	$('.profile-btn').click(function(){
		$('.profile').css('display','block');
	});

	$('.exit-menu').click(function(){
		$('.profile').css('display','none');
	});

	/* Hover state for project/titles */
	var tooltip = document.querySelectorAll('.projectTooltip');

	document.addEventListener('mousemove', fn, false);

	function fn(e) {
	    for (var i=tooltip.length; i--;) {
	        tooltip[i].style.left = e.pageX + -35 + 'px';
	        tooltip[i].style.top = e.pageY + -90 + 'px';
	    }
	}

});
