var animation = new Walkway({
	selector: '#loader',
	duration: '10000',
	easing: function(t){
		return t * t;
	}
});

animation.draw();

