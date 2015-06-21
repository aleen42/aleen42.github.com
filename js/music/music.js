var audio = document.getElementById("audio");
var song_name;
if (audio != null && audio.canPlayType && audio.canPlayType("audio/mpeg"))
{
	
/*	var path = location.pathname;
	path = path.substr(0, path.lastIndexOf('/') + 1)
	fso	= new ActiveXObject("Scripting.FileSystemObject");
	fldr = fso.GetFolder(path);
	fc = new Enumerator(fldr.files);
	s = fc.item().name;*/
	list=
	[
		'Mark Petrie - A New Day.mp3',
		'Jacoo - Vacuum (Instrumental).mp3',
		'Jacoo - Towards the Light.mp3',
		'Jacoo - In the Shadows... Looking For a Light.mp3',
		'Jacoo - Nature\'s Way.mp3',
		'Jacool - Peace Of Mind.mp3',
		'Jacool,Oneira - Hurt.mp3'
	]
	
	var num = Math.floor(Math.random()*list.length);
	load_song(0);
	audio.addEventListener("canplaythrough", function () {
	play();
	}, false);
		
	audio.addEventListener('ended', function () {
	// Wait 2000 milliseconds before next loop
	setTimeout(function () { 
	load_song(1);
	play(); }, 2000);
	}, false);
}
			
         //播放器控制
$('.next_div').click(function(){
	load_song(1);
	audio.addEventListener("canplaythrough", function () {
		play();
	}, false);
});

$('.randon_div').click(function(){
	load_song(Math.floor(Math.random()*list.length));
	audio.addEventListener("canplaythrough", function () {
		play();
	}, false);
});
			
$('.audio_div').click(function(){
	//防止冒泡
	event.stopPropagation();
	if(audio.paused) //如果当前是暂停状态
	{
    	$('.audio_div').css("background","url(pic/pause_logo.png) no-repeat center bottom");
		document.getElementById("play/pause").innerHTML = "<a href=\"javascript:void(0)\" title=\"Pause\"><img src=\"pic/empty.png\"></img></a>";
		audio.play();//播放
		return;
	}
                
	//当前是播放状态
        
	$('.audio_div').css("background","url(pic/play_logo.png) no-repeat center bottom");
	document.getElementById("play/pause").innerHTML = "<a href=\"javascript:void(0)\" title=\"Play\"><img src=\"pic/empty.png\"></img></a>";
	audio.pause(); //暂停
});
		
//加载歌
function load_song(key)
{
	num = (num + key) % list.length;
	$('.song_name').css("left","1230px");
	document.getElementById("s_name").innerHTML = "<font style=\"font-size:16px;color:#000;\">" + "Loading..." + "</font>"
	audio.src = "bg_music/" + list[num];
	song_name = list[num];
}

			
//淡入效果
function play()
{
	audio.play();	
	$('.song_name').css("left","1160px");
	document.getElementById("s_name").innerHTML = "<marquee scrollamount=\"2\" style=\"font-size:16px;color:#000;\">" + "<b style=\"font-size:20px;\">" + (num + 1) + "/" + list.length + "</b>" + "\&nbsp;\&nbsp;\&nbsp;" + song_name.substr(0, song_name.length - (song_name.length - song_name.indexOf('.'))) + "</marquee>";
	audio.volume = 0.01; 
	setInterval(function()
	{
		var volume = audio.volume;
		if(!volume)
		{
			return;
		}
				
		if(volume >= 1.0)
		{
			return;
		}
		
		if(volume)
		{
			audio.volume += 0.01;
		}
	}, 100);
}
			
function pause()
{	
	setInterval(function()
	{
		var volume_x = audio.volume;
		if(volume_x <= 0.01)
		{
			return;
		}
		if(volume_x)
		{
			audio.volume -= 0.01;
		}
	}, 10);
}