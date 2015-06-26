(function(){
	var container = document.getElementById('container');
	var loader = document.getElementById('loader');
	var path1 = document.getElementById('path1');
	var path2 = document.getElementById('path2');
	
	
	var t = new TimelineMax({
		repeat: -1,
		yoyo: true
	});
	
	t.timeScale(5);
	t.set([path1, path2], {
		alpha: 0.0,
		ease: Power1.easeInOut
	}, '-=2');
	
	t.to([path1, path2], 3, {
		alpha: 0.8,
		ease: Power1.easeInOut
	});
	
	t.to([path1, path2], 3, {
		alpha: 1.0,
		ease: Power1.easeInOut
	}, '+=2');
})();