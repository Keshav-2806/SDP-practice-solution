//Question link- https://edabit.com/challenge/MXChCnzCSBobgY4Ex
/*function flatten(arr) {
    arr2 = [];
    for (let i = 0; i < arr.length; i++) {
      arr2.concat(arr[i]);
    }
    return arr2; 
  }
let arr=[[1, 2], [3, 4]];
console.log(flatten(arr));*/
function flatten(arr){
    let x=arr.reduce(
        function(a,b){
            return a.concat(b)
        },
        []
    )
    return x;
}
let arr=[[1, 2], [3, 4]];
console.log(flatten(arr));
let arr1=[["a", "b"], ["c", "d"]];
console.log(flatten(arr1));
let arr2=[[true, false], [false, false]];
console.log(flatten(arr2));
