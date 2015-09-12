(function(){
	var rect1 = document.getElementById('rect1');
	var rect2 = document.getElementById('rect2');
	var rect3 = document.getElementById('rect3');
	
	var t = new TimelineMax({
		repeat: -1,
		yoyo: true
	});
	
	t.timeScale(1);
	
	t.set([rect1, rect2, rect3], {
		transformOrigin: '100% 100%',
	});
	
	t.to(rect1, 1, {
		height: '+=38',
		ease: Linear.easeInOut
	});
	
	t.to(rect2, 1, {
		height: '+=51',
		ease: Linear.easeInOut
	}, '-=0.5');
	
	t.to(rect3, 1, {
		height: '+=79',
		ease: Linear.easeInOut
	}, '-=1');
	
})();
