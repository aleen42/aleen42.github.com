var Animate = {
	/**
	 * [linearTween: no easing, no acceleration]
	 * @param  {[type]} t [current time]
	 * @param  {[type]} b [start value]
	 * @param  {[type]} c [offset]
	 * @param  {[type]} d [duration]
	 * @return {[type]}   [description]
	 */
	linearTween: function (t, b, c, d) {
		return c*t/d + b;
	},

	/**
	 * [easeInOutCirc: acceleration until halfway, then deceleration]
	 */
	easeInOutCirc: function (t, b, c, d) {
		t /= d / 2;
		if (t < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
		t -= 2;
		return c / 2 * (Math.sqrt(1 - t * t) + 1) + b;
	},

	/**
	 * [easeInOutQuad: acceleration until halfway, then deceleration]
	 */
	easeInOutQuad: function (t, b, c, d) {
		t /= d/2;
		if (t < 1) return c/2*t*t + b;
		t--;
		return -c/2 * (t*(t-2) - 1) + b;
	},

	/**
	 * [easeInOutCubic: acceleration until halfway, then deceleration]
	 */
	easeInOutCubic: function (t, b, c, d) {
		t /= d/2;
		if (t < 1) return c/2*t*t*t + b;
		t -= 2;
		return c/2*(t*t*t + 2) + b;
	}
};