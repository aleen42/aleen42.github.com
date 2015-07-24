(function(){

	var ellipse1 = document.getElementById('ellipse1');
	var ellipse2 = document.getElementById('ellipse2');
	var ellipse3 = document.getElementById('ellipse3');
	var t = new TimelineMax({
		repeat: -1,
		yoyo: false
	});
	
	t.timeScale(3);

	
	t.set([ellipse1, ellipse2, ellipse3], {
		drawSVG: '0% 1%',
	});
		
	t.to([ellipse1, ellipse2, ellipse3], 10, {
		drawSVG: '99% 100%',
		ease: Linear.easeNone,
	});
	
})();
