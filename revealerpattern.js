var module = (function(){
	var scope = {}, 
			sum, change;
	
	scope.x = 30;
	scope.y = 10; 
	
	sum = function() {
		return scope.x + scope.y;
	};

	change = function (changeObj) {
		var key; 
		for(key in changeObj) {
			if(scope[key]) scope[key] = changeObj[key];
		}

	};

	return {
		sum: sum,
		change: change,
		scope: scope
	};

}());


console.log(module.sum());
module.scope.x = 5;
console.log(module.sum());









//console.log(module.sum());

//change({x: 500, y: 33});

