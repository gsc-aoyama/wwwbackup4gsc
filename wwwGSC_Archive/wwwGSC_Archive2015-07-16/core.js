Modernizr.load([
	{
		// Load jQuery
		load: '//ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js',
		complete: function () {
			// fallback
			if ( !window.jQuery ) {
				Modernizr.load('/js/lib/jquery.js');
			}
		}
	},
	{
		// Cross-browser scripts
		load: ['ielt9!/js/lib/IE9.js', 'ielt8!/js/lib/json2.js']
	},
	{
		//localStorage polyfill
		test: !window.localStorage || !window.sessionStorage,
		yep: '/js/lib/storage-polyfill.js'
	},
	{
		// Plugins
		load: '/js/jquery.uaTab.min.js'
	},
	{
		// Common script
		load: '/js/script.js'
	},
	{
		// Top page script
		test: /^(\/|\/index\.html|\/index_autumn\.html|\/index_spring\.html|\/index_winter\.html)$/.test(window.location.pathname),
		yep: '/js/index_script.js'
	},
	{
		test: /^(\/outline\/photogallery\/(spring|summer|autumn|winter))/.test(window.location.pathname),
		yep: ['/js/shadowbox/shadowbox.js','css!/js/shadowbox/shadowbox.css'],
		callback: function(){
			Shadowbox.init();
		}
	},
	{
		test: /^(\/admission\/undergraduate\/open_campus\/open_campus\.html)/.test(window.location.pathname),
		yep: ['/js/shadowbox/shadowbox.js','css!/js/shadowbox/shadowbox.css'],
		callback: function(){
			Shadowbox.init();
		}
	}
]);

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-3354939-1']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
