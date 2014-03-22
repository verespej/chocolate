function registerFb(connectedCallback) {
	window.fbAsyncInit = function() {
		FB.init({
			appId       : '229024550637463', // App ID
			//channelUrl : '//vetlocal.co/channel.html', // Channel File
			channelUrl  : '//localhost:5000/channel.html', // Channel File
			status      : true, // check login status
			cookie      : true, // enable cookies to allow the server to access the session
			xfbml       : true	// parse XFBML
		});

		FB.Event.subscribe('auth.authResponseChange', function (response) {
			if (response.status === 'connected') {
				connectedCallback();
			} else {
				FB.login();
			}
		});
	};
}
		 
// Load the SDK asynchronously
(function(d){
	 var js, id = 'facebook-jssdk', ref = d.getElementsByTagName('script')[0];
	 if (d.getElementById(id)) {return;}
	 js = d.createElement('script'); js.id = id; js.async = true;
	 js.src = "//connect.facebook.net/en_US/all.js";
	 ref.parentNode.insertBefore(js, ref);
}(document));

function loginToFB(callback) {
	FB.login(
		function(loginResponse) {
			if (loginResponse.authResponse) {
				callback(true);
			} else {
				console.log('User cancelled login or did not fully authorize.');
				callback(false);
			}
		},
		{
			scope: 'email'
		}
	);
}

