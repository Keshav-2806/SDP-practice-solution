//Question link- https://edabit.com/challenge/2oMTwjqmmXD8XBuMn
function flatten(arr) {
    var flat=arr.flat(Infinity);
    return flat;
   

	
}
let arr=[[17.2, 5, "code"]];
console.log(flatten(arr));
let arr1=[[[[[2, 14, "rubber"]]], 2, 3, 4]]
console.log(flatten(arr1));
let arr2=[["balkot"]];
console.log(flatten(arr2));
