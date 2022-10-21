jQuery(window).on('load', function() {   
    
    // HIDE PRELAODER
    $(".preloader").addClass("hide-preloader");
  
});


jQuery(document).ready(function($) {
	"use strict";
    
    // PORTFOLIO GALLERY 
    $('.portfolio a').featherlightGallery({
		previousIcon: '&#9664;',   
		nextIcon: '&#9654;',         
		galleryFadeIn: 100,
		galleryFadeOut: 300    
	});
    
});