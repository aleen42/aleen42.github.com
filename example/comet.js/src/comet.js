"use strict";
/**
 * [comet: the class of comet]
 * @type {Object}
 */
var comet = {
    /**
     * [sleepTime: the time during each refresh]
     * @type {Number}
     */
    sleepTime: 2000,

    /**
     * [_subscribed: an object for storing your post data]
     * @type {Object}
     */
    _subscribed: {},

    /**
     * [_timeout: an object for storing a timeout instance]
     * @type {[type]}
     */
    _timeout: null,

    /**
     * [_baseurl: the url which you want to post to]
     * @type {String}
     */
    _baseurl: "",

    /**
     * [callback: an object for storing the callback function]
     * @type {Function}
     */
    callback: null,

    /**
     * [_sleepTime: the time during each handling, like searching databases]
     * @type {Number}
     */
    _sleepTime: 1,

    /**
     * [_count: point out how many times you want to handle for each ajax]
     * @type {Number}
     */
    _count: 1,
	
	/**
     * [_published: point out if it's published]
     * @type {Number}
     */
	_published: false,

    /**
     * [subscribe: a method to storing post data and callback function]
     * @param  {Object}   postData [post data]
     * @param  {Function} callback [callback function]
     * @return {[type]}            [description]
     */
    subscribe: function (postData, callback) {
        "use strict";
        comet._subscribed = postData;
        comet._subscribed['sleepTime'] = comet._sleepTime;
        comet._subscribed['count'] = comet._count;
        comet.callback = callback;
        return comet;
    },

    /**
     * [_refresh: amethod to refresh to run another ajax]
     * @return {[type]} [description]
     */
    _refresh: function () {
        "use strict";
        comet._timeout = setTimeout(function () {
			setTimeout(function() {
				$('#status').html('Listen');
				$('#status').removeClass('notify');
				$('#status').addClass('show');
			}, 1000);
            comet.run();
        }, comet.sleepTime);
    },

    /**
     * [init: init the needed parameters]
     * @param  {[type]} baseurl   [the url you want to post to]
     * @param  {[type]} sleepTime [optional]
     * @param  {[type]} count     [optional]
     * @return {[type]}           [description]
     */
    init: function (baseurl, sleepTime, count) {
        "use strict";
        sleepTime = sleepTime || 1;
        count = count || 1;
        if (baseurl != undefined) {
            comet._baseurl = baseurl;
        }
        comet._sleepTime = sleepTime;
        comet._count = count;
    },

    /**
     * [run: run the ajax]
     * @return {[type]} [description]
     */
    run: function () {
        "use strict";
		$('#status').addClass('notify');
        $.getJSON(comet._baseurl, comet._subscribed, function (data) {
			if (!comet._published) {
				switch (data.success) {
	                case 'false':
	                    /**
	                     * refresh when ajax return false, which you do not want
	                     */
	                    comet._refresh();
	                    break;
	                case 'true':
	                    /**
	                     * trigger callback function when ajax return true
	                     */
	                    comet.callback(data);
	                    break;
	            }
			} else {
				comet.callback(data);
			}
        });
    },

    /**
     * [publish: for test]
     * @return {[type]} [description]
     */
    publish: function() {
        comet._published = true;
    }
};