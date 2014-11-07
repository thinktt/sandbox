
var mod = (function() {
	var sum = 0; 

	function abc() {
		var args; 
		if (arguments.length) {
			args = Array.prototype.slice.call(arguments);
			sum = sum + args.shift();
			abc.apply(null, args);
		} 
		return sum;
	}
	return {abc: abc};

}());


console.log(mod.abc(1,2,3,4,5));
console.log(mod.abc(10));