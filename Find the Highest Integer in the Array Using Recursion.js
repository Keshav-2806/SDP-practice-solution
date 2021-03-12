//Question link- https://edabit.com/challenge/szYmNqApJyQ3ePnKH
/*

findHighest([-1, 3, 5, 6, 99, 12, 2]) ➞ 99

findHighest([0, 12, 4, 87]) ➞ 87

findHighest([6,7,8]) ➞ 8*/
function findHighest(arr) {
    num=arr.slice();
    if(num.length==1){
        return num[0];
    }else if(num[0]<num[1]){
        num.splice(0,1);
    }else{
        num.splice(1,1);
    }
    return findHighest(num);
	
}
let arr=[-1, 3, 5, 6, 99, 12, 2];
console.log(findHighest(arr));
let arr1=[0, 12, 4, 87];
console.log(findHighest(arr1));
let arr2=[6,7,8];
console.log(findHighest(arr2));
let arr3=[1];
console.log(findHighest(arr3));
