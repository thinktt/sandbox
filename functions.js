 var father = {name: 'Toby'},
 		 son  = Object.create(father),
 		 key;


father.age = 34;
father.sex = 'male';
father.race = 'whitey';

son.age = 29;

for(key in son) {
	console.log(son.hasOwnProperty(key));
}

//son.prototype.age = 29;

