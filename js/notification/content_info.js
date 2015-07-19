(function() {
	var svgshape = document.getElementById( 'notification-shapeone' ),
		s = Snap( svgshape.querySelector( 'svg' ) ),
		path = s.select( 'path' ),
		pathConfig = {
			from : path.attr( 'd' ),
			to : svgshape.getAttribute( 'data-path-to' )
	},
	bttn = document.getElementById( 'notification-triggerone' );
	// make sure..
	bttn.disabled = false;

	bttn.addEventListener( 'click', function() {
	// simulate loading (for demo purposes only)
		classie.add( bttn, 'active' );
		setTimeout( function() {

			path.animate( { 'path' : pathConfig.to }, 300, mina.easeinout );

			classie.remove( bttn, 'active' );
						
			// create the notification
			var notification = new NotificationFx({
				wrapper : svgshape,
				message : '<b style="color:#60b17c;font-size:17px;position:absolute;top:10px;right:2px;">SONGS</b><p style="color:#60b17c;font-size:13px;position:absolute;top:30px;">OF THE WEEK</p><font style="color:rgba(0,0,0,1);font-size:4px;position:absolute;top:55px;right:0px;">July 19th, 2015</font>',
				layout : 'other',
				effect : 'cornerexpand',
				type : 'notice', // notice, warning or error
				onClose : function() {
					bttn.disabled = false;
					setTimeout(function() {
						path.animate( { 'path' : pathConfig.from }, 300, mina.easeinout );
					}, 200 );
				}
			});

			// show the notification
			notification.show();

		}, 0 );
					
		// disable the button (for demo purposes only)
		this.disabled = true;
	} );
})();