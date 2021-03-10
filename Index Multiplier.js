//Question link- https://edabit.com/challenge/3Efavz8YmSBia4p8s
function indexMultiplier(arr) {
    let c=0
    for(let i in arr){
        let sum=arr[i]*i;
        c=c+sum;

    }
    return c;
	
}
let arr=[1, 2, 3, 4, 5];
console.log(indexMultiplier(arr));
let arr2=[-3, 0, 8, -6];
console.log(indexMultiplier(arr2));