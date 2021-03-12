//Question link- https://edabit.com/challenge/GW5kYFCvGWDZ6TRxd
function factorial(int) {
    if(int==0){
        return 1;
    }else if(int==1){
        return 1;
    }else{
        for(let i=int-1;i>=1;i--){
            int*=i;
        }
        }
        return int;
    }
	

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(13));
console.log(factorial(4));