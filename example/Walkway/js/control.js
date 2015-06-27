var animation = new Walkway({
	selector: '#loader',
	duration: '5000',
	easing: function(t){
		return t * t;
	}
});

animation.draw();

