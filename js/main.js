$(function(){
	var okno = $(window);
	var menu = $('#main-nav');
    var logo = $('#logo');
	
	
/*    if(okno.scrollTop() >= 100 ) {
		logo.addClass('scroll');
	   } else {
			logo.removeClass('scroll');
		   };*/
	
	okno.scroll(function() {
		//console.log(okno.scrollTop());
		
		if(okno.scrollTop() >= 100) {
		   	menu.addClass('scroll');
		   } else {
			menu.removeClass('scroll');
		   }
	});
	
	$(document).on('click', 'a[href^="#"]', function(event){
		event.preventDefault();
		
		var menuHeight = $('#main-nav').height();
		//sprawdzi jaka jest wysokość menu

		
		$('html, body').animate({ //w atrybutach pobierz wart. elementu dla tego hrefa
			scrollTop: $( $.attr(this, 'href') ).offset().top - menuHeight
		}, 500);
		
		
		});
	
});