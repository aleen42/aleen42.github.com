(function(){
	var container = document.getElementById('container');
	var loader = document.getElementById('loader');
	var path1 = document.getElementById('path1');
	var path2 = document.getElementById('path2');
	
	var t = new TimelineMax({
		repeat: -1,
		yoyo: false
	});
	
	t.timeScale(1.2);
	t.set([path1, path2], {
		drawSVG: '0% 0%'
	}, '-=2');
	
	t.to([path1, path2], 3, {
		drawSVG: '0% 100%'
	});
	
	t.to([path1, path2], 3, {
		drawSVG: '0% 0%'
	}, '+=2');
})();
