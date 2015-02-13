var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
console.log(w);
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

window.onresize = function(event) {
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
	console.log(w);
	// $('.work-triangle').css( "border-width-left" , w )
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
};