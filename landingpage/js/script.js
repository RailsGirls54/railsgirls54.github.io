$('body').scrollspy({target: '#header', offset: 80});

$(function() {
	
	$('#header').scrollspy("refresh");
	
	// navigation
	$("#navigation li a[href^='#']").on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $(this.hash).offset().top}, 300);
	});

	// title
	$('#brand').hide();
	window.onscroll = function() {
		if (window.pageYOffset < 300)
			$('#brand').fadeOut(150);
		else
			$('#brand').fadeIn(150);
	};
	
});
