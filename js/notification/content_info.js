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
				message : '<img src="pic/INFO.png"></img><b style="color:#60b17c;font-size:16px;">SONGS</b><p style="color:#60b17c;font-size:13px;"> OF THE WEEK</p>',
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