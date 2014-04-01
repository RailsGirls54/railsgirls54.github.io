$('body').scrollspy({target: '#header'});

$(function() {
	
	// navigation
	$("#navigation li a[href^='#']").on('click', function(e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: $(this.hash).offset().top}, 300);
		// edit: Opera and IE requires the "html" elm. animated
	});

	// title
	$('#brand').hide();
	window.onscroll = function() {
		if (window.pageYOffset < 300)
			$('#brand').fadeOut(150);
		else
			$('#brand').fadeIn(150);
	};

	// registration
	$('body').on('click', '.join', function(e) {
		e.preventDefault();
		var $this = $(this);
		if($('#mc_embed_signup').is(':visible'))
			$('#mc_embed_signup').slideUp(150, function(){
				$this.removeClass('active');
			});
		else
			$('#mc_embed_signup').slideDown(150, function(){
				$this.addClass('active');
				$('#mce-EMAIL').focus();
			});
	});
	
});

$('#mc_embed_signup').hide();