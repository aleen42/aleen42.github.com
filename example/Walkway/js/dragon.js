var animation = new Walkway({
	selector: '#loader',
	duration: '4000',
	easing: function(t){
		return t * t;
	}
});

animation.draw();

var animation_1 = function(){
		var t = new TimelineMax({
			repeat: 0,
			yoyo: false
		});
		var graph = document.getElementById('graph');
		
		t.timeScale(2);
	
		t.to([graph], 4, {
			
		});
	
		t.to([graph], 0.5, {
			alpha: 1,
			ease: Power1.easeInOut
		});
};

animation_1();