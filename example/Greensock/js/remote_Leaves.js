var remote_leave = document.getElementById('remote_leave');
var remote_leave_child = document.getElementById('remote_leave_child');
var container = document.getElementById('container');
remote_leave.innerHTML = "<style>#remote_leave{-webkit-transform-origin:center;-webkit-animation: rotate_Y 2s;-webkit-animation-iteration-count:infinite;}@-webkit-keyframes rotate_Y{from {-webkit-transform: rotateY(0deg);}to {-webkit-transform: rotateY(360deg);}}</style>";
var le = [remote_leave];
var lc = [remote_leave_child];

var animation = function(remote_leave, remote_leave_child){

	var t = new TimelineMax({
		repeat: -1,
		yoyo: false
	});
	
	t.timeScale(1);

	var time = 10 + Math.random() * 15;
	var height = 100 - Math.floor(Math.random() * 800);
	var distance = 1500 + Math.random() * 200;
	var rota = Math.random() * 700;
	var sc = 1.2 - Math.random();
	
	t.set(remote_leave, {
		top: 100 + Math.random() * 100,
		left: 180,
		alpha: 0.7 + Math.random()
	});
	
	t.set(remote_leave_child, {
		rotation: Math.random() * 360
	});
	
	t.to([remote_leave,remote_leave_child], Math.random()* 4, {
		
	});

	t.to(remote_leave_child, time, {
		transformOrigin: '50% 50%',
		rotation: '+=' + rota,
	}, '-=' + time);

	t.to([remote_leave, remote_leave_child], time, {
		top: '+=' + height,
		left: '+=' + distance,
		scale: sc,
		
		ease: Power1.easeInOut
	}, '-=' + time);
	
	t.to([remote_leave,remote_leave_child], Math.random()* 4, {
		
	});
};

var add = function(num){
	animation(le[0], lc[0]);
	for(i = 1; i < num; i++)
	{
		le[i] = remote_leave.cloneNode();
		var pre = Math.random() * 360;
		var next = pre + 360;
		le[i].innerHTML = "<style>#remote_leave_" + i +"{-webkit-transform-origin:center;-webkit-animation: rotate_Y "+ (Math.random() + 3) +"s;-webkit-animation-iteration-count:infinite;}@-webkit-keyframes rotate_Y{from {-webkit-transform: rotateY("+ pre + "deg);}to {-webkit-transform: rotateY("+ next + "deg);}}</style>";
		le[i].id = "remote_leave_" + i;
		lc[i] = remote_leave_child.cloneNode();
		le[i].appendChild(lc[i]);
		container.appendChild(le[i]);
		animation(le[i], lc[i]);
	}
};

add(15);