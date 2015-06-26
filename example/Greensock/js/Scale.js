(function(){
	var container = document.getElementById('container');
	var loader = document.getElementById('loader');
	var outer = document.getElementById('outer');
	
	
	var t = new TimelineMax({
		repeat: -1,
		yoyo: false
	});
	
	t.timeScale(5);
	t.set(outer, {
		scale: 1.0,
		transformOrigin: '50% 50%',
		ease: Power1.easeInOut
	}, '-=2');
	
	t.to(outer, 3, {
		scale: 1.1,
		transformOrigin: '50% 50%',
		ease: Power1.easeInOut
	});
	
	t.to(outer, 3, {
		scale: 1.0,
		transformOrigin: '50% 50%',
		ease: Power1.easeInOut
	}, '+=2');
})();
