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
		$('#status').html('Return');
		$('#status').addClass('notify');
		setTimeout(function() {
			$('#status').removeClass('notify');
		}, 1000);
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
