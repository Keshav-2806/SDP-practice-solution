//Question link- https://edabit.com/challenge/ku3fnFZC5vrCRWn5K
//using the  while loop
/*function euclidean(a, b) {
	 var  rem;
     while(a%b>0){
         rem=a%b;
         a=b;
         b=rem;
     }
     return b;
}
console.log(euclidean(8,6));*/

//using the recursion
function euclidean(a, b) {
    if(b==0){
        return a;
    }else{
        return euclidean(b,(a%b));
    }

}
console.log(euclidean(8,6));
console.log(euclidean(25,5));
console.log(euclidean(49,7));
console.log(euclidean(203,91));