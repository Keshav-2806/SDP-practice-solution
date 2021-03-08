//Question link- https://edabit.com/challenge/xtHTBXjumRg5AhsT5
//isFirstSuperior([1, 2, 4], [1, 2, 3]) ➞ true
// The pair of items at each index are compared in turn.
// 1 from the first array is the same as 1 from the second array.
// 2 is the same as 2.
// However, 4 is greater than 3, so first array is superior.

function isFirstSuperior(arr1, arr2) {
    if(arr1>arr2){
        return true;
    }else{
        return false;
    }
}
let arr1=[1,2,4];
let arr2=[1,2,3];
console.log(isFirstSuperior(arr1,arr2));
let arr3=["zebra", "ostrich", "whale"];
let arr4=["ant", "ostrich", "whale"];
console.log(isFirstSuperior(arr3,arr4));
let arr5=[1, 2, 3, 4];
let arr6=[1, 2, 4, 4];
console.log(isFirstSuperior(arr5,arr6));
let arr7=[true, 10, "zebra"];
let arr8=[true, 10, "zebra"];
console.log(isFirstSuperior(arr7,arr8));


