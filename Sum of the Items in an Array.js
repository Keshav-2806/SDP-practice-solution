//Question link- https://edabit.com/challenge/27Toh4rACcmRvRLrb
function sumArray(arr) {
    let x=[];
    x=[...arr];
    let k=x.flat(Infinity);
    let y=k.reduce(function(d,f){
        return d+f
    },0);
    return y;
	
}
let arr=[1, 2, 3];
console.log(sumArray(arr));
let arr1=[1, [2, [1]], 3];
console.log(sumArray(arr1));
let arr2=[[1],[2,3],4,[5]];
console.log(sumArray(arr2));



/*
let arr=[1, [2, [1]], 3];
let x=[];
x=[...arr];
console.log(x);
console.log(x.flat(Infinity));*/