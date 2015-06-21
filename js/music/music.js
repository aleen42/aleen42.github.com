var audio = document.getElementById("audio");
var song_name;
if (audio != null && audio.canPlayType && audio.canPlayType("audio/mpeg"))
{
	var num = Math.floor(Math.random()*4);
	var fso = new ActiveXObject("Scripting.FileSystemObject");
	var path = "./bg_music";
	var directory = fso.GetFolder(path);
	var fc = new Enumerator(directory.files);
	var list = [];
	var i = 0;
	for(; !fc.atEnd(); fc.moveNext())
	{
		list[i++] = fc.item().name;
	}
	
	load_song();
	audio.addEventListener("canplaythrough", function () {
	play();
	}, false);
		
	audio.addEventListener('ended', function () {
	// Wait 2000 milliseconds before next loop
	setTimeout(function () { 
	load_song();
	play(); }, 2000);
	}, false);
}
			
         //播放器控制
$('.next_div').click(function(){
	load_song();
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
		audio.play();//播放
		return;
	}
                
	//当前是播放状态
        
	$('.audio_div').css("background","url(pic/play_logo.png) no-repeat center bottom");
	audio.pause(); //暂停
});
		
//加载歌
function load_song()
{
	$('.song_name').css("left","1230px");
	document.getElementById("s_name").innerHTML = "<font style=\"font-size:16px;color:#000;\">" + "Loading..." + "</font>"
	audio.src = "bg_music/" + list[num];
	song_name = list[num];
	num = (num + 1) % list.length;
}

			
//淡入效果
function play()
{
	audio.play();	
	$('.song_name').css("left","1160px");
	document.getElementById("s_name").innerHTML = "<marquee scrollamount=\"2\" style=\"font-size:16px;color:#000;\">" + "<b style=\"font-size:20px;\">" + (num == 0? list.length:num) + "/" + list.length + "</b>" + "\&nbsp;\&nbsp;\&nbsp;" + song_name.substr(0, song_name.length - (song_name.length - song_name.indexOf('.'))) + "</marquee>";
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