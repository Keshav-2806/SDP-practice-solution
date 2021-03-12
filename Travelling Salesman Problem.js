//Question link- https://edabit.com/challenge/r453y7c3vBQz4Rrbn
function factorial(path) {
    if(path==0){
        return 1;
    }else if(path==1){
        return 1;
    }else{
        return path*factorial(path-1);
    }
	
}
console.log(factorial(4));
console.log(factorial(1));
console.log(factorial(9));
