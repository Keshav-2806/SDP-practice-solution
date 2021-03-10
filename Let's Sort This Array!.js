//Question link- https://edabit.com/challenge/vsoQiYJXRANcYrX3Z
function ascDesNone(arr, str) {
    if(str=="Asc"){
        let x=arr.sort(function(a,b){
            return a-b;
        });
        return x;
    }else if(str=="Des"){
        let y=arr.sort(function(u,v){
            return u-v;
        });
        let z=y.reverse();
        return z;
    }
    return arr;
	
}
let arr=[4, 3, 2, 1];
let str="Asc";
console.log(ascDesNone(arr,str));
let arr1=[7, 8, 11, 66];
let str1="Des";
console.log(ascDesNone(arr1,str1));
let arr2=[1, 2, 3, 4];
let str2="None";
console.log(ascDesNone(arr2,str2));
