var ellipse1 = document.getElementById('ellipse1');
var ellipse2 = document.getElementById('ellipse2');
var ellipse3 = document.getElementById('ellipse3');
var length = 3;
var gap = 403;
var offset = 0;
ellipse1.style.strokeDashoffset = offset;	
ellipse1.style.strokeDasharray = length +", "+ gap;
ellipse2.style.strokeDashoffset = offset;	
ellipse2.style.strokeDasharray = length +", "+ gap;
ellipse3.style.strokeDashoffset = offset;	
ellipse3.style.strokeDasharray = length +", "+ gap;
(function(){
	setInterval(function()
	{
		offset = (offset - gap / 1000) % (gap - 13);
		ellipse1.style.strokeDashoffset = offset;	
		ellipse1.style.strokeDasharray = length +", "+ gap;
		ellipse2.style.strokeDashoffset = offset;	
		ellipse2.style.strokeDasharray = length +", "+ gap;
		ellipse3.style.strokeDashoffset = offset;	
		ellipse3.style.strokeDasharray = length +", "+ gap;
	}, 1);
})();