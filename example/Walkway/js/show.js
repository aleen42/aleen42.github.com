var animation = new Walkway({
	selector: '#loader',
	duration: '5000',
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
		var path1 = document.getElementById('path1');
		var path3 = document.getElementById('path3');
		
		t.timeScale(1);

		t.set([path1], {
			alpha: 1,
			fill: '#a10000'
		});
		
		t.to([path1, path3], 4, {
			
		});	
	
		t.set([path3], {
			alpha: 0,
			fill: '#000'
		});
	
		t.to([path1, path3], 1, {
			alpha: 1,
			ease: Power2.easeInOut
		});
};

animation_1();



