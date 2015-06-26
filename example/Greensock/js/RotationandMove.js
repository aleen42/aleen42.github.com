(function(){
	var rectangle = document.getElementById('rectangle');
	
	var t = new TimelineMax({
		repeat: -1,
		yoyo: true
	});
	
	t.timeScale(2);
	
	var width = rectangle.width;
	var num = 1;
	
	t.set(rectangle, {
		transformOrigin: '100% 100%',
	});
	
	t.to(rectangle, 3, {
		rotation: '+=90',
		ease: Power1.easeInOut
	});
	
	t.set(rectangle, {
		transformOrigin: '100% 100%',
		x: '+=100',
		rotation: 0
	});
	
	t.to(rectangle, 3, {
		rotation: '+=90',
		ease: Power1.easeInOut
	});
	
	t.to(rectangle, 2, {
		
	});
	
	
})();
