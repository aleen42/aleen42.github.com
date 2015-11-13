"use strict";

var init = {};

init.initShare = function () {
	var title = 'Soundtooth-share.js';
	var image = 'http://share.soundtooth.cn/share.png';
	share.initTencent('qzone', $('#share-qzone'), title, image); 
	share.initTencent('qq', $('#share-qq'), title, image);
	share.initWeibo('', $('#share-weibo'), title, image);
	share.initTieba($('#share-tieba'), title, image); 
}