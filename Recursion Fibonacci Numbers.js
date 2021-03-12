//Question link- https://edabit.com/challenge/z9NGF7CJvXfk9y8eB
function fib(n) {
    if(n==0){
        return 0;
    }else if(n==1){
        return 1;
    }else{
        return fib(n-2)+fib(n-1);
    }
	
}
console.log(fib(0));
console.log(fib(1));
console.log(fib(8));
console.log(fib(2));
console.log(fib(10));
console.log(fib(15));
console.log(fib(9));