(function(d){
	d.extend({
		log: function(str){
			if((window.console)&&(user.isConsole)){
				console.log(str);
			}
		},
		find: function(obj){
			try{
				return document.querySelectorAll(obj);
			} catch(e){
				return Sizzle(obj);
			}
		},
		initialize: function(){
			console.log(d.set.name+' is '+d.set.age+' years old')
		}
	})
})(plugin);
