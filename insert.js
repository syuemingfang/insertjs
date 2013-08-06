/*!
 * insertJS Javascript Plugin v0.0.1.0
 *
 * Copyright © 2013 MingFang. All rights reserved.
 * http://mingfang.cxm.tw/
 *
 * Date: Fri Aug 02 2013 17:45:29 GMT+0800 (Central Standard Time)
 */
/*
#How to use
+ Part 1- Setup
  include this javascript files in your header.
	<script id='insertJS' data-config='insert.config.js' src='insert.js'></script>
+ Part 2- Set
  select the links and call the javascript, see some examples.
  + Lite
    	insert.load({filename: 'a.js'},{filename: 'b.js'});
  +

*/
(function(a){
	var insertJS=document.getElementById('insertJS');
	// ##Documentation //
	// ##Function //
	getPath=function(){
		// Get Domain Name //
		var regExp=null, domainName=null;
		regExp=new RegExp('(.*/)[^/]+\.js|^[^/]+\.js');
		domainName=insertJS.attributes['src'].value.replace(regExp, '$1')||'';
		return domainName;
	}
	getBrowser=function(){
		// Get Client Browser //
		var client=(navigator.userAgent).toUpperCase(), browser=null;
		if(document.all){
			if(client.indexOf('MSIE 10.0') >= 0){
				browser='IE10';
			}else if(client.indexOf('MSIE 9.0') >= 0){
				browser='IE9';
			}else if(client.indexOf('MSIE 8.0') >= 0){
				browser='IE8';
			}else if(client.indexOf('MSIE 7.0') >= 0){
				browser='IE7';
			}else if(client.indexOf('MSIE 6.0') >= 0){
				browser='IE6';
			}
		} else{
			if(client.indexOf('FIREFOX') >= 0){
				browser='FIREFOX';
			}else if(client.indexOf('OPERA') >= 0){
				browser='OPERA';
			}else if(client.indexOf('ANDROID') >= 0){
				browser='ANDROID';
			}else if(client.indexOf('SAFARI') >= 0 && client.indexOf('IPAD') > 0){
				browser='IPAD';
			}else if(client.indexOf('CHROME') >= 0){
				browser='CHROME';
			}else if(client.indexOf('SAFARI') >= 0){
				browser='SAFARI';
			}
		}
		return browser;
	}
	createNode=function(url, where){
		// Create Script Node //
		var node=null;
		node=document.createElement('script');
        node.charset='utf-8';
        node.async=true;
		node.src=url;
		if(where == 'head')
			document.getElementsByTagName('head')[0].appendChild(node)
		else
			document.getElementsByTagName('body')[0].appendChild(node)			
	}
	getRandom=function(min, max){
		// Get Random //
		return Math.floor(Math.random()*(max-min+1)+min);
	}
	checkObj=function(obj){
		// Check Obj If True Then Let's Go //
		if(typeof(obj) == 'string'){
			return eval('typeof('+obj+')') !== 'undefined' ? true : false
		}
		else if(typeof(obj) == 'boolean'){
			return obj;
		}
		else{
			return obj();
		}
	}
	load=function(obj){
		// Loading Object //
		var path=null, set={}, o=null, counter=null;
		for(var i in obj){
			// Get Obj //
			o=obj[i];
			delete obj[i];
			break;
		}
		if(!o) return
		function ready(){
			if(this.checkObj(set.check) == true || counter > set.limit){
				if(obj !== null) this.load(obj)
			}
			else{
				setTimeout(ready, set.speed*1000);
				counter++;
			}
		}
		set={
			path: o.path ? o.path : this.getPath(),
			speed: o.speed ? o.speed : 0.2,
			browser: o.browser ? o.browser : true,
			limit: o.limit ? o.limit : 300/set.speed,
			where: o.where ? o.where : 'head',
			cache: o.cache ? o.cache : false,
			filename: o.filename ? o.filename : o,
			check: o.check ? o.check : true
		}
		set.filename=set.cache ? set.filename+'?r='+getRandom(1,1000) : set.filename; //Get Cache

		if(set.browser === true){
			this.createNode(set.path+set.filename);
			ready();
		}
		else{
			browser=this.getBrowser();
			for(var i in set.browser){
				if(set.browser[i].toUpperCase() === browser){
					this.createNode(set.path+set.filename, set.where);
					ready();					
					break;
				}
			}
		}
		if(eval('typeof('+o.callback+')') !== 'undefined'){
			setTimeout(o.callback, set.speed*1000);
		}
	}
	createNode(insertJS.attributes['data-config'].value);
	a.insert=this;
})(window);

