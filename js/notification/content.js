(function() 
{
	var bttn = document.getElementById( 'notification-trigger' );

	// make sure..
	bttn.disabled = false;
	
	bttn.addEventListener( 'click', function() {
	// simulate loading (for demo purposes only)
	classie.add( bttn, 'active' );
	setTimeout( function() {

	classie.remove( bttn, 'active' );
						
	// create the notification
	var notification = new NotificationFx({
	/*<b style="color:#60b17c;">Chrome</b>*/
		message : '<font style="font-size:16px;">Thank you for coming to my page. Bugs of <b style="color:#60b17c;">IE</b> have been solved. I\'m so sorry that the website is temporarily not designed for <b style="color:#60b17c;">Phones</b> to visit. <b style="color:#60b17c;">SVG</b> animation is not yet supported by IE, while <b style="color:#60b17c;">CSS</b> animation is well supported by <b style="color:#60b17c;">IE</b>, <b style="color:#60b17c;">Firefox</b> and <b style="color:#60b17c;">Chrome</b>.</font>',
		layout : 'attached',
		effect : 'bouncyflip',
		type : 'notice', // notice, warning or error
		onClose : function() {
			bttn.disabled = false;
		}
	});

			// show the notification
			notification.show();
	}, 0 );
					
		// disable the button (for demo purposes only)
		this.disabled = true;
	} );
})();