/*!
 * Plugin Javascript Plugin v0.0.1.0
 *
 * Copyright © 2013 MingFang. All rights reserved.
 * http://mingfang.cxm.tw/
 *
 * Date: Fri Aug 02 2013 17:45:29 GMT+0800 (Central Standard Time)
 */
(function(a, b) {
	func=function(){
		var d=function(){
			return new d.fn.init();
		}
		d.set={
			name: 'Tom',
			age: 21
		}
		d.fn=d.prototype={
			constructor: d, 
			version: '3.0.0.0',
			init: function(){
				return this;
			}
		}
		d.fn.init.prototype=d.fn;
		d.extend=d.fn.extend=function(){
			// jQuery JavaScript Library v2.0.2 extend  //
			var options, name, src, copy, copyIsArray, clone,
				target=arguments[0] || {},
				i=1,
				length=arguments.length,
				deep=false;
			if(typeof target === 'boolean'){
				deep=target;
				target=arguments[1] || {};
				i=2;
			}
			if(typeof target !== 'object' && !d.isFunction(target)){
				target={};
			}
			if(length === i){
				target=this;
				--i;
			}
			for(; i < length; i++){
				if((options=arguments[ i ]) != null){
					for(name in options){
						src=target[name];
						copy=options[name];
						if(target === copy){
							continue;
						}
						if(deep && copy && (d.isPlainObject(copy) || (copyIsArray=d.isArray(copy)))){
							if(copyIsArray){
								copyIsArray=false;
								clone=src && d.isArray(src) ? src : [];
							} else{
								clone=src && d.isPlainObject(src) ? src : {};
							}
							target[name]=d.extend(deep, clone, copy);
						} else if(copy !== undefined) {
							target[ name ]=copy;
						}
					}
				}
			}
			return target;
		};
		d.extend({
			// jQuery JavaScript Library v2.0.2 extend  //
			isFunction: function(obj){
				return d.type(obj) === 'function';
			},
			isPlainObject: function(obj){
				if(d.type(obj) !== 'object' || obj.nodeType || d.isWindow(obj)){
					return false;
				}
				try{
					if(obj.constructor && !core_hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')){
						return false;
					}
				} catch(e){
					return false;
				}
				return true;
			},
			isWindow: function(obj){
				return obj != null && obj === obj.window;
			},
			isArray: Array.isArray,
			type: function(obj){
				if(obj == null){
					return String(obj);
				}
				return typeof obj === 'object' || typeof obj === 'function' ? 'object' : typeof obj;
			}
		})
		return d;
	}();
	a.plugin=func;
	return this;
})(window);
