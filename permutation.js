var arr = [1,2,3,4];

function getPermutation(list) {
	var arr = list.slice();
	var permutations;
	var permsList = [];
	var curent; 
	var i, j;

	if(list.length === 1) return [arr];

	for(i=0; i<list.length; i++) { 
		current = list[i];
		arr = list.slice();
		arr.splice(i,1);
		//console.log(current);
		//console.log(arr);

		permutations = getPermutation(arr); 
		for(j=0; j<permutations.length; j++) {
			permutations[j].unshift(current);
			permsList.push(permutations[j]);
		}
	}
	
	return permsList;

}


console.log(getPermutation(arr));


function getNextPerms () {
	return [[8,8,8],[9,9,9]];
}

