//Question link- https://edabit.com/challenge/3zAT89ZAxg4CAQqsZ
function secondLargest(arr) {
    let x=arr.sort(function(a,b){
          return a-b;
    });
    x.pop();
    let y=x.reduce(function(u,v){
        return Math.max(u,v);
    });
    return y;
	
}
let arr=[10, 40, 30, 20, 50];
console.log(secondLargest(arr));
let arr1=[25, 143, 89, 13, 105];
console.log(secondLargest(arr1));
let arr2=[54, 23, 11, 17, 10];
console.log(secondLargest(arr2));
/*

let arr1=[25, 143, 89, 13, 105];
let s=arr1.sort(function(a,b){
    return a-b; 
});
console.log(s);
s.pop();
console.log(s);
let j=s.reduce(function(u,v){
    return Math.max(u,v);
});
console.log(j);
*/
