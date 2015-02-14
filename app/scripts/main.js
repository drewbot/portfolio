// get window width

var getWindowSetTriangle = function(){
	var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	console.log(w);
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





// focus in on new item input changes border color
$('.contact-name input').focusin( function(){
	console.log("focus in name")
	$(this).css({
		"border-width" : "0 0 2px 0"
	});
	$(this).attr('placeholder','');
	$('.name-label').toggleClass('input-focus-animate');
});
$('.contact-email input').focusin( function(){
	console.log("focus in email")
	$(this).css({
		"border-width" : "0 0 2px 0"
	});
	$(this).attr('placeholder','');
	$('.email-label').toggleClass('input-focus-animate');
});
$('.contact-message textarea').focusin( function(){
	console.log("focus in message")
	$(this).css({
		"border-width" : "0 0 2px 0"
	});
	$(this).attr('placeholder','');
	$('.message-label').toggleClass('input-focus-animate');
});

// focus out on new item input changes border color back
$('.contact-name input').focusout( function(){
	console.log("focus out name")
	$(this).css({
		"border-width" : "0 0 1px 0"
	});
	$(this).attr('placeholder','What\'s your name?');
	$('.name-label').toggleClass('input-focus-animate');
});
$('.contact-email input').focusout( function(){
	console.log("focus out email")
	$(this).css({
		"border-width" : "0 0 1px 0"
	});
	$(this).attr('placeholder','...your email?');
	$('.email-label').toggleClass('input-focus-animate');
});
$('.contact-message textarea').focusout( function(){
	console.log("focus out message")
	$(this).css({
		"border-width" : "0 0 1px 0"
	});
	$(this).attr('placeholder','What\'s up?');
	$('.message-label').toggleClass('input-focus-animate');
});