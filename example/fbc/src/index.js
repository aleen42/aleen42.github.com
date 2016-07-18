const wechatTopBarHeight = 73;
const screenWidth = window.screen.availWidth;
const screenHeight = window.navigator.userAgent.toLowerCase().indexOf('micromessenger') > -1 ? window.screen.availHeight - wechatTopBarHeight : window.screen.availHeight;

function run() {
	document.getElementById('load').style.opacity = 0;

	setTimeout(function() {
		const points = [
			{ x: 242, y: 457 },
			{ x: 361, y: 523 },
			{ x: 496, y: 447 },
			{ x: 719, y: 573 },
			{ x: 854, y: 543 },
			{ x: 733, y: 465 },
			{ x: 940, y: 330 },
			{ x: 791, y: 214 },
			{ x: 667, y: 154 },
			{ x: 571, y: 211 },
			{ x: 508, y: 178 },
			{ x: 340, y: 258 },
			{ x: 371, y: 370 }
		];

		/**
		 * [convertPxToInt: extract int value from a px value]
		 * @param  {[type]} px [the px string value]
		 * @return {[type]}    [description]
		 */
		function convertPxToInt(px) {
			return parseInt(px.substring(0, px.indexOf('px')));
		}

		/**
		 * [hideScrollBar: hide scroll bar]
		 * @param  {[type]} viewPort [description]
		 * @return {[type]}          [description]
		 */
		function hideScrollBar(viewPort) {
			viewPort.style.width = screenWidth + 'px';
			viewPort.style.height = screenHeight + 'px';
		}

		/**
		 * [setBackgroundRatio: set the ratio of the background]
		 * @param {[type]} map [description]
		 */
		function setBackgroundRatio(map) {
			const ratio = map.scrollWidth / map.scrollHeight;

			/** ratio to the height of the height of the screen */
			const scaleRatio = 1.5;

			var height = scaleRatio * screenHeight > map.scrollHeight ? map.scrollHeight : scaleRatio * screenHeight;
			var width = height * ratio;

			map.style.width = width + 'px';
			map.style.height = height + 'px';
		}

		/**
		 * [showPosition: use animation to jump to a specific position]
		 * @param  {[type]} xp       [description]
		 * @param  {[type]} yp       [description]
		 * @param  {[type]} map      [description]
		 * @param  {[type]} viewPort [description]
		 * @return {[type]}          [description]
		 */
		function showPosition(xp, yp, map, viewPort) {
			const speedTime = 20;

			var offsetLeft;
			var offsetTop;


			/** convert percent to px */
			var x = xp * convertPxToInt(map.style.width);
			var y = yp * convertPxToInt(map.style.height);

			/** calc */
			offsetLeft = parseInt(x - screenWidth / 2);
			offsetTop = parseInt(y - screenHeight / 2);

			/** validate */
			offsetLeft = offsetLeft <= 0 ? 0 : offsetLeft;
			offsetLeft = offsetLeft >= (convertPxToInt(map.style.width) - screenWidth) ? (convertPxToInt(map.style.width) - screenWidth) : offsetLeft;

			offsetTop = offsetTop <= 0 ? 0 : offsetTop;
			offsetTop = offsetTop >= (convertPxToInt(map.style.height) - screenHeight) ? (convertPxToInt(map.style.height) - screenHeight) : offsetTop;

			/** set scroll */
			/** animate */
			var timeIndex = 0;

			var startLeft = viewPort.scrollLeft;
			var startTop = viewPort.scrollTop;

		    var scrollInterval = setInterval( function() {
		        if (Math.abs(viewPort.scrollLeft - offsetLeft) > 2 || Math.abs(viewPort.scrollTop - offsetTop) > 2) {
		        	var calc = Animate.easeInOutQuad;

					viewPort.scrollLeft = Math.round(calc(timeIndex, startLeft, offsetLeft - startLeft, speedTime));
		        	viewPort.scrollTop = Math.round(calc(timeIndex, startTop, offsetTop - startTop, speedTime));
		        	timeIndex++;	
		        } else {
					clearInterval(scrollInterval);            	
		        }
		    }, 1);
		}

		/**
		 * [loadPoints: load all points with an array]
		 * @param  {[type]} parent      [description]
		 * @param  {[type]} pointsArray [description]
		 * @return {[type]}             [description]
		 */
		function loadPoints(parent, pointsArray) {
			const ivanaXRadius = 0;
			const ivanaYRadius = 15;

			for (var i = 0; i < pointsArray.length; i++) {
				var pinBox = document.createElement('div');
				
				var pin = document.createElement('div');
				pin.setAttribute('class', 'pin');
				pin.style.left = pointsArray[i].x - ivanaXRadius + 'px';
				pin.style.top = pointsArray[i].y - ivanaYRadius + 'px';

				var pulse = document.createElement('div');
				pulse.setAttribute('class', 'pulse');
				pulse.style.left = pointsArray[i].x - ivanaXRadius + 'px';
				pulse.style.top = pointsArray[i].y - ivanaYRadius + 'px';

				pinBox.appendChild(pin);
				pinBox.appendChild(pulse);

				pin.addEventListener('click', function () {
					showPosition(convertPxToInt(this.style.left) / 1240, convertPxToInt(this.style.top) / 690, document.getElementById('map'), document.getElementById('view'));
				}.bind(pin));

				parent.appendChild(pinBox);
			}
		}

		/**
		 * [loadLines: load all lines with an array]
		 * @param  {[type]} parent     [description]
		 * @param  {[type]} linesArray [description]
		 * @return {[type]}            [description]
		 */
		function loadLines(parent, linesArray) {

		}



		/**
		 *
		 *
		 *
		 *
		 * 
		 * Start to execute
		 *
		 *
		 *
		 *
		 * 
		 */

		document.getElementById('load').style.display = 'none';
		hideScrollBar(document.getElementById('view'));
		loadPoints(document.getElementById('map'), points);
		setBackgroundRatio(document.getElementById('map'));
		
		showPosition(0.5, 0.5, document.getElementById('map'), document.getElementById('view'));
		document.getElementById('view').style.opacity = 1;

		var index = 0;

		// setInterval(function () {
		// 	showPosition(points[index].x / 1240, points[index].y / 690, document.getElementById('map'), document.getElementById('view'));
		// 	index = (index + 1) % points.length;
		// }, 1000);
	}, 1200);
}