insert.load({
	'sizzle': {
		filename: 'sizzle.min.js',
		check: 'Sizzle',
		path: 'http://127.0.0.1:81/insertjs/',
		browser: true
	},
	'jQuery': {
		filename: 'jquery.js',
		check: function(){
			if(typeof($) !== 'undefined'){
				if($.fn.jquery == '1.10.1')
					return true;
			}
		},
		callback: function(){
			j$1101=$.noConflict(true);
		}
	},
	'plugin': {
		filename: 'plugin.js',
		check: 'plugin',
		browser: true
	},
	'plugin.part': {
		filename: 'plugin.part.js',
		check: 'plugin',
		browser: true
	},
	'plugin.config': {
		filename: 'plugin.config.js',
		check: 'plugin',
		browser: true,
		callback: function(){
			console.log(j$1101);
			plugin.initialize();
		}
	}
});
