//Question link- https://edabit.com/challenge/TpqLBh6weuqFs9qKy
function fibonacci(num) {
    if(num==0){
        return 1;
    }else if(num==1){
        return 1;
    }else{
        return fibonacci(num-2)+fibonacci(num-1);
    }
	
}
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(12));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(6));
