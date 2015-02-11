// When document loads run main section animations
$( document ).ready(function() {
    $('.main-copy-headline').addClass('main-copy-headline-bounce');
    $('.main-copy-paragraph').addClass('main-copy-paragraph-bounce');
    $('.logo').addClass('logo-bounce');
});

// Home button
$('.home-button').click(function(){
	$('.main-copy-headline').addClass('main-copy-headline-bounce');
    $('.main-copy-paragraph').addClass('main-copy-paragraph-bounce');
    $('.logo').addClass('logo-bounce');
    $('.main-copy-headline').removeClass('main-copy-headline-bounce');
    $('.main-copy-paragraph').removeClass('main-copy-paragraph-bounce');
    console.log('click worked')
})

$('.to-top').click(function(){
	jQuery('html,body').animate({scrollTop:0},0);
})




////////////////////////////////////////////////// Way points

////////////////////////////////////////////////// Main div

////////////////////////////////////////////////// Second div
////////////////////////////////////////// transitions related to Main div triggered by second
$('.second').waypoint(function(direction) {
	if (direction === 'down') {
		$('.main-copy-headline').removeClass('main-copy-headline-bounce');
    	$('.main-copy-paragraph').removeClass('main-copy-paragraph-bounce');
	} 
}, { offset: '0%' })

$('.second').waypoint(function(direction) {
	if (direction === 'up') {
		$('.main-copy-headline').addClass('main-copy-headline-bounce');
    	$('.main-copy-paragraph').addClass('main-copy-paragraph-bounce');
	} 
}, { offset: '100%' })


$('.second').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-two').addClass('box-two-move');
	} else {
		$('.box-two').removeClass('box-two-move');
	}
}, { offset: '50%' });

$('.second').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-two').removeClass('box-two-move');
	} else {
		$('.box-two').addClass('box-two-move');
	}
}, { offset: '0%' });


////////////////////////////////////////////////// Third div
$('.third').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-three').addClass('box-two-move');
	} else {
		$('.box-three').removeClass('box-two-move');
	}
}, { offset: '50%' });

$('.third').waypoint(function(direction) {
	if (direction === 'down') {
		$('.box-three').removeClass('box-two-move');
	} else {
		$('.box-three').addClass('box-two-move');
	}
}, { offset: '0%' });