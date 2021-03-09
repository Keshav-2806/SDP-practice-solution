//Question link - https://edabit.com/challenge/cEbhy9eWeNudEuxut
function makeCopy(obj) {
	let copy=Object.assign({}, obj);
	return copy;
}
let obj={ piano: 100, tv: 50 };
console.log(makeCopy(obj));