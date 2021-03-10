 //Question link- https://edabit.com/challenge/humnHvXGXnBnStg5F
 function trace(arr) {
   let c=0
   for(let i in arr){
     for(let j in arr[i]){
       if(i==j){
          c=c+arr[i][j];
       }
     }
   }
   return c;
     
	
}
let arr=[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
console.log(trace(arr));
let arr1=[
  [4,5],
  [7,8]
]
console.log(trace(arr1));
