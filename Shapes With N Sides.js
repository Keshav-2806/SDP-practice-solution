//Question link- https://edabit.com/challenge/wpHyrxbSaYxLeXT6L
function nSidedShape(n) {
	let x={
		1:"circle",
		2:"semi-circle",
		3:"triangle",
		4:"square",
		5:"pentagon",
		6:"hexagon",
		7:"heptagon",
		8:"octagon",
		9:"nonagon",
		10:"decagon"
	};
	return x[n];
	
}
let n= nSidedShape(3);
let n1=nSidedShape(1);
let n2=nSidedShape(9);
console.log(n);
console.log(n1);
console.log(n2);