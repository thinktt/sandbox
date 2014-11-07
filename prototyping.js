 var father = {name: 'Toby'},
 		 son  = Object.create(father),
 		 key;


father.age = 34;
father.sex = 'male';
father.race = 'whitey';

son.age = 29;

// for(key in son) {
// 	console.log(son.hasOwnProperty(key));
// }


// console.log(Object.getPrototypeOf(son));
// console.log(son.propertyIsEnumerable('age'));

//son.prototype.age = 29;

function Human (name) {
	this.name = name; 
}

Human.prototype.getName = function () {
	return name;
};

var bob = new Human('Bob');

console.log(bob.getName());
