$( document ).ready(function() {
    $('.main-carousel').flickity({
	  // options
	  cellAlign: 'left',
	  contain: true,
	  wrapAround: true,
	  pageDots: false
	});

    $('.modal').click(function(){
		$('#aboutme').css('visibility', 'visible');
    });

    $('.closeBtn').click(function(){
    	$('#aboutme').css('visibility','hidden');
    });

    /*
    $('a').bind('mouseover', function(){
    	$()
    });
    */
});

