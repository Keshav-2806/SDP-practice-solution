//Question link- https://edabit.com/challenge/zemLfbNWaKuhrbJPt
function sortIt(arr) {
    let x=arr.sort();
    return x;

	
}
let arr=[[4], [1], [3]];
console.log(sortIt(arr));
let arr1=[4, [1], 3];
console.log(sortIt(arr1));
let arr2=[[4], 1, [3]];
console.log(sortIt(arr2));
let arr3=[[3], 4, [2], [5], 1, 6];
console.log(sortIt(arr3));
