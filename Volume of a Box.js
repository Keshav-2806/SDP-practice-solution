//Question link- https://edabit.com/challenge/ms3q5GYSpFpwxeFWX
function volumeOfBox(sizes) {
	volume=sizes.width*sizes.length*sizes.height;
	return volume;
	
}
let sizes={width:2,length:5,height:1};
let sizes1={width:4,length:2,height:2};
let sizes2={width:2,length:3,height:5};
console.log(volumeOfBox(sizes));
console.log(volumeOfBox(sizes1));
console.log(volumeOfBox(sizes2));