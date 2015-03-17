
/////////////////////////////////////// Triangles
var getWindowSetTriangle = function(){
	// get window width
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	// Set css triangles on work section and contact section to window width
	$(".work-triangle").css({
	  "border-top": w / 10 + 'px solid #01A0B0'
	});
	$(".work-triangle").css({
	  "border-right": w + 'px solid transparent'
	});
	$(".contact-triangle").css({
	  "border-top": w / 10 + 'px solid #2A363B'
	});
	$(".contact-triangle").css({
	  "border-left": w + 'px solid transparent'
	});
}

getWindowSetTriangle();

// On resize get window width
window.onresize = function(event) {
  getWindowSetTriangle();
};




/////////////////////////////////// Contact form
// focus in on new item input changes border color
$('.contact-name input').focusin( function(){
	$(this).css({
		"border-bottom-color" : "#D66611"
	});
	$(this).attr('placeholder','');
	$('.name-label').toggleClass('input-focus-animate');
});
$('.contact-email input').focusin( function(){
	$(this).css({
		"border-bottom-color" : "#D66611"
	});
	$(this).attr('placeholder','');
	$('.email-label').toggleClass('input-focus-animate');
});
$('.contact-message input').focusin( function(){
	$(this).css({
		"border-bottom-color" : "#D66611"
	});
	$(this).attr('placeholder','');
	$('.message-label').toggleClass('input-focus-animate');
});

// focus out on new item input changes border color back
$('.contact-name input').focusout( function(){
	$(this).css({
		"border-bottom-color" : "#ffffff"
	});
	$(this).attr('placeholder','What\'s your name?');
	$('.name-label').toggleClass('input-focus-animate');
});
$('.contact-email input').focusout( function(){
	$(this).css({
		"border-bottom-color" : "#ffffff"
	});
	$(this).attr('placeholder','...your email?');
	$('.email-label').toggleClass('input-focus-animate');
});
$('.contact-message input').focusout( function(){
	$(this).css({
		"border-bottom-color" : "#ffffff"
	});
	$(this).attr('placeholder','What\'s up?');
	$('.message-label').toggleClass('input-focus-animate');
});

////////////////////////////////////// About
// Show About content 
$('.about-show').click(function(){
	$('.about-content').toggle();
	$('.about-banner').toggleClass('about-banner-padding');
})