var leave = document.getElementById('leave');
var leave_child = document.getElementById('leave_child');
var container = document.getElementById('container');
leave.innerHTML = "<style>#leave{-webkit-transform-origin:center;-webkit-animation: rotate_Y 2s;-webkit-animation-iteration-count:infinite;}@-webkit-keyframes rotate_Y{from {-webkit-transform: rotateY(0deg);}to {-webkit-transform: rotateY(360deg);}}</style>";
var le = [leave];
var lc = [leave_child];

var animation = function(leave, leave_child){

	var t = new TimelineMax({
		repeat: -1,
		yoyo: false
	});
	
	t.timeScale(1);

	var time = 6 + Math.random()*6;
	var height = Math.floor(Math.random() * 1500);
	var distance = 1500;
	var rota = Math.random() * 700;
	var sc = 1 + Math.random()*2;
	
	t.set(leave, {
		top: -200 + Math.random()*100,
		left: -200
	});
	
	t.to([leave,leave_child], Math.random()* 4, {
		
	});

	t.to(leave_child, time, {
		transformOrigin: '50% 50%',
		rotation: '+=' + rota,
	}, '-=' + time);

	t.to([leave, leave_child], time, {
		top: '+=' + (2000 - height),
		left: '+=' + distance,
		scale: sc,
		
		ease: Power1.easeInOut
	}, '-=' + time);
	
	t.to([leave,leave_child], Math.random()* 4, {
		
	});
};

var add = function(num){
	animation(le[0], lc[0]);
	for(i = 1; i < num; i++)
	{
		le[i] = leave.cloneNode();
		le[i].innerHTML = "<style>#leave_" + i +"{-webkit-transform-origin:center;-webkit-animation: rotate_Y "+ (Math.random() + 3) +"s;-webkit-animation-iteration-count:infinite;}@-webkit-keyframes rotate_Y{from {-webkit-transform: rotateY(0deg);}to {-webkit-transform: rotateY(360deg);}}</style>";
		le[i].id = "leave_" + i;
		lc[i] = leave_child.cloneNode();
		le[i].appendChild(lc[i]);
		container.appendChild(le[i]);
		animation(le[i], lc[i]);
	}
};

add(15);