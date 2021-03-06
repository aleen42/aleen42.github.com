"use strict";
var init = {};

init.initComet = function () {
	"use strict";
	/**
	 * Init comet
	 */
	comet.init('http://video.soundtooth.cn/play/testComet');
	
	var postData = {
		data: 'value'	
	};
	
	/**
	 * Set the post data and call back function
	 */
	comet.subscribe(postData, function(data) {
		console.log('return');
	});
	
	$('#listen').click(function (){
		"use strict";
		/**
		 * Run the comet
		 */
		comet.run();
	});
	
	$('#publish').click(function (){
		"use strict";
		/**
		 * Run the comet
		 */
		comet.publish();
	});
};
