var loader = document.getElementById('loader');
var circle = document.getElementById('circle');
var rectangle = document.getElementById('rectangle');
var rain = document.getElementById('rain');
var ra = [rain];
var re = [rectangle];
var ci = [circle];

var play = function(circle, rectangle, rain){	
	var t = new TimelineMax({
		repeat: -1,
		yoyo: false
	});
	
	t.timeScale(2.5);
	
	
	t.set(rain, {
		x: Math.floor(Math.random() * 400),
		y: Math.floor(Math.random() * 120)
	});
	
	t.set(circle, {
		attr: {
			rx: 0,
			ry: 0
		}
	});
	
	t.set(rectangle, {
		attr: {
			height: 0
		}
	});
	
	t.set([rectangle, circle], {
		y: 0
	});
	
	t.to(circle, Math.random() * 3,{
		
	});
	
	t.to(rectangle, 1, {
		attr: {
			height: '+=20'
		},
		y: '+=50',
		alpha: 0
	});
	
	t.to(circle, 1.5, {
		attr: {
			rx: '+=15',
			ry: '+=5'
		},
		alpha: 0,
		ease: Power1.easeInOut
	}, '-=0.3');
	
	t.to(circle, 4,{
		
	});
	
};

var add = function(num){
	play(ci[0], re[0], ra[0]);
	for(i = 1; i < num; i++)
	{
		ra[num] = rain.cloneNode();
		re[num] = rectangle.cloneNode();
		ci[num] = circle.cloneNode();
		ra[num].appendChild(re[num]);
		ra[num].appendChild(ci[num]);
		loader.appendChild(ra[num]);
		play(ci[num], re[num], ra[num]);
	}
};

add(100);