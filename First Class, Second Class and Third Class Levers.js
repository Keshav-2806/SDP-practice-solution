//Question link - https://edabit.com/challenge/RxsaajpPai3CB9G9e

function determineLever(arr) {
	if (arr[1] === "f") {
		return "first class lever";
	}
	else if (arr[2] === "f") {
		return "second class lever";
	}
	else {
		return "third class lever";
	}
}
let arr=["e","f","l"]
let arr1=["e", "l", "f"];
let arr2=["f", "e", "l"];
console.log(determineLever(arr));
console.log(determineLever(arr1));
console.log(determineLever(arr2));
